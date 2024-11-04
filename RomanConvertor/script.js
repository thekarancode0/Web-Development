const userNum = document.querySelector("#number");
const convertBtn = document.querySelector("#convert-btn");
const output = document.querySelector("#output");

function checkUserInput() {
  const num = parseInt(userNum.value);
  if (!num) {
    output.innerText = "Please enter a valid number";
  } else if (num < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (num > 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    romanConvert(num);
  }
}

function romanConvert(num) {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];
  let roman = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      roman += romanNumerals[i].symbol;
      num -= romanNumerals[i].value;
    }
  }
  output.innerText = roman;
}

convertBtn.addEventListener("click", () => {
  checkUserInput();
});

userNum.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        checkUserInput();
    }
});