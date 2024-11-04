
function multiplyByTwo(arr) {
    return arr.map(num => num * 2);
}
const numbers = [1, 2, 3, 4, 5];
const newnumbers = multiplyByTwo(numbers);
console.log(newnumbers); 


const strings = ['thar', 'benz', 'audi','breeza'];

const upperCaseStrings = strings.map(str => str.toUpperCase());

console.log(upperCaseStrings)





const students = [
    { name: 'Devika', score: 95 },
    { name: 'Shruthi', score: 82 },
    { name: 'Baby', score: 88 },
  ];
  
  const studentNames = students.map(student => student.name);
  
  console.log(studentNames);


  let arr=[1,2,3,4,5];
  res= arr.filter(callback);
  function callback(ele){
      return ele%2==0;
  }


  function filterShortStrings(arr) {
    return arr.filter(str => str.length >= 5);
}


let stringsArray = ["apple", "cat", "banana", "dog", "elephant", "fox"];
let result = filterShortStrings(stringsArray);

console.log(result); 


function filterNumbersGreaterThan50(arr) {
    return arr.filter(num => num > 50);
}


let numbersArray = [12, 75, 40, 85, 33, 51, 22, 90];
let resulting = filterNumbersGreaterThan50(numbersArray);

console.log(resulting); // Output: [75, 85, 51, 90]





function printstrings(array) {
    array.forEach((item) => {
      console.log(item);
    });
  }
  
  let phonenames = ["iphone", "vivo", "realme", "poco"];
 printstrings(phonenames);



let values = [1, 2, 3, 4, 5]; 
let sum = 0;

numbers.forEach((num) => {
    sum += num;
});

console.log("Sum:", sum);




let products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "buds", price: 500 }
  ];
  
  products.forEach((product) => {
    console.log(`${product.name}: $${product.price}`);
  });



const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers
  .filter((num) => num % 2 === 0) // Keep only even numbers
  .map((num) => num * 3) // Multiply each even number by 3
  .forEach((num) => console.log(num)); // Print each resulting value
