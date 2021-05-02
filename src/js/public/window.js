//获取浏览器中history参数
function getHistoryLength() {
    return window.history.length
}
function varTest(){
    var a = [];
for (var i = 0; i < 10; i++) {
a[i] = function () {
console.log(i);
};
}
}


export {
    getHistoryLength,
    varTest
}