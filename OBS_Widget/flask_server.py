import subprocess
import sys

# Функция для установки пакета через pip
def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

# Список необходимых библиотек
required_packages = ["flask", "flask-cors"]

# Проверяем и устанавливаем необходимые библиотеки
for package in required_packages:
    try:
        __import__(package)
    except ImportError:
        print(f"Устанавливаю библиотеку {package}...")
        install(package)

#-------------------------------------------------------------------------

import os
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

current_track = {
    'artist': 'Unknown Artist',
    'track': 'Unknown Track',
    'source': 'Unknown',
    'style': 'default'  # Добавляем поле для текущего стиля
}


# Получаем директорию, для скинов
current_directory = os.path.dirname(os.path.abspath(__file__))
if current_directory.endswith('OBS_Widget'):
    SKINS_DIR = os.path.join(current_directory, 'skins')
else:
    SKINS_DIR = os.path.join(current_directory, 'OBS_Widget', 'skins')

@app.route('/update', methods=['POST'])
def update_track():
    data = request.json
    current_track['artist'] = data.get('artist')
    current_track['track'] = data.get('track')
    current_track['source'] = data.get('source')
    return jsonify(current_track), 200

@app.route('/track', methods=['GET', 'POST'])
def track_info():
    if request.method == 'POST':
        data = request.json
        current_track['style'] = data.get('style', 'default')  # Обновляем стиль
        return jsonify({"status": "style updated", "style": current_track['style']}), 200
    return jsonify(current_track)

# Эндпоинт для получения списка скинов
@app.route('/skins', methods=['GET'])
def get_skins():
    skins = [folder for folder in os.listdir(SKINS_DIR) if os.path.isdir(os.path.join(SKINS_DIR, folder))]
    return jsonify(skins)

if __name__ == '__main__':
    app.run(debug=True)
