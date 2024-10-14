chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && (tab.url.includes('music.youtube.com') || tab.url.includes('plaza.one') || tab.url.includes('soundcloud.com') || tab.url.includes('music.yandex.ru') || tab.url.includes('vk.com') || tab.url.includes('spotify.com'))) {
        chrome.scripting.executeScript({
            target: {tabId: tabId},
            files: ['content.js']
        });
    }
});
