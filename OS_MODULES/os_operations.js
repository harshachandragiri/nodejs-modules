const os=require('os')
console.log(os.hostname());
console.log(os.arch());
console.log(os.platform());
console.log(os.userInfo());
console.log(os.freemem()/1026);
console.log(os.totalmem()/1026/1026/1026);
console.log(os.tmpdir());
console.log(os.type());