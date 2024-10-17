// !Buffer
// It is class
// It is used to store the data temporally and transfer the other place
// Data is stored in binary formet i.e..'0' and '1'
// Buffer is used to manipulate the binary data
// It includes video,audio and images...

// !How to create buffer

// !1.from:
// ?Using from keyword

// const buf=Buffer.from('hello world')
// console.log(buf.toString());

// ?using alloc method alloc(size,value)

// const buf=Buffer.alloc(20,"hello world");
// console.log(buf.toString())

// !2.isbuffer

// const buf=Buffer.from("hello world")
// console.log(Buffer.isBuffer(buf));

// !3.silce

// const buf=Buffer.from("hello world")
// console.log(buf.slice(2,7).toString());

// !length

// const buf=Buffer.from("hello world")
// console.log(buf.length);




