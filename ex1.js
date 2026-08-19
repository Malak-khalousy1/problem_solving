//q1
const rounding_off = (num, n) => {
  return num.toFixed(n);
};

console.log(rounding_off(0.778899, 2));
//q2
const convert_to_radian = (degree) => {
  return degree * (3.14 / 180);
};
console.log(convert_to_radian(90));

//q3
const largest_of_two_number = (num1, num2) => {
  if (num1 > num2) return num1;
  return num2;
};
console.log(largest_of_two_number(8, 12));

//q4
const adding_two_number = (num1, num2) => {
  return num1 + num2;
};
console.log(adding_two_number(4, 5));

//q5
const convert_to_minutes = (hours) => {
  return hours * 60;
};
console.log(convert_to_minutes(2));

//q6
const is_greater_than_five = (num) => {
  if (num > 5) return "Yes";
  return "No";
};
console.log(is_greater_than_five(7));

//q7
const calculate_discount = (orginalPrice, discountPrice) => {
  return orginalPrice - discountPrice;
};
console.log(calculate_discount(500, 400));

//q8
const is_divisible_five = (num) => {
  if (num % 5 == 0) return "Yes";
  return "No";
};
console.log(is_divisible_five(25));

//q9
const is_even = (num) => {
  if (num % 2 == 0) return "Yes";
  return "No";
};
console.log(is_even(4));

//q10
const is_elligible = (age) => {
  if (age >= 18) return "Eligible";
  return "Not Eligible";
};
console.log(is_elligible(18));

//q11
 const double_number=(num)=>{
    return num*2;
 };
console.log(double_number(5));

//q12
 const convert_to_second =(num)=>{ return num*60};
 console.log(convert_to_second(5));

 //q13
 const convert_to_centimeters=(meters)=>{
    return meters*100;

 };
 console.log(convert_to_centimeters(5.2));

 //q14
const is_negative = (num) => {
  if (num < 0) return "Negative";
  return "Not Negative";
};
console.log(is_negative(-18));

 //q15
const smallest_of_two_number = (num1, num2) => {
  if (num1 < num2) return num1;
  return num2;
};
console.log(smallest_of_two_number(8, 3));

