/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const splitString = s.trim().split(" ");
    const lastWord = splitString[splitString.length-1];
    const lastWordLength = lastWord.length;
    
    return lastWordLength;
};