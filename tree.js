// TODO:构造二叉树
function Node(data){
    this.left=null;
    this.right=null;
    this.value=data;
}
function createTree(arr){
    let p=null;
    let dat=arr.shift();
    if(dat!==0){
        p=new Node(dat);
        p.left=createTree(arr);
        p.right=createTree(arr);
    };
    return p
}
// 0表示空节点
let arr = [1,2,4,0,0,5,0,0,3,6,0,0,7,0,0];
// let arr = [1,2,4,0,0,0,6,0,0,0,0,0,0];
const root = createTree(arr);
console.log(root);
// const res=[];
// FIXME:非递归遍历
// 前序遍历
// function pre(arr){
//     res.push(arr.shift());
// }
// FIXME:递归遍历
// 后序遍历
// function end(tree){
//     if(tree){
//         end(tree.left);
//         end(tree.right);
//         res.push(tree.data);
//     }
// }
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
// end(tree);

// 非递归
// var preorderTraversal = function(root) {
//     var stack = [];
//     var res = [];

//     var p = root;
//     if(root == null)return [];

//     while(stack.length!=0 || p!=null){
// //Side by side to join the array, and deposited in the stack, the future need to use these root nodes  into the right sub-tree
//         while(p!=null){
//             stack.push(p);
//             res.push(p.val);
//             p = p.left;
//         }
//       //  When p is empty, it means that both the root and the left subtree are traversed, and the right tree goes
//         if(stack.length!=0){
//             p = stack.pop();
//             p = p.right;
//         }


//     }

//     return res;
// };
// console.log(preorderTraversal(tree));
// end(root);

// console.log(res);

// 广度优先遍历 BFS
function levelOrder(tree){
    const queue = [tree];
    const data = [];
    let levelRemain = 1; // because default level = root;
    let currLevel = 1; // current level, default = root[1]
    let NextLevelHas = 0; // next level node's number
    let levelRes = []; // current level result;
    while(queue.length > 0){
      const curr = queue.shift();
      levelRes.push(curr.value);
      levelRemain--;
      if(curr.left){
        NextLevelHas += 1;
        queue.push(curr.left);
      }
      if(curr.right){
        NextLevelHas += 1;
        queue.push(curr.right);
      }
      if(levelRemain <= 0){
        data.push(levelRes);
        levelRes = [];
        currLevel += 1;
        levelRemain = NextLevelHas;
        NextLevelHas = 0;
      }
    }
    console.log(data);
    return data
}

console.log('广度优先遍历');
levelOrder(root); // [ [ 1 ], [ 2, 3 ], [ 4, 5, 6, 7 ] ]
// 深度优先遍历 DFS
function getTree(tree){
    if(!tree) return null;
    const data = [];
    data.push(tree.value);
    if(tree.left){
        data.push(...getTree(tree.left));
    }
    if(tree.right){
        data.push(...getTree(tree.right));
    }
    return data || null;
}
function deepOrder(tree){
    let data = [];
    data.push(tree.value);
    const leftVal = tree.left ? getTree(tree.left) : null;
    const rightVal = tree.right ? getTree(tree.right) : null;
    data = data.concat(leftVal, rightVal);
    console.log(data)
    return data;
}
console.log('深度优先遍历'); 
deepOrder(root); // [ 1, 2, 4, 5, 3, 6, 7 ]

// dom节点的遍历，非二叉树
// https://segmentfault.com/a/1190000018706578