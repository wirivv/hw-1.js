const input = document.querySelector("input");

input.addEventListener("blur", () => {
  const expectedLength = input.getAttribute("data-length");
  const actualLength = input.value.length;

  if (actualLength === parseInt(expectedLength)) {
    input.style.border = "2px solid green";
  } else {
    input.style.border = "2px solid red";
  }
});
