const inventory = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];
  
  let result = inventory.find((x) => x.id === 2 );
  
  console.log(result);