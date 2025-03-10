const fs = require('fs'); //file system module

//used this fs module to intract with files

//creating a file (Synchronous call)
// fs.writeFileSync("./test.txt" , 'Hey There');


//Async
// fs.writeFile("./test.txt" , "Hello World", (err) => {})


//Reading the file


// Sync.. -> returns the result
// const result = fs.readFileSync("./other.txt" , "utf-8");
// console.log(result);


//Async.. -> return nothing , we have to pass a callback 
// fs.readFile("./other.txt" , "utf-8" , (err , result)=>{
//     if(err){
//         console.log("Error",err);
//     }else{
//         console.log(result);
//     }
// });


// Appending the text
// fs.appendFileSync("./test.txt" , "\nHey there I am appended");


// Copy the file
// fs.cpSync("./other.txt" , "./copy.txt");

// Delete the file
// fs.unlinkSync("./other.txt");

// Cheking status of file
// console.log(fs.statSync("./test.txt"));