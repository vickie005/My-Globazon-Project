// Automated test (using code to test code)

import { formatCurrency } from '../scripts/utils/money.js';

console.log('test suite: formatCurrency');

// Test case 1
// Basic test case
console.log('converts cents to dollars');

if (formatCurrency(2095) === '20.95') {
  console.log('passed');
} else {
  console.log('failed');
}

// Test case 2
// Edge case - value is neither positive nor negative
console.log('works with 0');

if (formatCurrency(0) === '0.00') {
  console.log('passed');
} else {
  console.log('failed');
}

// Test case 3
// Edge case - requires some rounding off
console.log('rounds up to the nearest cent');

if (formatCurrency(2000.5) === '20.01') {
  console.log('passed');
} else {
  console.log('failed');
}

// Test case 4
// Edeg case - requires rounding down
console.log('rounds down to the nearest cent');

if (formatCurrency(2000.4) === '20.00') {
  console.log('passed');
} else {
  console.log('failed');
}