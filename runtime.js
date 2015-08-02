exports.sendMessage = function(request) {
    return new Promise(function(resolve, reject){
        chrome.runtime.sendMessage(request, resolve);
    });
};

exports.onMessage = {
    addListener: function (receiver) {
        chrome.runtime.onMessage.addListener(receiver);
    }
};

exports.onMessageExternal = {
    addListener: function (receiver) {
        chrome.runtime.onMessageExternal.addListener(receiver);
    }
};
