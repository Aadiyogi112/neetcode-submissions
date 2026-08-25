class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left=0
        let right=s.length-1

        while(left<right){
            while(left<right && !this.isAplhaNumeric(s[left])){
                left++
            }
             while(left<right && !this.isAplhaNumeric(s[right])){
                right--
            }

            if(s[left].toLocaleLowerCase() !== s[right].toLocaleLowerCase()){
                return false
            }
            left++
            right--
        }
        return true  
    }
    isAplhaNumeric(s){
        const code=s.charCodeAt(0)

        const isNumeric=code>=48 && code<=57
        const isUpperCase=code>=65 && code<=90
        const isLowerCase=code>=97 && code<=122
        return isLowerCase || isUpperCase || isNumeric
    }
}
