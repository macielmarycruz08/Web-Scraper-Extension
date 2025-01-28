Web Scraper Extension

Overview
This project is a browser extension designed to scrape data from web pages and display it in a simple interface. The extension allows users to extract information such as headings and view the results directly in the extension popup.

Features
- Scrapes data (e.g., headings) from the currently active tab.
- Displays the scraped data in a readable format within the extension popup.
- Lightweight and easy to use.

 Installation
1. Open your browser and navigate to the extensions page:
   - Edge: `edge://extensions/`
   - Chrome: `chrome://extensions/`
2. Enable **Developer Mode**.
3. Click **Load Unpacked**.
4. Select the project folder (`WebScraper-extension`).
5. The extension should now appear in your browser's toolbar.

 Usage
1. Navigate to a webpage you want to scrape.
2. Click the Web Scraper extension icon in the browser toolbar.
3. Click the "Start Scraping" button in the popup.
4. The extracted data will be displayed in the popup.

 Development
 Prerequisites
- A modern web browser (e.g., Edge, Chrome).
- Basic knowledge of JavaScript, HTML, and CSS.

How It Works
1. Manifest File: Configures the extension and specifies required permissions.
2. Content Script: Injects JavaScript into the current webpage to scrape data.
3. Popup Script: Handles user interactions and displays results.
