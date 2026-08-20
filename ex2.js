//q9
const highest_digit_in_number = (num) => {
  let max = num % 10;
  while (num > 0) {
    num = (num - (num % 10)) / 10;
    if (num % 10 > max) max = num % 10;
  }

  return max;
};
console.log(highest_digit_in_number(1238845));

//q14
const sum_digit_of_number = (num) => {
  let sum = num % 10;
  while (num > 0) {
    num = (num - (num % 10)) / 10;
    sum += num % 10;
  }

  return sum;
};
console.log(sum_digit_of_number(12345));

//q20
const sum_number = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};
console.log(sum_number([10, 20, 30, 40, 50]));

//q21
const count_of_number = (num) => {
  let count = 0;
  while (num > 0) {
    num = (num - (num % 10)) / 10;
    count++;
  }

  return count;
};

console.log(count_of_number(12345));

//q23
const mean_digit_of_number = (num) => {
  let sum = num % 10;
  let count = 0;
  while (num > 0) {
    num = (num - (num % 10)) / 10;
    sum += num % 10;
    count++;
  }

  return sum / count;
};
console.log(mean_digit_of_number(12345));


//q24
const largest_swap=(num)=>{
   let a =num%10;
   let b= (num - (num % 10)) / 10
   if (b>a) return true; return false;
};
 console.log(largest_swap(27));