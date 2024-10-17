const fs=require('fs')

// !Read file

// let readfile=async()=>{
//     let data=await fs.readFile('./data.txt','utf-8',(err,data)=>{
//        if(err) throw err;
//        console.log(data);
//        })
//     }

// readfile();

// !write file

// let writefile=async()=>{
//     let data=await fs.writeFile('./data1.txt','this is the copy of first file',(err,data)=>{
//        if(err) throw err;
//        console.log("file readen succesfully");
//        })
//     }
// writefile();

// !Read and write

// let readwritefile=async()=>{
//     let data=await fs.readFile('./data.txt','utf-8',(err)=>{
//        if(err) throw err;
//         fs.writeFile('./data2.txt','this second file',(err2)=>{
//             if (err2) throw err2;
//             console.log("file read and write opration compeleted")
//         })
//        })
//     }

// readwritefile();

// !Rename file

// let renamefile = async ()=>{
//     let renamef= await fs.rename('./data.txt','./data3.txt',err=>{
//     if(err) throw err;
//     console.log("renameSuccsfull")
// })}

// renamefile()

// !Append file

//  let appendfile=async()=>{
//     let ap=await fs.appendFile('./data2.txt','the is append file',err=>
//     {
//         if(err) throw err;
//         console.log("append success");
        
//     }
//     )
//  }
//  appendfile()

// !Create floder

// let makefloder=async ()=>{
//     let make=await fs.mkdir('./ayscawait',err=>{
//         if(err) throw err
//         console.log("create floder succesffully");
        
//     })
// }
// makefloder();

// !Create nested floder

// let nestedfloder=async ()=>
// {
//     let make1=await fs.mkdir('./ayscawait/insidefloder',err=>{
//         if(err) throw err;
//         console.log("floder insidefolder created successfully");
        
//     })
// }
// nestedfloder()

// !create file inside floder

// let nestedfloder1=async ()=>
// {
//     let make2=await fs.writeFile('./ayscawait/insidefloder/index.js','this is file inside floder',err=>{
//         if(err) throw err;
//         console.log("floder inside file create");
        
//     })
// }
// nestedfloder1()

// !Remove file and floder 

// let removefloder=async ()=>
// {
//     let remove=await fs.rmdir('./ayscawait/insidefloder',err=>{
//         if(err) throw err;
//         console.log("floder insidefolder removed");
        
//     })
// }
// removefloder()

