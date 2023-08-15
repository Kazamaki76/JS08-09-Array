// const sales = [
//     { price: 1000, discount: 0.1 },
//     { price: 500, discount: 0.05 },
//     { price: 100 }
//   ];
//   // sales = [ obj1, obj2, obj3] 

// const newArr= [] 

//   // WalkThrough Array (loop) 
//   for (let productobj of sales) {
//     //  each item = Object 
//     // access object => dot, bracket 
//     let price = productionobj.price; 
//     let discount = productobj.discount; 
//     let netPrice;
//     if(discount) {
//         netPrice = price * (1 - discount) ; 
//     }
//     const newobj = {netPrice: netPrice};
//     console.log(price, discount, netPrice) ;  
//   }
// console.log(newArr);



//programmer move 



// const newArr 
// //obj = { price: 1000 , discount: 0.1 }
// sales.forEach ((obj) ==> {
//   //calc netprice
//   let newprice = obj.price * ( 1- (obj.dicsount || 0))
//   newArr.push ({ netPrice}) ; 

// }
// ) ;




// สายโคตรย่อ
sales.forEach(( obj) => newArr.push ({ newPrice: obj.price * (1-(obj.discount || 0)) }));
console.log(sales);
console.log(newArr); 

// ลองอธิบาย code 