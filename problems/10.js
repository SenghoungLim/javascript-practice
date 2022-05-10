/**
 * Problem 10: Strings
 * 
 * Given a string, return a modified version with the first half in UPPERCASE, and the second half in lowercase. 
 * If the string has odd length, the middle character should be lowercase.
 * 
 * @example "abcdef" -> "ABCdef"
*/
function problem(str) {
    if (str.length % 2 == 0)
    {
        let middle = str.length/2
        let firstHalf = str.substr(0, middle)
        let secondHalf = str.substr(middle, str.length)
        return modString = firstHalf.toUpperCase() + secondHalf.toLowerCase();
        
    }else
    {
        let middle = str.length/2
        let extraSecondHalf = str.length - middle
        let firstHalf = str.substr(0, middle)
        let secondHalf = str.substr(extraSecondHalf, str.length)
        return modString = firstHalf.toUpperCase() + secondHalf.toLowerCase();
    }
}

const tests = [
    ["abcdef", "ABCdef"],
    ["abcdefg", "ABCdefg"],
    ["HELLO THERE", "HELLO there"],
    ["js4Life!", "JS4Life!"],
    ["UNiTeD STATes OF AMerICA", "UNITED STATEs of america"]
]

module.exports = {problem, tests};