function combineArrays(fruits, vegetables) {
    const groceries = [...fruits, ...vegetables];
    return groceries;
  }
  
  // Example usage:
  const fruits = ["apple", "banana", "orange"];
  const vegetables = ["carrot", "potato", "tomato"];
  
  const groceries = combineArrays(fruits, vegetables);
  console.log(groceries);