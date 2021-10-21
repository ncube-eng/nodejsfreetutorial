// module fs is filesystem 

//const fs= require('fs');


//const first = fs.readFileSync('./context/first.txt','utf8');

//console.log(first);

//const second = fs.writeFileSync('context/second.txt','hello world');

//const result = fs.readFileSync('./context/second.txt','utf8');
//console.log(result);


const _  = require('lodash')

const items =[1,[2,[3,[4]]]]

const newitems = _.flattenDeep(items);

console.log(newitems);