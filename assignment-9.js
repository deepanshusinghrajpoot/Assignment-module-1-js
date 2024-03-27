const arr=[1 , 2, 999, 56, "Mithun", 1234, "PW"];
let lengthOfArray=arr.length;
for(let i=0; i<lengthOfArray; i++){
    if(( typeof arr[i])===(typeof "pw")){
        console.log(`Found the first string at index ${i} : ${arr[i]}`);
        break;
    }else{
        console.log(`In this array not any string at index ${i}`);
    }
}