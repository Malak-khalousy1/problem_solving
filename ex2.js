// const mod = (num) => {
//   return num - (num % 10) / 10;
// };

const count_of_number = (num) => {
  let count = 0;
  while (num > 0) {
    num =(num - (num % 10) )/ 10 ;
    count++;
  }

  return count;
};

console.log(count_of_number(12345));
