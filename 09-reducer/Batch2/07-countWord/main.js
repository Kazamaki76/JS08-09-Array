let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

//array => obj 

const initObj = {} 
function reducerFn(acc,name,index,arr) {
    //acc === { "jack"}
    // - ยังไม่เคยมีชื่อใน object => เพิ่มขื่อเป็น key และ value เป็น 1 
    // มีชื่อใน obj อยู่แล้ว => update value เพิ่มขึ้น 1 

    //acc["jack"] === acc [name] 
    // if(!acc[name]) {
    //     acc[name] = 1 ;
    // } else {
    //     acc[name]++;
    // }
    // return acc;
    if (!acc[name]) acc[name] = 0;
    acc[name] ++;
    return acc;
}

const r = names.reduce(reducerFn, initObj);
console.log(r);

