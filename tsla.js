function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const len = S.length;
    const front = S[0];
    let finalNum = (+front === 0 || +front === 1) && len > 1 ? parseInt(S, 2) : +S;
    let result = 0;
    while (finalNum > 0) {
        const even = finalNum & 1 === 0;
        if (even) {
            finalNum /= 2;
        } else {
            finalNum -= 1;
        }
        result += 1;
    }
    return result;
}
solution('1111010101111');
// const big = new Array(400000).fill(1).join('');
// solution('11');
// solution(big);
// solution('111');