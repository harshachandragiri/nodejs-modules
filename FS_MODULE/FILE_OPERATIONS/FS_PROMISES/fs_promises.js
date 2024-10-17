const fs=require('fs/promises')
// !Read file
// fs.readFile('./promise.txt','utf-8')
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));
// !Write or create file
// fs.writeFile('./promise1.txt','this second promise file')
// .then(_=>console.log("file was created"))
// .catch((err)=>console.log(err))

// !Rename file

// fs.rename('./promise.txt','./promises.txt')
// .then(_=>console.log("file was renamed"))
// .catch((err)=>console.log(err))

// !Deleted files

// fs.unlink('./promises.txt')
// .then(_=>console.log("file was deleted"))
// .catch((err)=>console.log(err))

// !Read and Write

// fs.readFile('./promise1.txt','utf-8') 
// .then(data=>{fs.writeFile('./promise12.txt',data)
//       .then(_=>console.log(data))
//       .catch(err=>console.log(err))
//     })
// .catch(err1=>console.log(err1))

// !Rename the file and change extentension

//  fs.rename('./promise12.txt','./promise12.js')
//  .then(_=>console.log("file renamed successfully"))
//  .catch(err=>console.log(err))
 
// !Create folder
 
//  fs.mkdir('./promises')
//  .then(_=>console.log("floder created"))
//  .catch(err=>console.log(err))

// !create the nested folder

// fs.mkdir('./promises/promise_files')
// .then(_=>console.log("floder inside floder created"))
// .catch(err=>console.log(err))

// !Create a file inside folder

// fs.writeFile('./promises/promise_files/program1.txt','this floder inside file')
// .then(_=>console.log("floder inside file created"))
// .catch(err=>console.log(err))

// !Rename the floder
  
//  fs.rename('./promises/promise_files','./promises/promise_changes')
//  .then(_=>console.log("floder name changed"))
//  .catch(err=>console.log(err))

// !delete floder
//  fs.mkdir('./promises12')
//  .then(_=>console.log("floder created"))
//  .catch(err=>console.log(err))

fs.rmdir('./promises12')
.then(_=>console.log("deleted sucssfully"))
.catch(err=>console.log(err))




