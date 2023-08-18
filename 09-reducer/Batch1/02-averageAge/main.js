// const nums = [27, 21, 25] ; 

// let john = { name: 'John', age: 27 };
// let jo = { name: 'Jo', age: 21 };
// let jin = { name: 'Jin', age: 25 };

// const plus= (numsd)=> numsd.reduce((a,b) =>  a + b , 0 )

// let arr = plus / 3
// const getAverageAge  = [plus] / 3;

// console.log(getAverageAge(nums))  



// function getAverageAge(arr) {
//     let sum = 0;
//     for (let person of arr) {
//       sum += person.age;
//     }
//     return sum / arr.length;
//   }
  
//   let john = { name: 'John', age: 27 };
//   let jo = { name: 'Jo', age: 21 };
//   let jin = { name: 'Jin', age: 25 };
  
//   let arr = [john, jo, jin];
  
//   console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33







// เฉลยแby sensei 

let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, Jo, Jin];

function getAverageAge(array) {
    // const sumAge = array.reduce(( acc,personObj) => {
    //     let age = personObj.age; 
    //     return acc + age; 
    // } ,0);
    // return sumAge / array.length; 
    
    const sumAge = array.reduce((a,c) => a + c.age, 0);
    returnsumAge / array.length
}
const result   = getAverageAge(arr) ; 
console.log(result); 

