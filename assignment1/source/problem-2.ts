function removeDuplicates(numbers: number[]): number[] {
    let length: number = numbers.length;
    let newArray: number[] = [];
    let newIndex: number = 0;

    for (let i: number = 0; i < length; i++) {
        let currentNumber = numbers[i];
        let isDuplicate = false;

        for (let j: number = 0; j < newIndex; j++) {
            if (newArray[j] === currentNumber) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            newArray[newIndex] = currentNumber;
            // numbers[newIndex] = currentNumber;
            newIndex++;
        }

        // numbers.length = newIndex;
    }
    return newArray;
    // return numbers;
}

// let a : number[] = [1,2,3,3,2,4,4,1,5,5,3,10,4,1,1,6,6,5]

// console.log(removeDuplicates(a))