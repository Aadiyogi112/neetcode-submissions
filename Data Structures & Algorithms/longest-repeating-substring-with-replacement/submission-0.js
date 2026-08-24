class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freq=new Map()
        let left=0
        let maxFreq=0
        let longest=0
        for(let right=0;right<s.length;right++){
            const char=s[right]
            freq.set(char, (freq.get(char)|| 0) +1)
            maxFreq=Math.max(maxFreq, freq.get(char))
            while(right-left+1-maxFreq>k){
                const leftChar=s[left]
                freq.set(leftChar, freq.get(leftChar)-1)
                left++
            }
            longest=Math.max(longest, right-left+1)
        }
        return longest
    }
}
