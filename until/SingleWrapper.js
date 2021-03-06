function SingleWrapper(cons) {
    // 排除非函数与箭头函数
    if (!(cons instanceof Function) || !cons.prototype) {
        throw new Error('不是合法的构造函数')
    }
    var instance
    return function() {
        if (!instance) {
            instance = new cons()
        }
        return instance
    }
}
//test stub
function User() {
    this.name = 'aaa'
}
//client
const SingleUser = SingleWrapper(User)
const u1 = new SingleUser()
const u2 = new SingleUser()
console.log(u1 === u2);
