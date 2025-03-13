function str_del(){
    let selection = window.getSelection().toString();
    var str = document.getElementById("elem").textContent;

    var start = str.indexOf(selection);
    var end = start+selection.length

    var result = str.slice(0, start) + str.slice(end)

    document.getElementById("elem").textContent = result;
}

function getProperty(obj, prop) {
    return obj.hasOwnProperty(prop) ? obj[prop] : undefined;
}

function addProperty(obj, prop) {
    obj[prop] = true;
    return obj[prop];
}

function removeProperty(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
        delete obj[prop];
        return true;
    }
    return false;
}

function getFullName(name, surname){
    return name + ' ' + surname;
}

function getLengthOfWord(word){
    return word.length
}

function getLengthOfTwoWords(word1, word2) {
    return word1.length + word2.length
}

function isGreaterThan(num1, num2){
    return num1 > num2
}

function isSameLength(word1, word2){
    return word1.length === word2.length
}

function isEven(num){
    return num % 2 === 0
}
function isEvenAndGreaterThanTen(num1){
    return num1 % 2 === 0 && num1>10
}

function computeAreaOfTriangle(height, length){
    return (height/length)/2
}