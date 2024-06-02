const encryptBtn = document.getElementById("encrypt-btn");
const clearBtn = document.getElementById("clear-btn");
const copyBtn = document.getElementById("copy-btn");
const inputEl = document.getElementById("input-el");
const outputEl = document.getElementById("output-el");
const errorMsg = document.getElementById("error-msg");
const tooltip = document.getElementById("myTooltip");

function getOutput() {
  const input = inputEl.value;
  restorCopyBtn();

  if (input) {
    errorMsg.innerText = "";
    outputEl.style.display = "block";
    outputEl.innerText = encode(input);
    copyBtn.style.display = "block";
  } else {
    errorMsg.innerText = "Please fill out the input field!";
  }
}

function encode(input) {
  const str = input.split("");

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      str.splice(i, 1, "g");
    } else if (str[i] === "A") {
      str.splice(i, 1, "G");
    } else if (str[i] === "e") {
      str.splice(i, 1, "d");
    } else if (str[i] === "E") {
      str.splice(i, 1, "D");
    } else if (str[i] === "y") {
      str.splice(i, 1, "r");
    } else if (str[i] === "Y") {
      str.splice(i, 1, "R");
    } else if (str[i] === "o") {
      str.splice(i, 1, "p");
    } else if (str[i] === "O") {
      str.splice(i, 1, "P");
    } else if (str[i] === "u") {
      str.splice(i, 1, "l");
    } else if (str[i] === "U") {
      str.splice(i, 1, "L");
    } else if (str[i] === "i") {
      str.splice(i, 1, "k");
    } else if (str[i] === "I") {
      str.splice(i, 1, "K");
    } else if (str[i] === "g") {
      str.splice(i, 1, "a");
    } else if (str[i] === "G") {
      str.splice(i, 1, "A");
    } else if (str[i] === "d") {
      str.splice(i, 1, "e");
    } else if (str[i] === "D") {
      str.splice(i, 1, "E");
    } else if (str[i] === "r") {
      str.splice(i, 1, "y");
    } else if (str[i] === "R") {
      str.splice(i, 1, "Y");
    } else if (str[i] === "p") {
      str.splice(i, 1, "o");
    } else if (str[i] === "P") {
      str.splice(i, 1, "O");
    } else if (str[i] === "l") {
      str.splice(i, 1, "u");
    } else if (str[i] === "L") {
      str.splice(i, 1, "U");
    } else if (str[i] === "k") {
      str.splice(i, 1, "i");
    } else if (str[i] === "K") {
      str.splice(i, 1, "I");
    }
  }

  return str.join("");
}

function clearAll() {
  inputEl.value = "";
  errorMsg.innerText = "";
  outputEl.innerText = "";
  outputEl.style.display = "none";
  copyBtn.style.display = "none";
  restorCopyBtn();
}

function copyText() {
  navigator.clipboard.writeText(outputEl.innerText);

  copyBtn.innerText = "Copied!";
  copyBtn.setAttribute("disabled", "disabled");
  copyBtn.style.border = "2px solid gray";
  copyBtn.style.color = "gray";
}

function restorCopyBtn() {
  copyBtn.innerText = "Copy";
  copyBtn.removeAttribute("disabled");
  copyBtn.style.border = "2px solid";
  copyBtn.style.color = "white";
}

encryptBtn.addEventListener("click", getOutput);
clearBtn.addEventListener("click", clearAll);
copyBtn.addEventListener("click", copyText);
