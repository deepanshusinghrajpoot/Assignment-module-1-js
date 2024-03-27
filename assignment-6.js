let Name = "mithun";
let email = "mithun.s@pw.live";
let age = "mithun";

if((typeof Name) !== (typeof "deepanshu")){
    console.log(`Name should be a string`);  
} else if ((typeof email) !== (typeof "singh")){
    console.log(`Email should be a string`);
} else if ((typeof age) !== (typeof 25)){
    console.log(`Age should be a number`);
}else{
    console.log(`enter the  valid information`);
}