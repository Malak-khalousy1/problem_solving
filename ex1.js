//q1
export const rounding_off = (num, n) => {
  return num.toFixed(n);
};


//q2
 export const convert_to_radian = (degree) => {
  return degree * (3.14 / 180);
};


//q3
export const largest_of_two_number = (num1, num2) => {
  if (num1 > num2) return num1;
  return num2;
};


//q4
 export const adding_two_number = (num1, num2) => {
  return num1 + num2;
};


//q5
export const convert_to_minutes = (hours) => {
  return hours * 60;
};


//q6
export const is_greater_than_five = (num) => {
  if (num > 5) return "Yes";
  return "No";
};


//q7
 export const calculate_discount = (orginalPrice, discountPrice) => {
  return orginalPrice - discountPrice;
};


//q8
 export const is_divisible_five = (num) => {
  if (num % 5 == 0) return "Yes";
  return "No";
};


//q9
 export const is_even = (num) => {
  if (num % 2 == 0) return "Yes";
  return "No";
};

//q10
 export const is_elligible = (age) => {
  if (age >= 18) return "Eligible";
  return "Not Eligible";
};


//q11
 export const double_number=(num)=>{
    return num*2;
 };


//q12
 export const convert_to_second =(num)=>{ return num*60};


 //q13
 export const convert_to_centimeters=(meters)=>{
    return meters*100;

 };


 //q14
export const is_negative = (num) => {
  if (num < 0) return "Negative";
  return "Not Negative";
};


 //q15
export const smallest_of_two_number = (num1, num2) => {
  if (num1 < num2) return num1;
  return num2;
};


