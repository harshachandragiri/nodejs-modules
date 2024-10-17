//  ?FS:if we need to intract with the files in our operating system then we use fs module

//  !import fs module

const fs = require('fs');

// console.log(fs);

// !file operations0p


// !read file

let data=fs.readFileSync('./node.txt','utf-8')
console.log(data.toString());
//  ?to covert the buffer data into readable formet use 'utf-8' or toString()----------------

// !Write a file
 
fs.writeFileSync('./node1.txt','learning node')
let data1=fs.readFileSync('./node1.txt','utf-8')
console.log(data1);
// ?append method if file is not found create new file

//  !Append file 
 
fs.appendFileSync('./node.txt','i am learning node js')
 let data3=fs.readFileSync('./node.txt','utf-8')
  console.log(data3);

  fs.appendFileSync('./node2.txt','append method if file is not found create new file')
  console.log("file created");

// !Read and append

let data2=fs.readFileSync('./node.txt','utf-8')
console.log("data read succsfully")
fs.appendFileSync('./node5.txt',data2)
console.log("file append succsfully");

// !Delete file

fs.unlinkSync('./node4.txt');
console.log("deleted file succsfully");

//  !Raname file

fs.renameSync('./node.txt','./node.js');

// !Create folder

fs.mkdirSync('./node/nod1.js');

// !Delete folder

fs.rmdirSync('./node')






