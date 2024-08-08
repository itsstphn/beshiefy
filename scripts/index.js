const beshiefyButton = document.querySelector("#start");
const clearButton = document.querySelector("#clear");
const j3j3fyButton = document.querySelector("#j3j3fy");

// j3j3fy script
const LETTER_MAP = {
  a: [ '@', 'A', 'a', '4', 'Aa'],
  b: ['B', 'V', 'Bb', 'b', 'v', 'bH', 'BvH'],
  c: ['c', 'C', 'cK', 'Ck'],
  d: ['d', 'D', , 'dH', 'Dh'],
  e: ['3', 'E',  'e'],
  f: ['F', 'f', 'fH'],
  g: ['g', 'G', '6', '9'],
  h: ['h', 'H', 'j', 'J', '|-|'],
  i: ['i', 'I', '!', '1'],
  j: ['j', 'J', 'Jh', 'jH', 'Jj'],
  k: ['k', 'K', 'kH', 'Kh'],
  l: ['l', 'L', 'lH', 'Lh'],
  m: ['m', 'M', ],
  n: ['n', 'N', ],
  o: ['0', 'o',  'O', '()'],
  p: ['p', 'P', 'Pp', 'pH', 'Ph'],
  q: ['q', 'Q', 'Qq', 'qH', 'Qh'],
  r: ['r', 'R', 'rR', 'rH', 'Rh'],
  s: ['S', 'Z', 'zZ', '$', 's', 'sS', '5'],
  t: ['T', 't',   'tT', 'tH'],
  u: ['u', 'U',  'uH', 'Uh', '|_|'],
  v: ['v', 'V',  'vH', 'Vh', '\\/'],
  w: ['w', 'W',  'wH', 'Wh'],
  x: ['x', 'X',  'xH', 'Xh'],
  y: ['y', 'Y',  'yH', 'Yh'],
  z: ['z', 'Z', 'zH', 'Zh', 'zzZ'],
}

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

function j3j3fyText(text) {
  const words = text.split(" ");
  const j3j3fiedText = words.map((word) => {
    const j3j3fiedWord = word.split("").map((char) => {
      const j3j3fiedChar = LETTER_MAP[char.toLowerCase()] || [char];
      return j3j3fiedChar[Math.floor(Math.random() * j3j3fiedChar.length)];
    }).join("");
    return j3j3fiedWord;
  }).join(" ");
  return j3j3fiedText;
}

j3j3fyButton.addEventListener("click", () => {
  const text = document.querySelector("#input").value;
  console.log(text);
  const output = j3j3fyText(text);
  const outputField = document.querySelector("#output");
  outputField.textContent = output;
  document.querySelector("#copyText").textContent = "Copy to Clipboard";
}
);

//copy to clipboard old method for compatibility
function copyToClipboard(copyText) {
  const textarea = document.createElement("textarea");
  textarea.value = copyText;
  textarea.style.position = "fixed";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    const successful = document.execCommand("copy");
    const message = successful ? "Copied to clipboard!" : "Copy failed";
    console.log(message);
  } catch (err) {
    console.error("Copy to clipboard failed:", err);
  }
  document.body.removeChild(textarea);
}

// new method
function copyText() {
  const copyText = document.querySelector("#output").textContent;

  console.log(copyText);

  navigator.clipboard.writeText(copyText);
  copyToClipboard(copyText);

  document.querySelector("#copyText").textContent = "Copied!";
}


