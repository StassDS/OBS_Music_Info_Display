from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

current_track = {"artist": "", "track": ""}

current_track = {
    'artist': 'Unknown Artist',
    'track': 'Unknown Track',
    'source': 'Unknown'  # Добавляем новое поле для источника
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
