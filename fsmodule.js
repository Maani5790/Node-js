const fs = require('node:fs'); 

// fs.readFile('file.txt', 'utf8', (err, data)=>{
//     console.log(err, data)
// })

// console.log("finish reading file");

//  const a = fs.readFileSync('file.txt')
//     console.log(a.toString());



fs.writeFile('file2.txt', "this is new data", ()=>{
console.log("write the file")
} );




console.log("finishing data");