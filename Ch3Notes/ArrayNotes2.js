//1
function printFirst(arr){
    console.log(arr[0])
}

printFirst([3,12,7,14]);
printFirst(['a', 'b', 'c'])

//2
function printLast(arr){
    let lastIndex = arr.length-1
    console.log(arr[lastIndex]);
}

printLast([3,12,7,14]);
printLast([3,12,7,14]);

//3
function upgradedPrintFirst(arr){
    let arrayLength = arr.length;
    if (arrayLength == 0){
        console.log('Empty array')
    } else{
        console.log(arr[0])
    }
}

upgradedPrintFirst([3,12,7,14]);
upgradedPrintFirst(['a', 'b', 'c'])
upgradedPrintFirst([])

function upgradedPrintLast(arr){
    let arrayLength = arr.length;
    if (arrayLength == 0){
        console.log('Empty array')
    } else{
        let lastIndex = arr.length-1
        console.log(arr[lastIndex]);
    }
}

upgradedPrintLast([3,12,7,14]);
upgradedPrintLast(['a', 'b', 'c'])
upgradedPrintLast([])

//4
function reverseArray(arr){
    let lastIndex = arr.length-1;
    for (let i=lastIndex; i>=0; i--){
        console.log(arr[i])
    }
}
reverseArray([20, 10, 5, 1]);
reverseArray(['a', 'b', 'c', 'd', 'e'])
//5
function everyThird(arr){
    for (let i = 2; i<arr.length; i=i+3){
        console.log(arr[i])
    }
}

everyThird([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130]);

//6
function everySecond(arr){