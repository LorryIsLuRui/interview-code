// js实现堆栈链表
// 栈  后进先出 
    // 添加 push
    // pop
    // 栈顶元素是最后一个元素
// 队列 先进先出
    // 添加 push
    // shift
    // 队首是第一个元素
    // 单链队列出队时 O(n) 的时间复杂度
    // 循环队列的出队操作平均是 O(1) 的时间复杂度。
// 链表 存储有序的元素集合，链表中的元素不是连续放置的，
        // 每个元素由存储元素本身的节点和一个指向下一个元素的引用（指针）构成
class Stack{
    constructor(){
        this.stack = [];
    }
    add(p){
        this.stack.push(p)
    }
    delete(p){
        this.stack.pop(p)
    }
    size(){
        return this.stack.length;
    }
    peek(){
        return this.stack(this.stack.length-1);
    }
    print(){
        this.stack.toString();
    }
}
// const stack = new Stack();
// stack.add(1)
// stack.add(2)
// console.log(stack.size());
// 队列同堆栈
// 优先队列
class PriorityQueue{
    constructor(){
        this.queue = [];

    }
    createQueueElement(ele, priority){
        return {
            ele,
            priority,
        }
    }
    enterQueue(ele, priority){
        const item = this.createQueueElement(ele, priority);
        if(this.queue.length === 0){
            this.queue.push(item);
        }else{
            if(item.priority < this.queue[0].priority){
                this.queue.unshift(item);
            }else{
                this.queue.push(item);
            }
        }
    }
    print(){
        return this.queue;
    }
}
const pq = new PriorityQueue();
// pq.enterQueue('aa',2);
// pq.enterQueue('aba',4);
// pq.enterQueue('jjjj',8);
// pq.enterQueue('aaaaaaa',8);
// pq.enterQueue('aa',-1);
// pq.enterQueue('555', 5);
// pq.enterQueue('444', 4);
// pq.enterQueue('111', 1);
// console.log(pq.print());
// 链表
    // append 链表尾部插入
    // appendAt 指定位置插入
class LinkList{
    constructor(){
        this.list = [];
        this.head = null;
        this.preNode = null;
        this.length = 0;
    }
    createNode(ele){
        return {
            ele,
            next: null,
        }
    }
    append(ele){
        const item = this.createNode(ele);
        // console.log('this.list ===> ', this.list);
        // console.log('this.preNode ===> ', this.preNode);
        // console.log('this.length ===> ', this.length);
        if(this.length === 0){
            this.list.push(item);
        }else{
            this.list.push(item);
            this.list[this.length-1].next = item;
            // this.preNode.next = item;
        }
        this.preNode = item;
        this.head = item;
        this.length++;
    }
    appendAt(ele, index){
        const item = this.createNode(ele);
        if(index >= this.length){
            this.list[this.length-2].next = item;
            this.list.push(item);
            this.length++;
            this.head = item;
            this.preNode = item;
        }else{
            if(index <= 0){
                item.next = this.list[0];
                this.list.unshift(item);
            }else{
                this.list[index - 2].next = item;
                item.next = this.list[index - 1];
                this.list.splice(index - 1, 0, item);
            }
            this.preNode = item;
            this.head = item;
            this.length++;
        }
    }
    print(){
        return this.list;
    }
}
var  linkList=new LinkList();
linkList.append('lorry1');
linkList.append('lorry2');
linkList.append('lorry3');
linkList.appendAt('lorry4',0);

linkList.appendAt('lorry5',0);
linkList.appendAt('lorry6',2);
console.log(linkList.length)
console.log(linkList.print())
console.log(linkList.head.next)
