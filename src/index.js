module.exports = function check(str, bracketsConfig) {
  let stack = []

  for (let elem of str) {
    if (elem !== new Map(bracketsConfig).get(stack[stack.length - 1])) {
      stack.push(elem)
    } else stack.pop(elem)
  }
  return !stack.length
}
