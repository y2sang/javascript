import { conHello, fnPlusNumbers } from './lib-named.js';
console.log(conHello, '이름으로 내보내기');
console.log('1+2 = ', fnPlusNumbers(1, 2));

import * as myLibrary from './lib-named.js';
console.log(myLibrary.conHello, '*을 사용한 이름 내보내기');
console.log('3+4 = ', myLibrary.fnPlusNumbers(3, 4));

import fnMyfunction from './lib_default.js';
console.log('HI! EXPORT Default');
console.log('5+6 = ', fnMyfunction(5, 6));

