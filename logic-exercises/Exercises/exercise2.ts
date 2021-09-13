export const checkBrackets = (str: string): boolean => {
  let stack: string[] = [];
  let map: { [key: string]: string } = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      if (stack.length === 0) {
        return false;
      }
      let last = stack.pop();
      if (map[char] !== last) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(checkBrackets('(]'));
console.log(checkBrackets('([)]'));
console.log(checkBrackets(''));
console.log(checkBrackets('[({})]'));



