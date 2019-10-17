const repeatString = function(string, times) {
  
    if (times < 0) return "ERROR"
    var returnedString = "";
 
    for (let i=0; i < times; i++) {
        returnedString += string;
    }

  

  return returnedString;

}



module.exports = repeatString
