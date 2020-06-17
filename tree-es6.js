// 普通二叉树
// class Tree{
//     constructor(arr){
//         this.depth = 0;
//         this.data = arr;
//     }
    // createNode(ele){
    //     return {
    //         data: ele,
    //         left: null,
    //         right: null,
    //     }
    // }
//     createTree(){
//         const currVal = this.data.shift();
//         const node = this.createNode(currVal);
//         if(currVal !== 0){
//             node.left = this.createTree();
//             node.right = this.createTree();
//         }
//         return node;
//     }
// }
// 0表示空节点
// let arr = [1,2,4,0,0,5,0,0,3,6,0,0,7,0,0];
// const tree = new Tree(arr);
// const root = createTree(arr);
// console.log(tree.createTree());

// 二分搜索树/二叉查找树  右子树>节点数据>左子树
class TreeSearch{
    constructor(){
        this.tree = {};
        this.root = {};
    }
    createNode(ele){
        return {
            data: ele,
            left: null,
            right: null,
        }
    }
    insert(val){
        if(val === 0) return;
        const node = this.createNode(val);
        let current = this.root;
        while(true){
            let parent = current;
            if(Object.keys(this.tree).length === 0){
                this.tree = node;
                this.root = node;
            }
            if(val > parent.data){
                current = parent.right
                if(!current){
                    parent.right = node;
                    break;
                }
            }else{
                current = parent.left
                if(!current){
                    parent.left = node;
                    break;
                }
            }
        }
    }
    print(){
        // console.log(this.tree);
        return this.tree;
    }
}
const bts = new TreeSearch();
bts.insert(10);
bts.insert(2);
bts.insert(3);
bts.insert(5);
bts.insert(1);
bts.insert(4);
bts.insert(40);
bts.insert(0.5);
bts.print();

// 实现树的遍历
class Traversal{
    constructor(tree){
        this.tree = tree;
        this.result = [];
        this.current = {};
    }
    pre(tree){
        if(tree){
            this.result.push(tree.data);
            this.pre(tree.left);
            this.pre(tree.right);
        }
    }
    middle(tree){
        if(tree){
            this.middle(tree.left);
            this.result.push(tree.data);
            this.middle(tree.right);
        }
    }
    end(tree){
        if(tree){
            this.end(tree.left);
            this.end(tree.right);
            this.result.push(tree.data);
        }
    }
    getPreRes(){
        this.result=[];
        this.pre(this.tree);
        console.log(this.result);
    }
    getMiddleRes(){
        this.result=[];
        this.middle(this.tree);
        console.log(this.result);
    }
    getEndRes(){
        this.result=[];
        this.end(this.tree);
        console.log(this.result);
    }
}
const t = new Traversal(bts.print());
console.log(t.tree);
// t.getPreRes();
t.getEndRes();
t.getMiddleRes();

// console.log(Object.prototype.toString.call(t.tree))