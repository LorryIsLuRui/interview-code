// TODO:构造二叉树
function Node(data){
    this.left=null;
    this.right=null;
    this.data=data;
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
// let arr = [1,2,4,0,0,5,0,0,3,6,0,0,7,0,0];
let arr = [1,2,4,0,0,0,6,0,0,0,0,0,0];
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