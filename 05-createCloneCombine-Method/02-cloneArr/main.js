// let arr = [1, 2 , 3] ;

// console.log(arr) 


function clone(arr) {
    // const newArr = arr.slice()
    // return newArr
    return arr.slice();
}

const a = clone([ 1,2,3,4]);
console.log(a); 