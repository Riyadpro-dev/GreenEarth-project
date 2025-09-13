#### 1) What is the difference between var, let, and const?
     Answer: var: old one, we can use it many times.
let: new one, only works inside block, can’t use again.
const: fixed value, cannot change later.

#### 2) What is the difference between map(), forEach(), and filter()?
Answer:  map() : makes a new array.
forEach() : only loops, no return.
filter() : checks condition, gives new array with true items.

#### 3) What are arrow functions in ES6?
Answer: Arrow functions are funtion without the function keyword
// Normal
function add(a, b) {
  return a + b;
}
// Arrow
const add = (a, b) => a + b;

#### 4) How does destructuring assignment work in ES6?
Answer: we can use object or array keys as variable 
and this is called destructuring .

#### 5) Explain template literals in ES6. How are they different from string concatenation?
Answer:Use backtick (`) instead of quotes.
We can put variables inside with ${ }.

Before it was "Hello " + name. Now it is easier.
