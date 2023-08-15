
let arr = [7, 9, 0, -2] 
function first(arr, n ) { 
    if ( n == undefined || n == 1 ) {
        return arr.slice(0,1) 
    } else if (n > 1 ){
        return arr.slice(0,n)
    }
}
 console.log(first(arr, -2));