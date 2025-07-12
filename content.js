(async () => {
    const url = location.hostname;
  
    const { darkEnabledSites = [] } = await chrome.storage.sync.get("darkEnabledSites");
  
    if (!darkEnabledSites.includes(url)) return;
  
    const darkCSS = `
      html {
        filter: invert(1) hue-rotate(180deg) !important;
        background: #111 !important;
      }
      img, video {
        filter: invert(1) hue-rotate(180deg) !important;
      }
    `;
  
    const style = document.createElement('style');
    style.textContent = darkCSS;
    document.head.appendChild(style);
  })();
  