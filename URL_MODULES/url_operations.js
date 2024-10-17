let address='https://www.amazon.in/s?k=samsung+s23+ultra&crid=GNPLB2XX3L4J&sprefix=sa%2Caps%2C782&ref=nb_sb_ss_ts-doa-p_2_2';

const url=require('url');
let url1=url.parse(address);
console.log(url1)
console.log(url1.host)
console.log(url1.domain)
console.log(url1.port);


