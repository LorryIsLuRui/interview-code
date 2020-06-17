// this指向题目
// https://www.nowcoder.com/discuss/405514
var name = '123';
 
var obj = {
    name: '456',
    getName: function () {
        function printName() {
            console.log(this.name)    ;
        }
 
        printName();
    }
}
 
obj.getName();