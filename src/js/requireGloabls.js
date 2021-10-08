//获取浏览器中history参数
function getHistoryLength() {
    return window.history.length
}
var a=1;
const b=2;
function varTest(){
    var a = [];
for (var i = 0; i < 10; i++) {
a[i] = function () {
console.log(i);
};
}
}
module.exports = {
    getHistoryLength,
    a,
    b,
    varTest
}