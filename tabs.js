exports.get = function tabsGet(tabId) {
    return new Promise(function(resolve, reject){
        chrome.tabs.get(tabId, resolve);
    });
};

exports.create = function tabsCreate(params) {
    return new Promise(function(resolve, reject){
        chrome.tabs.create(params, resolve);
    });
};

exports.onUpdated = {
    firstMatching: function tabsFirstUpdate(tabId, condition) {
        return new Promise(function(resolve, reject){
            var listener = function(changedId, change, tab) {
                if (changedId == tabId && condition(change)) {
                    chrome.tabs.onUpdated.removeListener(listener);
                    resolve(change);
                }
            }
            chrome.tabs.onUpdated.addListener(listener);
        });
    }
};
