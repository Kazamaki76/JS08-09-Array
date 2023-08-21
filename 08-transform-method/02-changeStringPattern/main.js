// let text = "How are you doing today?";
// const myArray = text.split("");



// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join('-'));


const str = "background-color"

const arr = str.split('-'); // [background, color]

const result = arr[0] + arr[1][0].toUpperCase() + arr[1].slice(1);

let result = "" 
arr.forEach((word,index) => {
    if(index == 0 ){
        result += word;
    } else {
        result += word[0].toUpperCase
    }
})



const arr1 = str.split("-")
arr1