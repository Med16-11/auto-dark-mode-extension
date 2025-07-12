document.addEventListener('DOMContentLoaded', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const url = new URL(tab.url);
    const host = url.hostname;
  
    const toggle = document.getElementById('toggle');
  
    const { darkEnabledSites = [] } = await chrome.storage.sync.get("darkEnabledSites");
    toggle.checked = darkEnabledSites.includes(host);
  
    toggle.addEventListener('change', async () => {
      let updated = [...darkEnabledSites];
      if (toggle.checked) {
        if (!updated.includes(host)) updated.push(host);
      } else {
        updated = updated.filter(site => site !== host);
      }
      await chrome.storage.sync.set({ darkEnabledSites: updated });
      chrome.tabs.reload(tab.id);
    });
  });
  