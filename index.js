const beshiefyButton = document.querySelector("#start");
const clearButton = document.querySelector("#clear");

function beshiefyText(text) {
  const words = text.split(" ");
  const beshiefiedText = words.map((word) => word + " 🤸").join(" ");
  return beshiefiedText;
}

clearButton.addEventListener("click", () => {
  document.querySelector("#input").value = "";
  document.querySelector("#output").textContent = "";
  document.querySelector("#copyText").textContent = "Copy to Clipboard";
});

beshiefyButton.addEventListener("click", () => {
  const text = document.querySelector("#input").value;
  console.log(text);
  const output = beshiefyText(text);
  const outputField = document.querySelector("#output");
  outputField.textContent = output;
  document.querySelector("#copyText").textContent = "Copy to Clipboard";
});

function copyText() {
  const copyText = document.querySelector("#output").textContent;

  console.log(copyText);

  navigator.clipboard.writeText(copyText);

  document.querySelector("#copyText").textContent = "Copied!";
}
