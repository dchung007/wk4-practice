function bindToAnArg(func, arg) {
  // Your code here
  let boundfunc = func.bind(func, arg);
  return boundfunc;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
