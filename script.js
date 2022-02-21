/*
========================
                         Module 22 
			                       =====================  /*




/*
//  challenge 2  remove duplicates
const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'] ;

function removeDuplicates(names){
	const unique = []; 
	for (const element of names){
		// console.log(element);
		if (unique.indexOf(element) == -1){
			unique.push(element);
		}
	}
	return unique;

}
const uniqueNames = removeDuplicates(names);
console.log(uniqueNames);
*/


/*
// challenge 3  reverse string
const greeting = 'Hello, how are you?';

function reverseString(text){
	let reverse = ' ';
	for (const letter of text){
		// console.log(letter);
		reverse = letter + reverse;  // it's reversing the string
		// reverse = reverse + letter;  // it's not-reversing the string
	}
	console.log(reverse);

}
const reversed = reverseString(greeting);
console.log(reversed);
*/


/*
// challenge 4  addition and multiplication between two parameters two numbers ( Handle unexpected function input parameter error)

function add (num1, num2){
	return num1 + num2;
}
const totalOfAdd = add(32, 8);
console.log(totalOfAdd);

function multiply(num1,  num2){
	return num1 * num2;
}
const totalOfMultiply = multiply(104 * 87);  // mistake is *...correct is comma, bcz comma is been used between two parameters
console.log(totalOfMultiply);

*/

/*
// challenge 5   add and multiplication to calculate wood requirements
*/

/*
//  challenge 6  Write foo, bar, foobar if divisible by 3 or 5 or both
// write foo if number is divided by 3, write bar if number is divided by 5, write foobar if number is divided by 3 & 5 also

for (let i =1; i<=50; i++){
	if ( i % 5 == 0 && i % 3 == 0){
		console.log('foobar');  // it's mean we write foo but still have the value
	}
	else if ( i % 3 == 0){
		console.log('foo');
	}
	else if ( i % 5 == 0){
		console.log('bar')
	}
	else{
		console.log(i); // means we write foo instead of the value
	}
	// console.log(i);  // remove it. or it's shown the error output
}

*/

/*
// challenge  6  Find the cheapest phone from an array of phone objects
const phones = [
	{name: 'Vivo 99c', price: 22000, camera: 22, storage: 32},
	{name: 'Realme m3', price: 42000, camera: 32, storage: 64},
	{name: 'Samsung z12', price: 31000, camera: 18, storage: 16},
	{name: 'Nokia n95', price: 8000, camera: 4, storage: 4},
	{name: 'Oppo a10', price: 14999, camera: 16, storage: 16},
	{name: 'Walton m32', price: 16000, camera: 16, storage: 16},
];

let cheapest = phones[0];
for ( const phone of phones){
    // console.log(phone);
	// compare price only.. not the whole array object
	if (phone.price < cheapest.price){
		cheapest = phone;
	}
};
console.log(cheapest);
*/


/*
// challenge  7   Calculate the total cost of the products in a shopping cart

// const products = [
// 	{name: 'laptop', price: 4300},
// 	{name: 't-shirt', price: 400},
// 	{name: 'watch', price: 3680},
// 	{name: 'phone', price: 22000},
// ]

// let totalPrice = 0;
// for (const product of products){
// 	totalPrice = totalPrice + product.price;
// }
// console.log(totalPrice);

// again shopping cart
// const cart = [
// 	{name: 'laptop', price: 4300, quantity: 1},
// 	{name: 't-shirt', price: 400, quantity: 8},
// 	{name: 'watch', price: 3680, quantity: 3},
// 	{name: 'phone', price: 22000, quantity: 2},
// ]

// let cartTotal = 0;
// for ( const product of cart){
// 	const productTotal = product.price * product.quantity;
// 	cartTotal = cartTotal + productTotal;
//     console.log(productTotal);
// }

*/


// challenge 8   Traveling in a Jungle and counting wild animals

// function animalCount(miles){
// 	const first10PerMile = 10;
// 	if(miles <= 10){
// 		const count = miles * 10;
// 		return count;
// 	}
// }
// const animals = animalCount(5);
// console.log(count);


/*
// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 
const numbers = [100, 3, 56, 78, 98, 22, 11, 78, 87, 81, 89, 80, 84, 74, 61, 56, 23];
function findingAboveNumbersOf80(integer){
	for (const number of integer){
		if(number >= 80){
			console.log("Above the 80 number is " + number);
		} 
		else {
			console.log('Below the 80 number is ' + number);
		}
	}
}
var value = findingAboveNumbersOf80(numbers);

*/


/*
// ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 

var num1 = 29;
var num2 = 12;

function comparison(n1, n2){
	if (n1 > n2 && n1 != n2){
		console.log("Number 1 is bigger and is not equal  than number 2. and it is " + n1);
	}
	else if (n1 == n2) {
		console.log("Both number is equal " + n1 , " and " + n2);
	}
	
	else if ( n1 < n2 && n1 != n2){
		console.log("Number 2 is bigger than number 1 " + n2);
	}
	else if (n1 != n2){
		console.log("both number is not equal " + n1,  " and " + n2 )
	}
	else{
		console.log("happy ending of the code")
	}
}
var value = comparison(num1, num2);
*/

/*
// ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 

// let i = 7;
// while ( i < 19){
// 	console.log("the odd number is");
// 	i++;
// 	var n = 0;
// 	n = n+1;
// }

let storeAdd = [0];
function findOddNum (arr) {
	for ( let i =7; i <= 19; i++){
		console.log(i);
		if ( i == i + 1){
			console.log(i);
		}
	}
}
findOddNum(storeAdd);


*/

/*
// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 

const products = [
	{name: 'laptop', price: 22000, model: w120sd},
	{name: 'mobile', price: 22000, model: w120sd},
	{name: 'camera', price: 22000, model: w120sd},
	{name: 'Desktop', price: 22000, model: w120sd},
]


*/
/*
//  100. challenge 
Calculate Electricity Bills
for first 100 unit - 5 tk per unit
for more than 100 unit 6 tk every unit more than 100 unit 
*/