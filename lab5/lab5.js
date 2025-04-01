function computeAreaOfARectangle(width, height) {
    return width * height;
}

function computeAreaOfCircle(length) {
    return length * length * 3.141592652;
}

function computePower(number1, number2) {
    return Math.pow(number1, number2);
}

function computeSquareRoot(number) {
    return Math.sqrt(number)
}

function getLengthOfThreeWords(word1, word2, word3) {
    return word1.length + word2.length + word3.length
}

function joinsArrays(arr1, arr2) {
    return arr1.concat(arr2)
}

function getProductOfAllElementsAtProperty(obj, key) {
    if (!Array.isArray(obj[key]) || obj[key].length === 0) {
        return 0;
    }
    return obj[key].reduce((product, num) => product * num, 1);
}

function sumDigits(number) {
    let numStr = number.toString();
    let sum = 0;
    let isNegative = false;

    for (let i = 0; i < numStr.length; i++) {
        let char = numStr[i];

        if (i === 0 && char === '-') {
            isNegative = true;
            continue;
        }

        let digit = parseInt(char, 10);
        if (isNegative && i === 1) {
            sum -= digit;
        } else {
            sum += digit;
        }
    }
    return sum;
}

function findShortestWordAmongMixedElements(arr) {
    arr = arr.filter(word => typeof word === 'string')
    if (arr.length === 0) {
        return ""
    } else {
        let shortestWord = arr[0]
        arr.forEach(word => {
            if (word.length < shortestWord.length) {
                shortestWord = word
            }
        })
        return shortestWord
    }
}

function findSmallestNumberAmongMixedElements(arr) {
    arr = arr.filter(num => typeof num === 'number')
    if (arr.length <= 1) return 0
    else return Math.min(...arr)
}

function modulo(divide, divider) {
    let num = Math.trunc(divide);
    let div = Math.trunc(divider);

    const resultSign = Math.sign(num);

    let absNum = Math.abs(num);
    const absDiv = Math.abs(div);

    while (absNum >= absDiv) {
        absNum -= absDiv;
    }
    let remainder = absNum;

    if (resultSign < 0 && remainder !== 0) {
        return -remainder;
    } else {
        return remainder;
    }
}

function flipEveryNChars(sentence, number) {
    let result = '';
    for (let i = 0; i < sentence.length; i += number) {
        const chunk = sentence.substring(i, i + number);

        const reversedChunk = chunk.split('').reverse().join('');
        result += reversedChunk;
    }
    return result;
}

function detectOutlierValue(array) {
    let arrayEvens = array.filter(n => n % 2 === 0)
    let arrayOdds = array.filter(n => n % 2 !== 0)

   return arrayOdds.length > arrayEvens.length ? console.log(arrayEvens[0] + " is even between odd")
        : console.log(arrayOdds[0] + " is odd between even")
}

function findPairForSum(array, number) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === number) return {first: array[i], second: array[j]}
        }
    }
    return null
}

function areRotations(str1, str2) {
    if (str1.length !== str2.length) return false;

    return (str1 + str1).includes(str2);
}

function binarySearch(array, numberToFind) {
    let highPoint = array.length - 1;
    let lowPoint = 0;
    while (lowPoint < highPoint) {
        let pivot = Math.floor((highPoint + lowPoint) / 2);
        if (array[pivot] === numberToFind) return pivot
        else if (array[pivot] > numberToFind) highPoint = pivot - 1
        else lowPoint = pivot + 1
    }
    return null
}

function isogramaCheck(word) {
    let set = new Set()
    for (let i = 0; i < word.length; i++) {
        if (!set.has(word[i])) {
            set.add(word[i])
        } else return false;
    }
    return true;
}

function palindromCheck(sentence) {
    return sentence
        .toLowerCase()
        .match(/\b\w+\b/g)
        .filter(word => word === word.split('').reverse().join(''));
}

console.log(computeAreaOfARectangle(4,8))
console.log(computeAreaOfCircle(4))
console.log(computePower(2,3))
console.log(computeSquareRoot(9))
console.log(getLengthOfThreeWords('some', 'other', 'words'))
console.log(joinsArrays([1,2], [3,4]))
var obj = {
    key: [1,2,3,4]
};
console.log(getProductOfAllElementsAtProperty(obj, 'key'))
console.log(sumDigits(-316))
console.log(findShortestWordAmongMixedElements([4, 'two', 2, "three"]))
console.log(findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']))
console.log(modulo(25,4))
console.log(flipEveryNChars('a short example', 5))
console.log(detectOutlierValue([1, 10, 1, 1]))
console.log(findPairForSum([3,34,4,12,5,2], 9))
console.log(binarySearch([1,2,3,4], 2))
console.log(isogramaCheck('Ukraine'))
console.log(palindromCheck("What a beautifully evening, madam"))

