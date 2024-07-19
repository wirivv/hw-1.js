const elem = document.querySelector('ul');
const h2Element = elem.querySelectorAll('h2')
    const count = h2Element.length

    console.log(`Number of categories: ${count}`)


const animals = document.getElementById('Animals');
const liAnimals = animals.querySelectorAll('li')
const lengthAnimals = liAnimals.length
console.log("Category: Animals")
console.log(`Elements: ${lengthAnimals}`);

const products = document.getElementById('Products');
const liProducts = products.querySelectorAll('li');
const lengthProducts = liProducts.length;
console.log("Category: Products");
console.log(`Elements: ${lengthProducts}`)

const technologies = document.getElementById('Technologies');
const liTechnologies = technologies.querySelectorAll('li');
const lengthTechnologies = liTechnologies.length;
console.log("Category: Technologies")
console.log(`Elements: ${lengthTechnologies}`)
