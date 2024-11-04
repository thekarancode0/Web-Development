const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationBox = document.getElementById("animation-container");

const calcInput = document.querySelector(".calc-input");
const calcResult = document.querySelector(".calc-result");

//function to change
// const decimalToBinary = (input) => {

//   if (input === 0 || input === 1) {
//     return String(input);
//   } else {
//     return decimalToBinary(Math.floor(input / 2)) + (input % 2);
//   }
// };

//checking the input must be a positive number
const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }
  showCalculation(inputInt);
  numberInput.value = "";
};

//click or enter function
convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});

function showCalculation(input) {
  let delay = 0;
  calcResult.textContent = "";
  calcInput.textContent = input;

  setTimeout(() => {
    while (input > 0) {
      const remainder = input % 2;
      const quotient = Math.floor(input / 2);

      calcInput.classList.add("show-line");

      // Remove the line after a short delay
      setTimeout(() => {
        calcInput.classList.remove("show-line");
      }, delay + 1500);

      setTimeout(() => {
        calcInput.textContent = quotient;
        calcResult.textContent += remainder;
      }, delay);

      delay += 2500;
      input = quotient;
    }

    setTimeout(() => {
      result.textContent = calcResult.textContent.split("").reverse().join(""); // Copy the final binary result to the result element
    }, delay);
  }, 2000);
}
