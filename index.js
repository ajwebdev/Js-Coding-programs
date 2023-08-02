// Program to find Year from email
/*
I/P 'ajith.kumar.2019@gmail.com' 'gowthaam.dev.2013@zohocorp.com
O/P  2019 2013
*/

const getYearFromEmail = (str) => {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes('.') && Number.isInteger(Number(str[i + 1]))) {
      res = str.slice(i + 1, i + 5);
      return res;
    }
  }
};

const getListOfYearFromEmails = (N, arr) => {
  const res = [];
  for (var i = 0; i < N; i++) {
    res.push(getYearFromEmail(arr[i]));
  }
  return res;
};

// console.log(
//   'Year',
//   getListOfYearFromEmails(2, [
//     'ajith.kumar.2019@gmail.com',
//     'gowthaam.dev.2013@zohocorp.com',
//   ])
// );

// Find last word of the string
var lengthOfLastWord = function (s) {
  const str = s.split(' ').reverse().join(' ').trimStart();
  console.log('str', s.split(' ').reverse().join(' ').trimStart());
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (!str[i].indexOf(' ') >= 0) {
      count += 1;
    }else{
      break
    }
  }
  return count;
};
console.log('length of the last word', lengthOfLastWord('Hello World'));
