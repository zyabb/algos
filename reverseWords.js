var reverseWords = function(s) {
    let array = s.split(' ');
    let left = 0;
    let right = array.length - 1;
    
    while(left < right) {
        const temp = array[left];
        array[left] = array[right];
        array[right] = temp;      
        left++;
        right--;
    }
    return array.join(' ').replace(/\s+/g, ' ').trim();
};

module.exports = reverseWords;