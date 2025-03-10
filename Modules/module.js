const math = require('./math')

//directlly use add and sub function
const {add , sub  } = require('./math')

console.log(`Math Add value is : ${math.add(2 , 4)}`);
console.log("Math Subtract value is : ",math.sub(2 , 4));



console.log(`Math value are : ${add(2 , 4)} , ${sub(7 , 3)}`);

