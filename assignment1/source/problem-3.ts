function countWordOccurrences(sentence: string, word: string): number {
    let lowersentence: string = sentence.toLowerCase();
    let lowerWord: string = word.toLowerCase()

    let words: string[] = lowersentence.split(" ");
    let count = 0;

    for (const word of words) {
        if (word === lowerWord) {
            count = count + 1
        }
    }
    return count;
}

console.log(countWordOccurrences("i love you you a lot I love You", "yOu"))