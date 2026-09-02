class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        const result = [];

        for (let i = 0; i < nums.length - 2; i++) {
            // All remaining numbers are positive
            if (nums[i] > 0) break;

            // Skip duplicate fixed values
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum < 0) {
                    left++; // Need a larger sum
                } else if (sum > 0) {
                    right--; // Need a smaller sum
                } else {
                    result.push([nums[i], nums[left], nums[right]]);

                    // Search for a new pair
                    left++;
                    right--;

                    // Skip duplicate pair values
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }

                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                }
            }
        }

        return result;
    }
}
