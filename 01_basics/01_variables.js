const accountId=14451
let  accountEmail="sk@123gmail.com" 
var accountpassword="123344"
accountCity="Jaipur"
let accountState;

// accountId=2 //not allowed why this is const

accountEmail="ghs@23"
accountpassword="212121"
accountCity="siwan"

console.log(accountId);
/*
prefer not use to var
because of issue in block scope and functional scope
*/
console.table([accountEmail,accountpassword,accountCity,accountState])