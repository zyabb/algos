const myAtoi = (str) => {
    str = str.trimLeft();
   
   if (!/[\d+-]/.test(str[0])) return 0;
   
   const number = Number(str.match(/[+-]?\d*/));

   if (Number.isNaN(number)) return 0;
       
 const MAX_INT = 2 ** 31 - 1;
 const MIN_INT = - (2 ** 31);
 if (number < MIN_INT) return MIN_INT;
 if (number > MAX_INT) return MAX_INT;
   return number;
};

module.exports = myAtoi;