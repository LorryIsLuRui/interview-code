const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let n = -1;// n行
let ans = 0; // 和
let cur_line = 0;
let squ = [];
let column = 0;
const checkRight = (squ=[], lineNum=0, n=0,firstIdx=0, lastIdx=0, bian=0) => {
    let checkRow = lineNum;
    let res = true;
    while (checkRow < n) {
        const data = squ[checkRow] || '';
        const str = data.substring(firstIdx, lastIdx).indexOf(0);
        res = str < 0;
        if (checkRow + 1 === bian) {
            return res;
        } else {
            checkRow += 1;
        }
    }
    return res;
};
rl.on('line', function (line) {
    //     const tokens = line.split(' ');
    //     console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
    if (cur_line === 0) { // 测试用例第一行读取n
        n = parseInt(line.trim());
    } else {
        // 矩阵数据读取
        var tokens = line.split(' ');
            squ.push(line);
       

//         for (var i = 0; i < tokens.length; ++i) {
//             // 题目逻辑求和，边读取边计算
//             // ans += parseInt(tokens[i]);
//             if (!squ[cur_line]) {
//                 squ[cur_line] = [];
//             }
//         }

    }
    // 记录当前读取的行数
    cur_line += 1;
    if (n === cur_line-1) { // input end
        // 输出结果
        //console.log(squ[0])
        if (n===1) {
            ans = squ[0].toString().indexOf(1) > -1 ? 1 : 0
        }
        if (column === 1) {
            ans = squ.split('').indexOf(1) > -1 ? 1 : 0
        }
        if (n > 1 && column > 1) {
            for (let i = 0; i < squ.length; i++) {
            const lineStr = squ[i];
            const firstIdx = lineStr.indexOf(1);
            const lastIdx = lineStr.lastIndexOf(1);
            if (firstIdx < lastIdx) {
                const len = lastIdx - firstIdx;
                let bian = len + 1;
                let res = checkRight(squ, i + 1, n, firstIdx, lastIdx, bian);
                if (res && (len <= squ.length-i)) {
                    ans = Math.max(ans, bian * 2);
                }
            }
        }
        }
        
        console.log(ans);
    }
});

a='a';
b=String.fromCharCode(a);