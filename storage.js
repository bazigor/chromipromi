if (!chrome || !chrome.storage) {
    // TODO: Debug/production mode. No need to spam console with expected messages.
    console.log('Either chrome or chrome.storage is not available, make sure you have related permissions.');
} else {
    /**
    * 'this' is expected to be a chrome storage section (global or local)
    */
    function storageGet(keys) {
        var store = this;
        return new Promise(function(resolve, reject){
            store.get(keys, function(content) {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError.message || chrome.runtime.lastError)
                } else {
                    resolve(content);
                }
            })
        })
    };


    /**
    * 'this' is expected to be a chrome storage section (global or local)
    */
    function storageSet(content) {
        var store = this;
        return new Promise(function(resolve, reject){
            store.set(content, function() {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError.message || chrome.runtime.lastError)
                } else {
                    resolve(content);
                }
            })
        })
    }

    exports.local = {
        set: storageSet.bind(chrome.storage.local),
        get: storageGet.bind(chrome.storage.local)
    }
}
