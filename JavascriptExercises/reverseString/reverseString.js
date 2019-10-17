const reverseString = function(str) {

    var splitString = str.split("");

    var reverseArray = splitString.reverse();

    var joinString = reverseArray.join("");

    return joinString;

}



module.exports = reverseString
