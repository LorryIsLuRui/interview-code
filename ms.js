// 1.
// const tree = root => {
//     let node = root;
//     const res = [];
//     const q = [];
//     while (node || q.length) {
//         while (node) {
//             q.push(node.left);
//             node = node.left;
//         }
//         const cur = q.pop();
//         if (cur.right) {
//             q.push(cur.right);
//         }
//         res.push(cur.val);
//     }
//     return res;
// }

const tree = root => {
    const res = [];
    const fn = head => {
        if (!head) return [];
        fn(head.left);
        fn(head.right);
        res.push(head.val);
    }
    fn(root);
    return res;
}

const parse = str => {
    if (!str) return false;
    let res = '';
    let left = 0;
    let sym = '';
    while (left >= 0) {
        const stri = str.slice(left, left + 1);
        if (stri === '-') {
            left += 1;
            sym = stri;
            continue;
        }
        if (Math.abs(parseInt(stri)) >= 0) {
            res += stri;
            left += 1;
        } else {
            if (res) return `${sym}${res}`;
            else return false;
        }
    }
}
const strings = '3a333';
const result = parse(strings);
console.log(result);