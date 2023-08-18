let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// expected result: ['a', 'b', 'c', 'e', 'd']

const resule  = alphabets.reduce((acc, char) => {
    // acc.push(char);
    // ถ้า character ตัวนั้นอยู่ใน accแล้ว ไม่ต้องpush 
    // ถ้าไม่มี character นั้นอยู๋ใน acc = push 
    // char == "b"
    //acc == ["a","b"]
    let found = false; 
    for (let c of acc) {
        if (c == char) ound = true; 
    }
    if (!found) acc.push(char); 
    return acc;
}, [] );

console.log(result); 
const set = new set (alphabets);

console.log(set); 

const newArr = new Array