// Create three functions. checkParamsFn, checkOverEighteenFn & calculateAgeFn.
// The first function checks your parameters and returns
// true if all of them are integers, whereas returns false if not.
// The second function is self explanatory.
// The third function, uses the first and second functions to check its inputs
// and returns an error message that starts with "error:"
// This function should return a rounded age.
// READING MATERIALS:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// https://www.w3schools.com/js/js_dates.asp
// https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript
// HINT: recycling code is never bad practice.

// This functions should check the integrity of the parameters and pass true/false
function checkParamsFn(year, month, day) {
  // Write your code here
  if(typeof year === 'number' && typeof month === 'number' && typeof day === 'number') {
    return true}
 else {return false}
 
}

// This functions checks if the person is or above 18 years of age, return true/false
function checkOverEighteenFn(year, month, day) {
  // Write your code here
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  if(parseInt(mm)>month){
    return ((parseInt(yyyy) - year)>=18)
  }
  else if(parseInt(dd)>=day&&parseInt(mm)===month){
    return ((parseInt(yyyy) - year)>=18)
  }
  return ((parseInt(yyyy) - year -1)>=18)
  }

function calculateAgeFn(year, month, day) {
  // Write your code here
  if(checkParamsFn(year,month,day)&&checkOverEighteenFn(year,month,day)){
    let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  if(parseInt(mm)>month){
    return (parseInt(yyyy) - year)
  }
  else if(parseInt(dd)>=day&&parseInt(mm)===month){
    return (parseInt(yyyy) - year)
  }
  return (parseInt(yyyy) - year -1)
  }
  
  else{
    return "error"
  }
 
}
console.log(calculateAgeFn(2003,5,19))
// Look at the naming of the functions. it looks like salwaBaqer, where
// the first letter of the first word is small, while the first letter of the
// second word is Capital. This is called "Camel Casing."
// Also the Fn at the end of the function name is short for function.
// str = String, int = Integer, arr = Array, obj = Object, fn = Function
// It's best practice to name your function as to what it does, or your variable
// to what it holds.

module.exports = calculateAgeFn;
