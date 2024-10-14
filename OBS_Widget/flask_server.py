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


from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Изначально текущий трек
current_track = {
    'artist': 'Unknown Artist',
    'track': 'Unknown Track',
    'source': 'Unknown'  # Поле для источника
}

@app.route('/update', methods=['POST'])
def update_track():
    global current_track
    data = request.json
    current_track['artist'] = data.get('artist')
    current_track['track'] = data.get('track')
    current_track['source'] = data.get('source')  # Сохраняем источник
    return jsonify(current_track), 200

@app.route('/track', methods=['GET'])
def get_track():
    return jsonify(current_track)

@app.route('/')
def home():
    return "Music Widget API is running"

if __name__ == '__main__':
    app.run(debug=True)
