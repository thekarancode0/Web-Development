let coin = document.querySelector(".coin");
let result = document.querySelector(".winner");

coin.addEventListener("click", () => {
  result.innerHTML = "";

  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";

  if (i) {
    setTimeout(function () {
      coin.style.animation = "head-spin 3s forwards";
    }, 100);
  } else {
    setTimeout(function () {
      coin.style.animation = "tail-spin 3s forwards";
    }, 100);
  }

  setTimeout(function () {
    if (i) {
      result.innerHTML = "Head";
    } else {
      result.innerHTML = "Tail";
    }
  }, 3000);
});
