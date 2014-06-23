chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({url: "visualization/graph-viewer.html"});
});

function openTab(url) {
  chrome.tabs.create({url: url});
}

window.onload = function() {
  document.getElementById("icon").onclick = function() {
    openTab('https://www.google.com/')
  };
}