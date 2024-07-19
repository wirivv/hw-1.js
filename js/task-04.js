const counter = document.getElementById('counter');
const value = document.getElementById('value');

counter.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const action = event.target.dataset.action;
    if (action === 'decrement') {
      value.textContent = parseInt(value.textContent) - 1;
    } else if (action === 'increment') {
      value.textContent = parseInt(value.textContent) + 1;
    }
  }
});