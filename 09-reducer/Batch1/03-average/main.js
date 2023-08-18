// const scores = [
//     { score: 90, subject: 'HTML', weight: 0.2 }, 18 
//     { score: 95, subject: 'CSS', weight: 0.3 }, 
//     { score: 85, subject: 'JavaScript', weight: 0.5 }
//   ];



const totalSum = score.reduce((a,c) =>  a + c.score * c.weight, 0 ) ; 

const initial = { sum: 0, total: 0 } ; 

//acc = {sum.....,total:.....}
// cur = { score:......., subject:......, weight:......}, 

const summarizeObj = score.reduce((acc,cur) => {
    acc.sum += cur.score*cur.weight;
    acc.total += cur.weight; 
    return acc;
} , initial);

console.log(summarizeObj);
console.log(summarizeObj.sum / summarizeObj.total); 
