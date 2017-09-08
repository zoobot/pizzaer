chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'document.body.style.background = "#f3f3f3 url(http://i.giftrunk.com/p3jtxx.gif) repeat right top"'
  });
});