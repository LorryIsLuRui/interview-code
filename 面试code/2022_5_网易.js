const getArr = root => {
    const res = [];
    let node = root;
    const col = [node];

    while (node && col.length) {
        const levelVal = []
        while (col.length) {
            const node = col.unshift();
            if (node.val) {
                levelVal.push(node.val);
            }
        }
        res.push(levelVal);
        if (node?.left) {
            col.push(node.left);
        }
        if (node?.right) {
            col.push(node.right);
        }
        node = node?.left;
    }
    return res;
};

Function.prototype.bind = function() {
    const args = Array.from(arguments);
    const [context, ...outerArgs] = args;
    const that = this;
    return function () {
        const innerArgs = [...Array.from(arguments), ...outerArgs];
        return that.apply(context, innerArgs);
    }
}