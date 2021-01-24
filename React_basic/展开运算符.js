//展开合并数组
const arr1 = [1,3,5];
const arr2 = [2,4,6];
console.log(...arr1);
console.log([...arr1,...arr2]);

//构造字面量对象
const obj1 = {name:'Alice',age:'45',sex:'男'};
const obj2 = {...obj1};
console.log(obj1.name);
obj2.name = 'Smith';
console.log(obj1);
console.log(obj2);
// console.log(...obj2); TypeError: Found non-callable @@iterator

//函数中使用
function sum(...value){
    return value.reduce((preValue,currentValue)=>{
        return preValue + currentValue;
    })
}
console.log(sum(1,2,3,4));

//合并对象时候使用
let obj3 = {...obj1,sex:'女',phone:'14512214455'};
console.log(obj3);