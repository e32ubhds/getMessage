/*
1.数组求和（sumArray）
2.四舍五入（round）
3.输出随机整数（random）
*/
function sumArray(arr) {
  var  arr = (typeof  arr == "object") ?  arr  :  [arr];
  var sum = 0;
  for (let i = 0, len = arr.length; i < len; i++) {
    sum += parseFloat(arr[i]) || 0;
  }
  sum = sum.toFixed(2) * 100 / 100;
  return sum;
};

function round(number, digits) {
  return parseFloat(parseFloat(number).toFixed(digits));
};

function Random(min, max) {
  return Math.round(Math.random() * (max - min)) + min
};
