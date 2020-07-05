function f1(res){
    console.log('调用 f1');
    return res + 1;
}
function f2(res){
    console.log('调用 f2');
    return res + 2;
}
function f3(res){
    console.log('调用 f3');
    return res + 3;
}
const arr = [f1, f2, f3];
// 从右往左执行（webpack loader选择的方式）输出321
function compose1(arr){
    const res = arr.reduceRight((pre, curr, curIn, arr) => {
        console.log('pre ===> ', pre);
        return curr(pre())
    }, 0);
    console.log('res ===> ', res);
}
// compose1(arr);
const compose = (...fns) => {
    const res = fns.reduceRight(
        (prevFn, nextFn) => {
			return value => {
                return nextFn(prevFn(value))
            }
        }
    );
    return res
};

const arrFn = [
  () => {console.log(1)},
  () => {console.log(2)},
  () => {console.log(3)},
  () => {console.log(4)},
  () => {console.log(5)},
];

compose(...arrFn)();
// 从左往右