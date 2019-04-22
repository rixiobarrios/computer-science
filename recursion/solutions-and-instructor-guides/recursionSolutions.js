// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr, index=1, max){
    // if there's no max yet, set it to the first element
    if(!max & arr.length){
        max = arr[0];
    }
    // the base case is when all indices have been searched
    if(index == arr.length){
        return max;
    }else{
        if(arr[index] >  max){
            max = arr[index]
        }
        return findMax(arr, index+1, max);
    }
}

function factorial(num){
    if(num == 1){
        return 1;
    }else{
        return  num * factorial(num - 1);
    }
}

function fibonacci(num){
    if(num == 1 || num == 2){ 
        return 1;
    }
    return fibonacci(num-1) + fibonacci(num-2);
}

function coinFlips(num){
    const results = [];
    function rCoinFlips(stem=""){
        if(stem.length ===  num){
            results.push(stem);
        }else{
            rCoinFlips(stem+"H");
            rCoinFlips(stem+"T");
        }
    }
    rCoinFlips();
    return results;
}

function letterCombinations(arr){
    const results = [];
    function rLetterCombinations(stem, remainder){
        if(stem.length === arr.length){
            results.push(stem);
            return;
        }
        if(stem.length > 0){
            results.push(stem);
        }
        for(let i = 0; i < remainder.length; i++){
            const newRemainder  = remainder.slice(0,i).concat(remainder.slice(i+1));
            rLetterCombinations(stem+remainder[i], newRemainder)
        }
    };
    rLetterCombinations("", arr);
    return results;
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}