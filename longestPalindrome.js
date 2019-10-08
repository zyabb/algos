const longestPalindrome = (s) => {
    let longest = '';
   for (let i = 0; i < s.length ; i++) {
       for (let j = i; j < s.length; j++) {
           let temp = s.slice(i, j + 1)
           if (longest.length < temp.length && check(temp)) {
               longest = temp;
           };       
       };
   };
    return longest;
};

const check = (s) => {
    let startIdx = 0;
    let endIdx = s.length - 1;
    while (startIdx <= endIdx) {
        if (s[startIdx] !== s[endIdx]) return false;
        startIdx++;
        endIdx--;
    };
    return true;
};

module.exports = longestPalindrome;