const streetInputSelector = "input#street";
const streetNumberInputSelector = "input#house_num";

const streetAutocompleteSelector = "#streetautocomplete-list";
const streetNumberAutocopleteSelector = "#house_numautocomplete-list";

async function bootstrap() {
  const street = (await chrome.storage.local.get(["street"]))?.street;
  const streetNumber = (await chrome.storage.local.get(["streetNumber"]))
    .streetNumber;

  if (!street || !streetNumber) {
    return;
  }

  const streetInput = document.querySelectorAll(streetInputSelector)[0];
  streetInput.value = street;
  streetInput.click();
  const streetAutocomplete = document.querySelectorAll(
    streetAutocompleteSelector,
  )[0].children[0];
  streetAutocomplete.click();

  await wait();

  const streetNumberInput = document.querySelectorAll(
    streetNumberInputSelector,
  )[0];
  streetNumberInput.value = streetNumber;
  streetNumberInput.click();
  const streetNumberAutocomplete = document.querySelectorAll(
    streetNumberAutocopleteSelector,
  )[0].children[0];
  streetNumberAutocomplete.click();

  await wait(1000);
  alert("АРТЬОМ ЛАШАРА");
}

bootstrap();

async function wait(ms = 500) {
  return await new Promise((resolve) => setTimeout(resolve, ms));
}
