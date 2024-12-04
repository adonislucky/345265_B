let clickCount = 0;

document.addEventListener("click", () => {
  clickCount++;
  chrome.runtime.sendMessage({ type: "click", count: clickCount });
});
