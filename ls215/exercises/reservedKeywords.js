//spot the bug.
//the problem is that forEach will iterate through an entire array. it CANNOT quit early,
//its not possible. should change it to a for loop. 
//lol, or you could use array.includes to make it even easier.

const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
'with', 'yield'];

function isReserved(name) {
for (let i = 0; i < RESERVED_KEYWORDS.length; i += 1) {
  let reserved = RESERVED_KEYWORDS[i];
  if (name === reserved) {
    return true;
  }
};

return false;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true