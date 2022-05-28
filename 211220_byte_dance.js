class Student {
    constructor() {
        this.name = 'jarry';
    }
    getInfo() {
        console.log(this);
        return {
            name: 'jack',
            getName() {
                console.log(this.name);
            }
        }
    }
}
const stu = new Student();
stu.getInfo().getName();