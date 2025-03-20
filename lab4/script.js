function findMinLengthOfThreeWords(word1, word2, word3) {
    let word1Length = word1.length
    let word2Length = word2.length
    let word3Length = word3.length

    if (word1Length >= word2Length && word3Length >= word2Length) return word2Length
    else if (word1Length <= word2Length && word1Length <= word3Length) return word1Length
    else if (word3Length <= word2Length && word3Length <= word1Length) return word3Length
}

function filterOddElements(array) {
    return array.filter(num => num % 2 === 1)
}

function getLengthOfShortestElement(arr) {
    return Math.min(...arr.map(word => word.length))
}

function joinArrayOfArrays(arr) {
    return arr.flat()
}

function findSmallestNumberAmongMixedElements(arr) {
    arr = arr.filter(num => typeof num === 'number')
    if (arr.length <= 1) return 0
    else return  Math.min(...arr)
}

function computeSummationToN(n) {
    let result = 0
    for (let i = 1; i <= n; i++) {
        result += i
    }
    return result
}

function convertScoreToGrade(grade) {
    if (grade < 0 || grade > 100) return 'INVALID SCORE'
    else if (grade <= 34) return 'F'
    else if (grade <= 59) return 'Fx'
    else if (grade <= 68) return 'E'
    else if (grade <= 74) return 'D'
    else if (grade <= 81) return 'C'
    else if (grade <= 89) return 'B'
    else return 'A'
}

function getLongestOfThreeWords(word1, word2, word3) {
    let word1Length = word1.length
    let word2Length = word2.length
    let word3Length = word3.length

    if (word1Length > word2Length && word1Length > word3Length) return word1
    if (word2Length > word1Length && word2Length > word3Length) return word2
    if (word3Length > word1Length && word3Length > word2Length) return word3
    if (word1Length === word2Length || word1Length === word3Length) return word1
    if (word2Length === word1Length || word2Length === word3Length) return word2
}

function multiply(num1, num2) {
    let result = 0
    for (let i = 0; i < num2; i++){
        result += num1
    }
    return result
}

function computeSumBetween(num1, num2) {
    if(num1 > num2) return 0
    let result = 0
    for (let i = num1; i < num2; i++){
        result += i
    }
    return result
}