import subprocess
import obspython as obs
import os
import time

# Путь к файлу Flask-сервера
flask_script_path = os.path.join(os.path.dirname(__file__), 'flask_serwer.py')

# Функция для запуска сервера Flask
def start_flask_server():
    try:
        # Запуск Flask-сервера в скрытом окне
        subprocess.Popen(
            ["python", flask_script_path],
            creationflags=subprocess.CREATE_NO_WINDOW  # Скрываем окно
        )
        time.sleep(2)  # Небольшая пауза для ожидания, пока сервер запустится
        obs.script_log(obs.LOG_INFO, "Flask-сервер запущен!")
    except Exception as e:
        obs.script_log(obs.LOG_ERROR, f"Ошибка запуска Flask-сервера: {e}")

# Функция, которая вызывается при загрузке OBS
def script_load(settings):
    start_flask_server()

# Описание скрипта
def script_description():
    return "Скрипт для OBS, который автоматически запускает Flask-сервер при старте."
