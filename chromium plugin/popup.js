document.addEventListener('DOMContentLoaded', function () {
    const artistEl = document.getElementById('artist');
    const trackEl = document.getElementById('track');
    const sourceEl = document.getElementById('source');
    const refreshBtn = document.getElementById('refresh');
    const styleSelect = document.getElementById('style-select'); // Доступ к выпадающему списку

    // Функция для обновления информации о треке
    function updateTrackInfo() {
        fetch('http://localhost:5000/track')
            .then(response => response.json())
            .then(data => {
                artistEl.innerText = data.artist || 'Unknown';
                trackEl.innerText = data.track || 'Unknown';
                sourceEl.innerText = data.source || 'Unknown';
                styleSelect.value = data.style || 'default';  // Отображаем текущий стиль
            })
            .catch(error => {
                console.error('Error fetching track info:', error);
            });
    }

    // Функция для получения списка доступных стилей
    function loadStyles() {
        fetch('http://localhost:5000/skins')
            .then(response => response.json())
            .then(styles => {
                styles.forEach(style => {
                    const option = document.createElement('option');
                    option.value = style;
                    option.textContent = style;
                    styleSelect.appendChild(option);
                });
            })
            .catch(error => {
                console.error('Error fetching styles:', error);
            });
    }

    // Первичная загрузка информации о треке и стилей
    updateTrackInfo();
    loadStyles();

    // Обновление информации при нажатии на кнопку "Refresh"
    refreshBtn.addEventListener('click', updateTrackInfo);

    // Обработчик изменения стиля
    styleSelect.addEventListener('change', () => {
        const selectedStyle = styleSelect.value; // Получаем выбранный стиль
        console.log(`Selected style: ${selectedStyle}`);

        // Отправляем выбранный стиль на сервер
        fetch('http://localhost:5000/track', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ style: selectedStyle })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Style updated:', data);
        })
        .catch(error => {
            console.error('Error updating style:', error);
        });
    });
});
