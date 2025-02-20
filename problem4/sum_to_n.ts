// Implementation 1: Use formula
// Time Complexity: O(1)
// Space Complexity: O(1)
function sumToN1(n: number): number {
  if (n <= 0) return 0;
  return (n * (n + 1)) / 2;
}

// Implementation 2: Use loop
// Time Complexity: O(n)
// Space Complexity: O(1)
function sumToN2(n: number): number {
  if (n <= 0) return 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
      sum += i;
  }
  return sum;
}

// Implementation 3: Use recursive
// Time Complexity: O(n)
// Space Complexity: O(n)
function sumToN3(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  
  return n + sumToN3(n - 1);
}

console.log(sumToN1(100));
console.log(sumToN2(100));
console.log(sumToN3(100));
