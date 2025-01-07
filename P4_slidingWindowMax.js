




function maxSlidingWindow(nums, k) {
    if (!nums || nums.length === 0 || k <= 0) return []; // Handle edge cases
  
    const deque = []; // Deque to store indices
    const result = []; // Result array for maximums
  
    for (let i = 0; i < nums.length; i++) {
      // Remove indices that are out of the current window
      if (deque.length > 0 && deque[0] < i - k + 1) {
        deque.shift();
      }
  
      // Remove indices of smaller elements as they are useless
      while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
        deque.pop();
      }
  
      // Add the current index to the deque
      deque.push(i);
  
      // Add the maximum for the current window to the result
      if (i >= k - 1) {
        result.push(nums[deque[0]]);
      }
    }
  
    return result;
  }

  const arr = [1, 3, -1, -3, 5, 3, 6, 7];
  const k = 3;
  
  console.log("aOrig array : ", arr);
  console.log("Window Size : ", k);
  console.log("Result : ", maxSlidingWindow(arr, k));
  