// Array.prototype.join = function (sym = ',') {
//     return this.reduce((pre, cur, curIdx, arr) => `${pre}${cur}${curIdx < arr.length - 1 ? sym : ''}`, '');
// };
// const arr = [1];
// const str = arr.join(':');
// console.log(str);

function monkey(name) {
    let sleepFlag = false;
    let sleepTime = 0;
    const getName = () => {
        console.log(name);
        return this;
    }
    const settime = time => {
        sleepTime = time * 1000;
    }
    this.eat = food => {
        const tt = sleepTime * 1000;
        console.log(tt);
        if (sleepFlag) {
            setTimeout(() => {
                console.log(food);
            }, tt);
            sleepFlag = false;
        } else {
            console.log(food);
        }
        return this;
    }
    this.sleep = time => {
        if (!sleepFlag) {
            sleepFlag = true;
        }
        sleepTime = sleepTime + time;
        return this;
    }
    return getName();
}
monkey('lorry').eat('apple').sleep(4).eat('banana').sleep(7).eat('orange');