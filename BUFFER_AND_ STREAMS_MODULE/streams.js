// !Streams



// !Types of Streams

// 1.Readable stream
// 2.writeable stream
// 3.duplex stream


//1.Readable stream
      //?  =>these is are the stream which are used to read from the file and network i/o connections
// 2.Writeable stream
    // ?   =>these is are the stream which are used to write the data to the files and network i/o connections
// 3.Duplex stream
    // ?    =>these is are the stream which are used to data at a time


const fs=require('fs');

// let readData=fs.createReadStream('./streams.txt','utf-8')
// readData.on('data',data=>console.log(data))
// readData.on('end',_=>console.log("reading is done"))
// readData.on('error',err=>console.log(err))
// readData.on('close',_=>console.log("closeingis done"))

// !on keyword used to trigger the event
// !Events
// ?data
// ?end
// ?error
// ?close

// !WriteableStream

// let writestream=fs.createWriteStream('writefile.txt')
// writestream.write("this the stream method to write file")

// !write method used to write the file

// !read and write stream

// let readandwrite=fs.createReadStream('./streams.txt')
// readandwrite.on('data',data=>{
//     let writef=fs.createWriteStream('./writefile.txt')
//     writef.write(data)
//     console.log("file read and write file succesfuly");
    
// })

// ! duplux stream

let readwrite=fs.createReadStream('./streams.txt')
