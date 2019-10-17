const removeFromArray = function (...args) {
    
    const array = args[0];
    // the very first item in our list of arguments is the array, we pull it out with args[0]
    
    const newArray = [];
    // create a new empty array
    
    array.forEach((item) => {
      // use forEach to go through the array

      if (!args.includes(item)) {
        newArray.push(item);
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed

      }
    });
    
    return newArray;
  // and return that array
};



module.exports = removeFromArray
