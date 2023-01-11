module.exports = function reverse (n) {
  let arr = String(n).split('');
  let reversedArr = arr.reverse();

  if (reversedArr.includes('-')) {
    return reversedArr.slice(0, reversedArr.length-1).join('');
  } else {
    return reversedArr.join('');
  }
}
