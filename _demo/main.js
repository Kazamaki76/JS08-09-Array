const log = console.log 

log("learn array") ; 

// Array Literal  
// element : สมาชิก
const friends = ["Money", "Non" , "Peakpoon" , "Fon"] ;
log(friends);

// Array constuctor 
const height = new Array(150, 160, 175) ;
log(height); 

// ## Access, Modify, Add, Delete การเข้าถึง
// Bracket Notation with Index 
log(friends[0]);  //Money
log(friends[2]);  // Non
log(friends[-1]); // undefined
log(friends[10]); // undefined

// Update 
friends[0] = "Gold"  ;
log(friends);

friends[1] = "Michael"; 
log(friends) ;

//if trying to update in index that didnt have data === add 
friends[-1] = "Wayne"; 
log(friends) ;


//add 
log(friends[3]); 
friends[4] = "git" ;
log(friends); 


//delete    
delete friends [2]; 
log(friends); 
//การทำแบบนี้มันจะไม่้ได้เรียงให้ใหม่ กดดูเอา

log(friends[2]);


// ####### Basic Property @#############

// <arr>.length
log(friends.length); 

// friends[5] = "Mix" ; 
// friends[6] = "Mix" ; 
// friends[4] = "Mix" ; 
friends[friends.length] = "Mix "; 
log(friends);
log(friends.length);

for(let i = 0; i < friends.length; i++ ){
    //0,1,2,3,4,5 (length = 6)
    console.log(i, friends [i]);
}

// Method CRUD element 

const animals = ["Spider" , "Cat", "Elephant"] ; 

//  Immutable : เปลี่ยนแปลงค่าไม่ได้ (ถ้าจะเปลี่ยนต้องเขียนทับ)  
// Mutable : เปลีั่ยนแปลงได้ 

 //push ทำให้ array mutate (ทำให้ยาวขึ้น)
 // Method push return ได้อะไรกลับมา 
 let r = animals.push("Dog") ;  
// log(animals);
// log(r) ; //4

let s = animals.unshift("snake", "bird") ;
// log(animals);
// log(s); //=6 

let t = animals.pop() ;
// log(animals) ;
// log(t) ;






// ########   4 loop  

// for loop
// imparative กำหนด i เอง
for (let i = 0; i < animals.length; i++) {
    console.log(animels[i]);
}

//for.. in (มอง array เป็น object ประเภทหนึงได้ )

/* 
<key> : <value> => <index>:<value>
const arr = {
    0 : "Bird" ,
    1 : "Cat" ,
    2 : "Dog" 

}
*/

// for (let index in animals) {
//     console.log(index, animals[index]); 
// }



// 4C for ... of 
for (let element of animals ) {
//1st loop : element = "snake"
// 2nd loop : element = "mountain spider"
//3 element = spider
//4 = cat
//5 = elephant
   
log(element) ; 

}



//Aside Topic : Higher Order Function 
function add (x, y) {
    return x + y ; 
}
log(add(5, 6 ));

//Function Expression : FN as a value 
const a = console.log ; 
const b = alert ; 
// a("Hi") ; 
// b("hello") 


// สร้าง FN ที่รับ Parameter เป็น function 

function addAndShow ( x, y, showFn) {
    let result = x + y ;
    // call ShowFn
    showFn (`result is : ${result}`);
    return result; 
}

function show ( result  ) { 
    console.log (result ) ; 

}

addAndShow(5,10 )







const items = ["Football", "Bag", "Dish"] ;
// 4d : forEach 
//Syntax : <array>.forEach(FN)
//array == caller 
// Higher order FN == forEach ( รับ parameter เป็น FN )

// items.forEach(function () {})
// //callback จะถูกรันตามจำนวนสมาชิกใน array 
// items.forEach(function ( ) {
//     console.log("Hi") ; 
// })  ;


// function iterateFn (a) {
//     console.log(a); 
// }
// items.forEach(iterateFn) ;



const iterateFn = (a) => console.log(a); 

items.forEach(iterateFn) ;
//1st loop : ("Football") => console.log("Football")
//2nd loop : ("Bag") => console.log("Bag")
//3rd loop : ("Dish") => console.log("Dish")













//  # 1 FN : myForEach

function HOF(callback) {
    //code....

    //#2 : FN
    for(let i = 0; i < 2; i++ ) {
        fn(`index = ${i}`);  
    }
    //code...
}

//caller 
myForEach((a => console.log(a))); 




sum = 0;
[1,2,3,4].forEach((a) => sum = sum + a)
/* 
1st : (1) => sum = 0 + 1 ; => sum = 1;
2nd : (2) => sum = 1 + 2 ; => sum = 3;
3rd : (3) => sum = 3 + 3 ; => sum = 6;
4st : (4) => sum = 6 + 4 ; => sum = 10;



*/