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


