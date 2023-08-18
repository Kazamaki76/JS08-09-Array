const array = [1, 2, 30, 400];
const newArr = array.map((item) => 2 * item);
console.log(newArr);

const array1 = [1, 2, 3, 4];
const newArr1 = array1.map((item) => `${item}`);
console.log(newArr1);

const array2 = [1, "1", 2, {}];
const newArr2 = array2.map((item) => typeof item);
console.log(newArr2);

const array3 = ["apple", "banana", "orange"];
const newArr3 = array3.map((item) => item.toUpperCase());
console.log(newArr3);

const array4 = [1, 3, 4, 5, 6, 7, 8];
const newArr4 = array4.map((item) => (item % 2 === 0 ? "even" : "old"));
console.log(newArr4);

const array5 = [1, -3, 2, 8, -4, 5];
const newArr5 = array5.map((item) => (item < 0 ? -item : item));
console.log(newArr5);

const array6 = [100, 200.25, 300.84, 400.3];
const newArr6 = array6.map((item) => item.toFixed(2));
console.log(newArr6);

const array7 = [0, 5, 10, 7, 6, 5, 0];
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const newArr7 = array7.map((item) => month[item]);
console.log(newArr7);

const array8 = [1, 16, 81, 256, 625, 1296];
const newArr8 = array8.map((item) => Math.sqrt(Math.sqrt(item)));
console.log(newArr8);

const array9 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
const newArr9 = array9.map((item) => item.name);
console.log(newArr9);

const array10 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
const newArr10 = array10.map((item) => item.age);
console.log(newArr10);



const log = console.log;

const array11 = [
    { name: "apple", surname: "London" },
    { name: "banana", surname: "Bangkok" },
    { name: "watermelon", surname: "Singapore" },
  ];
  const newArr11 = array11.map((item) => `${item.name} ${item.surname}`);
  console.log(newArr11);
  
  const array12 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-01" },
    { name: "watermelon", birth: "1985-12-01" },
  ];
  const newArr12 = array12.map(function (fruitObj) {
    const newFruitObj = Object.assign({}, fruitObj);
    const birthYear = fruitObj.birth.slice(0, 4);
    newFruitObj.age = 2021 - birthYear;
  
    return newFruitObj; // ถ้า ไม่ return จะได้ undefined
  });
  
  console.log(newArr12);
  
  const array13 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
  ];
  
  const Month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const newArr13 = array13.map(function (obj) {
    let name = obj.name;
    const day = obj.birth.slice(-2);
    const monthIndex = obj.birth.slice(-5, -3) - 1;
    const year = obj.birth.slice(0, 4);
  //   console.log(monthIndex);
  
    //create string
    const resultString = `<tr>${name}<td><td>${day} ${Month[
      monthIndex
    ].toLowerCase()} ${year}</td></tr>`;
  
    return resultString;
  });
  
  console.log(newArr13);
// const array = [9, 17, 23, 5] ;
// // ค่าที่มากกว่า 10 

// const newArray = array = filter(function (num) {
//     // if (num > 1= ) {
//         //return true; 
// // }else {
//     // return false; 
// // }
// /*  

// if (num > 10) return true; 
// return false; 

// return num >10? true : false;
// return num> 10



// */
// })





const array = [
    { name: 'John', birth: '2001-07-31' },
    { name: 'Jack', birth: '1990-06-24' },
    { name: 'Jim', birth: '1984-12-13' },
    { name: 'Jeff', birth: '1996-02-05' },
    { name: 'Joe', birth: '2002-06-13' }
  ];
  // เกิดเดือน 6

  function filterFn(persoObj, index, array ) {
    const month = +personObj.birth.slice(5, 7);
    if(month === 6) return true; 
    else return false; 
  }
  const filterLists = array.filter(filterFn);
  log(filterLists); 
