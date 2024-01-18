const listOfCategorias = document.querySelectorAll(".item");
console.log(`number of categorias : ${listOfCategorias.length}`);

listOfCategorias.forEach((item) => {
    console.log(`Categorias : ${item.firstElementChild.textContent}`);
    console.log(`Elements : ${item.lastElementChild.children.length}`);
})