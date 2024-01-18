let counterValue = 0;
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const counterValueElement = document.getElementById("counter");

incrementButton.addEventListener("click", () => {
  counterValue++;
  counterValueElement.innerHTML = `Counter Value : ${counterValue}`;
});

decrementButton.addEventListener("click", () => {
  counterValue--;
  counterValueElement.innerHTML = `Counter Value : ${counterValue}`;
});
