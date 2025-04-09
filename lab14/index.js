function isUpperCase(word){
    return word[0].toUpperCase() === word[0] && word[0].toLowerCase() !== word[0]
}

function isEmail(word){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(word);
}

function  isBankCard(number){
    const bankPattern = /\d{4}-\d{4}-\d{4}-\d{4}/
    return bankPattern.test(number);
}

function swapWords(word1){
    const regex = /(\w+)\s+(\w+)/
    return word1.replace(regex, "$2, $1")
}

function findB(word){
    const regex = /d(b+)(d)/i;
    return word.match(regex);
}

function checkEmail(email){
    const regex = /^[a-zA-Z0-9](?:[a-zA-Z0-9_]*|[a-zA-Z0-9_]*-[a-zA-Z0-9_]+)?@[a-zA-Z0-9]*\\.[a-zA-Z]{2,}$/
}

function checkPassword(password){
    const regex = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/
    const regex2 = /\d+(\.\d+)?/g
    return regex.test(password);
}

console.log(swapWords("Java script"))