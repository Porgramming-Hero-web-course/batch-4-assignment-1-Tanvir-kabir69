function sumArray(numbers: number[]): number {
    let sum: number = 0;
    for (let i: number = 0; i < numbers.length; i++) {
        sum = sum + numbers[i]
    }

    return sum;
}

// let a : number[] = [1,2,3,4,5,6,7]

// console.log(sumArray(a))