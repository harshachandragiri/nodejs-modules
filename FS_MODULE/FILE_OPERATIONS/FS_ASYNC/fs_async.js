// const { log } = require('console');
// !Import statement
const fs=require('fs');
// !Read file and Write
// fs.readFile('node.txt','utf-8',(err,data)=>{
//     if(err)
//       console.log(err)
//     else
//        fs.writeFile('./node2.txt',data,err=>{
//         if(err)
//             console.log(err)
//         else
//             console.log("write succesfully");
                
//     });
     
// })


// !write file

// fs.writeFile('./node1.txt','i love node',err=>
// {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("success");
        
//     }
// })

// ! Appendfile

// fs.appendFile('./node1.txt','append is completed',err=>{
//     if(err)
//         console.log(err)
//     else
//         console.log("append compilted");
// })

//! Renaamefile

    // fs.rename('./node1.txt','./node2.txt',err=>{
    //     if(err)
    //         console.log(err)
    //     else
    //         console,log("renameed succesfully")
    // })

// !delete file

//    fs.writeFile('./node3.txt','thsi is delete file',err=>{
//     if(err)
//         console.log(err)
//     else
//         console.log("created  successfully");
        
//    })   
    //   fs.unlink('./node3.txt',err=>{
    //        if(err){
    //         console.log("delete succesfully");
            
    //        }
    //   })

    // !Nested floder

    fs.mkdir('./async_floder',err=>{
        if(err) throw err;
        console.log("floder created");
        fs.mkdir('./async_floder/aync_files',err1=>{
            if(err1) throw err1;
            console.log("floder insise aync floder was created")
            fs.writeFile('./async_floder/aync_files/asyc.js','this is the created file ',err2=>{
                if(err2) throw err2;
                console.log("file inside floder was created");
                
            })
         })
        
    })