var tree = {
    value: "-",
    left: {
        value: '+',
        left: {
            value: 'a',
        },
        right: {
            value: '*',
            left: {
                value: 'b',
            },
            right: {
                value: 'c',
            }
        }
    },
    right: {
        value: '/',
        left: {
            value: 'd',
        },
        right: {
            value: 'e',
        }
    }
};
const res=[];
// 后序遍历
function end(tree){
    // console.log('---tree start----');
    // console.log(tree);
    // console.log('---tree end----');
    if(tree){
        end(tree.left);
        end(tree.right);
        res.push(tree.value);
    }
    // return 
}
// 先序遍历
// function pre(tree){
//     if(tree){
//         res.push(tree.value);
//         pre(tree.left);
//         pre(tree.right);
//     }
//     // return 
// }
// pre(tree);
// 中序遍历
// function middle(tree){
//     if(tree){
    //         pre(tree.left);
    //         res.push(tree.value);
//         pre(tree.right);
//     }
//     // return 
// }
// pre(tree);
end(tree);
console.log(res);