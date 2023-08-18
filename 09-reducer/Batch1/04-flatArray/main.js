let flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
  ];
  // expected result: [0, 1, 2, 3, 4, 5]

  flattened.reduce(( acc,subArr) => {
    //walkthrough subarray
    // each element of subarray => push into acc
    for (let num of subArr) {
        acc.push(num) ;
    }
    return acc; 

  }, [])

  console.log(flatArr) ;