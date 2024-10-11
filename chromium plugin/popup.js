document.addEventListener('DOMContentLoaded', function () {
    const artistEl = document.getElementById('artist');
    const trackEl = document.getElementById('track');
    const sourceEl = document.getElementById('source');
    const refreshBtn = document.getElementById('refresh');

    // Функция для обновления информации о треке
    function updateTrackInfo() {
        fetch('http://localhost:5000/track')
            .then(response => response.json())
            .then(data => {
                artistEl.innerText = data.artist || 'Unknown';
                trackEl.innerText = data.track || 'Unknown';
                sourceEl.innerText = data.source || 'Unknown';
            })
            .catch(error => {
                console.error('Error fetching track info:', error);
            });
    }

    // Первичная загрузка информации о треке
    updateTrackInfo();

    // Обновление информации при нажатии на кнопку "Refresh"
    refreshBtn.addEventListener('click', updateTrackInfo);

    // Добавляем обработчики для переключателей
    const platforms = ['youtube', 'plaza', 'soundcloud', 'yandex', 'vk', 'spotify'];
    
    platforms.forEach(platform => {
        const toggle = document.getElementById(`${platform}-toggle`);
        toggle.addEventListener('change', () => {
            const enabled = toggle.checked;
            console.log(`${platform} transmission: ${enabled ? 'Enabled' : 'Disabled'}`);
            // Здесь можно добавить логику для отключения передачи информации, например, с использованием fetch для обновления состояния на сервере
        });
    });
});
