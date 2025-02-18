function foo(a, b) {
  if (a === null || b === null) {
    return null; //This is where the bug is. If a and b are both null, this line won't execute correctly
  }
  return a + b;
}

console.log(foo(null, null)); // Output: null
console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null