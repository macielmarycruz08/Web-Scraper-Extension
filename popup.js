document.getElementById("scrape-btn").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: "START_SCRAPING" });
    });
  });
  
  chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "SCRAPED_DATA") {
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `<pre>${JSON.stringify(message.data, null, 2)}</pre>`;
    }
  });
  