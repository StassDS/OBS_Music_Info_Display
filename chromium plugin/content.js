function getTrackInfo() {
    let artist, track, source;
    
    if (window.location.hostname.includes("youtube")) {
        artist = document.querySelector(".ytmusic-player-bar .subtitle a").innerText;
        track = document.querySelector(".ytmusic-player-bar .title").innerText;
        source = "YouTube Music";
    } else if (window.location.hostname.includes("plaza")) {
        artist = document.querySelector(".player-artist").innerText;
        track = document.querySelector(".player-title").innerText;
        source = "Nightwave Plaza";
    } else if (window.location.hostname.includes("soundcloud")) {
        artist = document.querySelector(".playbackSoundBadge__lightLink").innerText;
        track = document.querySelector(".playbackSoundBadge__title").innerText;
        // Кастыль ебучий
        track = track.replace("Current track:", "").trim();
        source = "SoundCloud";

    } else if (window.location.hostname.includes("music.yandex.ru")) {
        artist = document.querySelector(".d-track__artists a").innerText;
        track = document.querySelector(".d-track__title a").innerText;
        source = "Yandex Music";
    } else if (window.location.hostname.includes("vk.com/music")) {
        artist = document.querySelector(".ai_artist").innerText;
        track = document.querySelector(".ai_title").innerText;
        source = "VK Music";
    } else if (window.location.hostname.includes("spotify")) {
        // Используем предоставленные селекторы для трека и исполнителя
        let artistElement = document.querySelector("a[data-testid='context-item-info-artist']");
        let trackElement = document.querySelector("a[data-testid='context-item-link']");
        
        // Проверяем наличие элементов перед присвоением значений
        if (artistElement && trackElement) {
            artist = artistElement.innerText;
            track = trackElement.innerText;
            source = "Spotify";
        }
    }

    return { artist, track, source };
}

function sendTrackInfoToServer(trackInfo) {
    fetch('http://localhost:5000/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(trackInfo)
    });
}

setInterval(() => {
    const trackInfo = getTrackInfo();
    if (trackInfo) {
        sendTrackInfoToServer(trackInfo);
    }
}, 500);
