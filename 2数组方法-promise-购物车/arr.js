//es5
let arr2 = [1, 2, 3, 4]
//filter 筛选掉不符合的，返回符合条件的新数组
let res3 = arr2.filter((item, ind) => {
    return item < 4
})
console.log('filter--' + res3)

//some  只要有一个条件成立，则返回true，条件都不成立 返回false
let res4 = arr2.some((item, ind) => {
    return item > 7
})
console.log('some--' + res4)

//every  条件都成立，则返回true，条件只要有一个不成立 返回false
let res5 = arr2.every((item, ind) => {
    console.log(item, ind);
    return item > 0
});
console.log(res5);

// reduce 计算数组每一项的累积值
// prev累积项,代表上一次return的值，如果，next当前项
let res6 = arr2.reduce((prev, next) => {
    return prev + next   //prev和next可进行加减乘除等各种运算
});
console.log('reduce----' + res6);

let prodArr = [{price: 10, count: 2}, {price: 12, count: 1}]  //计算商品总价
//若prev设置了默认值，则next从第一项开始
let money = prodArr.reduce((prev, next) => {
    return prev + next.price * next.count
}, 0); //此处的0  是设置的prev的默认值
console.log('money----' + money);
// reduce


// es6  find,findIndex,for...of...
let arr = [11, 22, 33, 44]
for (let val of arr) {  //遍历数组
    console.log(val)
}
for (let key of arr.keys()) {   //获取索引
    console.log('arr.keys()'+key)
}
for (let key of arr.entries()) {   //获取索引和值
    console.log(key)
}


//find  返回找到的这一项
let res = arr.find((item, ind) => {

    return item > 35
})
console.log(res)
