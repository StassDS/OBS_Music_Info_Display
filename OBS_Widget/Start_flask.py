import subprocess
import obspython as obs
import os
import time

flask_script_path = os.path.join(os.path.dirname(__file__), 'flask_server.py')

def start_flask_server():
    try:
        subprocess.Popen(
            ["python", flask_script_path],
            creationflags=subprocess.CREATE_NO_WINDOW  # Скрываем окно
        )
        time.sleep(5)
        obs.script_log(obs.LOG_INFO, "Flask-сервер запущен!")
    except Exception as e:
        obs.script_log(obs.LOG_ERROR, f"Ошибка запуска Flask-сервера: {e}")

def script_load(settings):
    start_flask_server()
    
def script_description():
    return "Скрипт для OBS, который автоматически запускает Flask-сервер при старте."
