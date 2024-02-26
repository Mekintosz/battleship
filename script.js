// function sumTo(n) {
//     let result = 0
//     for(i = 0; i <= n; i++) {
//         result += i
//     }
//     return result
// }

// console.log(sumTo(5))
// console.log(sumTo(100))

// function recursiveSumTo(n) {
//     let sum = 0
//     if (n === 1) {
//         return n
//     } else {
//         sum = n + recursiveSumTo(n-1)
//         return sum
//     }
// }

// console.log(recursiveSumTo(5))
// console.log(recursiveSumTo(1000))
// console.log(recursiveSumTo(1))

// function arithmeticSumTo(n) {
//     let sum = n * (1 + n) / 2
//     return sum
// }

// console.log(arithmeticSumTo(5))
// console.log(arithmeticSumTo(100))
// console.log(arithmeticSumTo(1))

// function factorial(n) {
//     if (n == 1) return n
//     return n * factorial(n -1)
// }

// alert(factorial(5))

// var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
// console.log(seven);

// function totalIntegers(array){
// 	if(array.length === 0) return 0;

// 	let total = 0;
// 	let first = array.shift();

// 	if (Array.isArray(first)){
// 		total += totalIntegers(first); 
// 	} else if (Number.isInteger(first)) {
// 		total += 1;
// 	}

// 	return total + totalIntegers(array);
// }

// function fibs(num) {
//     let arr = [0, 1]
//     for (let i = 2; i < num; i++) {
//         arr.push(arr[i - 1] + arr[i - 2])
//     }
//     return arr
// }

// console.log(fibs(8))

// let arr =[0, 1]
// function fibsRec(num) {
//    if (arr.length === (num)) return
//    arr.push(arr[arr.length-1] + arr[arr.length -2])
//    fibsRec(num)
//    return arr  
// }

// console.log(fibsRec(8))

/
