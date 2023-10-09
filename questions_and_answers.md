                                                     #MCQ TEST

1.Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);

Answer - c:undefined
greeting object empty thats why console going to undefined

2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");


Answer - the answer is C:"12" because  a value is number but b value is a string thats why 1+"2" = 12.

3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

answer - A:[ '🍕', '🍫', '🥑', '🍔' ] because console want to print food object

4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

answer - B: Hi there, undefined   
because there have no set value for name thats why undefined come from console.

5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

answer- c:3   because there object have 4 value the sum going result 4 thats why object going to find number 4 index