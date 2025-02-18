# JavaScript Null Input Handling Bug

This repository demonstrates a common bug in JavaScript functions related to handling null or undefined inputs. The `foo` function attempts to add two numbers, but it does not correctly manage the scenario where both inputs are null. 

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version.

## Bug
The original function incorrectly returns null even if both inputs are null. This leads to unexpected behavior, and may be difficult to identify and fix in more complex code.

## Solution
The improved function explicitly checks for both inputs being null, and handles this scenario appropriately by returning 0. This ensures predictable behavior and improves code robustness.