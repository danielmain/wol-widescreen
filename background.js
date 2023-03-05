chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: ['./styles.css']
        })
            .then(() => {
                console.log("INJECTED THE FOREGROUND STYLES.");
            })
            .catch(err => console.log(err));
    }
});
