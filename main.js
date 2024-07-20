document.addEventListener("DOMContentLoaded", async () => {
  const streetInput = document.querySelectorAll("#street")[0];
  const streetNumberInput = document.querySelectorAll("#street-number")[0];

  streetInput.value = await getValueFromLocalStorage("street");
  streetNumberInput.value = await getValueFromLocalStorage("streetNumber");

  streetInput.addEventListener("change", (e) => {
    chrome.storage.local.set({
      street: e.target.value,
    });
  });

  streetNumberInput.addEventListener("change", (e) => {
    chrome.storage.local.set({
      streetNumber: e.target.value,
    });
  });
});

async function getValueFromLocalStorage(key) {
  return (await chrome.storage.local.get([key]))?.[key] ?? "";
}
