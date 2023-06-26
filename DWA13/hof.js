const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// 1. Use forEach to console log each name to the console. You are allowed to call console.log seven times.
names.forEach(name => console.log(name));

// 2. Use forEach to console log each name with a matching province (for example Ashwin (Western Cape). Note that you are only allowed to call console.log seven times.
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// 3. Using map, loop over all province names and turn the string to all uppercase. Log the new array to the console.
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// 4. Create a new array with map that has the amount of characters in each name. The result should be: [6, 9, 11, 5, 8, 7]
const characterCounts = names.map(name => name.length);
console.log(characterCounts);

// 5. Using toSorted to sort all provinces alphabetically.
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// 6. Use filter to remove all provinces that have the word "Cape" in them. After filtering the array, return the amount of provinces left. The final value should be 3.
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
const filteredProvincesCount = filteredProvinces.length;
console.log(filteredProvincesCount);

// 7. Create a boolean array by using map and some to determine whether a name contains an "S" character. The result should be [true, true, false, true, false, true, false].
const containsS = names.map(name => name.toLowerCase().includes('s'));
console.log(containsS);

// 8. Using only reduce, turn the above into an object that indicates the province of an individual.
const provinceOfIndividual = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log(provinceOfIndividual);

// 9. Use forEach to console log each product name to the console.
products.forEach(product => console.log(product.product));

// 10. Use filter to filter out products that have a name longer than 5 characters.
const filteredProducts = products.filter(product => product.product.length <= 5);
console.log(filteredProducts);
