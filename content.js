console.log("Web scraper loaded!");

function scrapePage() {
  // Example: Scrape all headings from the page
  const headings = Array.from(document.querySelectorAll("h1, h2, h3")).map(
    heading => heading.innerText
  );
  console.log("Scraped Data:", headings);

  // Send data to the popup
  chrome.runtime.sendMessage({ type: "SCRAPED_DATA", data: headings });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "START_SCRAPING") {
    scrapePage();
  }
});
