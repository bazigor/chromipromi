exports.getAll = function windowsGetAll(getInfo) {
    return new Promise(function(resolve, reject){
        chrome.windows.getAll({ populate: getInfo}, resolve);
    });
};