# OBS Music Info Display
![Иллюстрация к проекту](https://i.ibb.co/4W3ZftW/ezgif-com-animated-gif-maker-2.gif)
Это Виджет для стримов нацелен для OBS, но может быть использован для любой програмы для стримов поскольку виджет из себя представляет локальный сайт
Суть виджета в отображении информации о музыке которая играет на стриме.
виджет поддерживает сервисы: 
- YouTube Music 
- Plaza.one
- Spotify Web
- SoudCloud
- Yandex Music (Работает но поддержка не обещается)
- VK Music (Не Работает)

# Как скачать
1) Нужно скачать проект и распоковать куда вам удобно
2) Установить ([Python](https://www.python.org))
3) Установить плагин в папке chromium plugin
- Чтобы это сделать нужно зайти в менеджер разширений в браузере (Работает только chomium браузеры, поддержки firefox нету)
- Нажать на "Режим разработчика"
- "Загрузить распакованое разрешение" и выбрать папку chromium plugin
4) Добавить в автозагрузку OBS старт файл Start_flask.py  
- Сервис - скрипты - Добавить Скрипты (+) - выбрать файл Start_flask.py
5) в томже меню выбрать пункт "Найстройки Python" и вписать путь к папке с Python обычно это 
- C:/Users/ИМЯ ТВОЕГО ПК/AppData/Local/Programs/Python/Python312
6) В источники добавить источник "Браузер" и выбрать файл index.html
- Ширина 1000 Высота 170 вполне оптимальна для обычного скина, останется только с alt подрезать

По итогу вы вывели информацию про музыку которая сейчас играет у вас в браузере где есть плагин 

# Как поменять скин или создать свой
Стили меняются в плагине браузера, и загружаются с папки которая находится в OBS_Widget\skins

Чтобы сделать свой стиль достаточно создать папку в которой будет папка Ico для иконок сервисов, и файл style.css в котором будет прописан сам стиль для отображения в index.html

----- полный гайд будет позже -----------
# Поддержка
Обратная связь по вопросам
-  ([Discord](https://discord.gg/nWxudGd))


# История версий
### V1.4
- Добавлена система скинов, можно теперь их создавать и загружать 
### V1.3
- Теперь все зависимости Python скачиваются вместе с запуском OBS
- Исправлена Yandex Music
### V1.2
- Для плагина появился интерфейс
### V1.1
- Севрер не нужно запускать вручную, достаточно запустить OBS
- Были добавлены сервисы, SoudCloud и Spotify Web
### V1.0
- Сделал плагин для браузеров на базе Хромиум для парсинга информации
- Добавил поддержку YouTube Music
### V0.1
- Работает парсер только на PLAZA
- Сделал виджет для OBS
