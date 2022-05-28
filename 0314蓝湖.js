const CHAR_MAP = {
    '{': 1,
    '}': -1,
    '[': 2,
    ']': -2,
    '(': 3,
    ')': -3,
}
const checkChar = str => {
    const len = str.length;
    let i = 0;
    let result = false;
    while (i < len) {
        const curr = str[i];
        const next = str[i+1];
        if (
            next && CHAR_MAP[curr] !== CHAR_MAP[next]
            && (CHAR_MAP[curr] >= 0 && CHAR_MAP[next] <=0)
            && Math.abs(CHAR_MAP[curr]) === Math.abs(CHAR_MAP[next])
        ) {
            result = true;
            i += 2;
        } else {
            result = false;
            return false;
        }
    }
    return result;
}
const res = checkChar("()")
console.log(res)