function foo(a, b) {
  if (a === null && b === null) {
    return 0; // Handle the case where both inputs are null
  } else if (a === null || b === null) {
    return null; // Handle the case where only one input is null
  }
  return a + b;
}

console.log(foo(null, null)); // Output: 0
console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null