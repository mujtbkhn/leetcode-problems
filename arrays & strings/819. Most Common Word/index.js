


function mostCommonWord(paragraph, banned) {
    paragraph = paragraph.toLowerCase().replace(/[^\w\s]/g, ' ');

    let words = paragraph.split(/\s+/)

    console.log(words)
    let wordMap = new Map()

    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        if (banned.includes(word) || word === "") {
            continue;
        }
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1)
        } else {
            wordMap.set(word, 1)
        }
    }

    let maxCount = 0;
    let mostCommon = "";
    for (let [word, count] of wordMap) {
        if (count > maxCount) {
            maxCount = count
            mostCommon = word
        }
    }
    console.log(mostCommon)
    return mostCommon
}
let paragraph1 = "Bob hit a ball, the hit BALL flew far after it was hit.";
mostCommonWord(paragraph1, "hit")