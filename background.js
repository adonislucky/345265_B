let clickCount = 0;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "click") {
    clickCount = message.count;
    if (clickCount % 10 === 0) {
      playMP3();
    }
  }
});

function playMP3() {
  const audio = new Audio(chrome.runtime.getURL("your-audio-file.mp3"));
  audio.play();
}
