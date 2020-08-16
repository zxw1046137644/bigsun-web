function fn(){
    this.num = 10;
    this.age = 210;
}
function fn1(){
    this.num = 23;
    this.sex = '男';

}
fn()
var ffn = new fn();
console.log(ffn.age)


this.num = 22;
console.log(this);
console.log(this.num);
console.log(global.num);
console.log(global.sex);
console.log(global.age);


