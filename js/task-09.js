const btn = document.querySelector('.change-color');
const body = document.querySelector('body');

const colors = ['rgb(243, 0, 0)', 'rgb(227, 243, 0)', 'rgb(0, 243, 61)', 'rgb(0, 36, 243)'];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

btn.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
});