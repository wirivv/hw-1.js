const changeText = document.getElementById('font-size-control');
const text = document.getElementById('text');


changeText.addEventListener('input', function() {
    text.style.fontSize = changeText.value + 'px';
} );