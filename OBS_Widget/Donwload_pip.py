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

