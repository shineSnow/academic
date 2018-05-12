# 数组的原生方法

    join(),push()和pop(),shift()和unshift(),sort(),reverse(),concat(),slice(),splice()  
    es5新增:indexOf()和lastIndexOf(),forEach(),map(),filter(),every(),some(),reduce()和reduceRight()  
1.join()  
join(separator): 将数组的元素组起一个字符串，以separator为分隔符，省略的话则用默认用逗号为分隔符，该方法只接收一个参数：即分隔符。  
```$xslt
var arr = [1,2,3];
arr.join()  //1,2,3
arr.join('-');  // 1-2-3
```  
通过join()方法可以实现重复字符串，只需传入字符串以及重复的次数，就能返回重复后的字符串，函数如下：
```$xslt
function repeatStr(str,n) {
    return new Array(n+1).join(str);
}
repeatStr("abc",3)   // abcabcabc
```

2. push()和pop()。push方法和pop方法, 可以使数组的行为类似于栈, 先进后出, 并且推入和弹出操作只发生在一端.   
 
push()方法，可以接受一个或者多个参数，把他们加载在数组的末尾，并返回修改后的数组长度。
```$xslt
var arr = ['a', 'b', 'c', 'd', 'e'];
var temp = arr.push('f');
console.info('temp: ' + temp); // temp: 6
console.info(arr); // ["a", "b", "c", "d", "e", "f"]
```
Array.prototype.push.apply()合并两个数组
```$xslt
var arr1 = ['a', 'b', 'c'],
  arr2 = ['x', 'y', 'z'];
var temp = Array.prototype.push.apply(arr1, arr2);
console.info(arr1); // ["a", "b", "c", "x", "y", "z"]
console.info(arr2); // ["x", "y", "z"]
console.info(temp); // 6
```
其实是apply()转换了this对象，并且带参数传过去。  
pop()方法 将数组最后一项删除，数组长度-1，并且返回删除的项。
```$xslt
var arr = ['a', 'b', 'c', 'd', 'e'];
var temp = arr.pop();
console.info('temp: ' + temp); // temp: e
console.info('length: ' + arr.length); // length: 4
```
__3.shiift()和unshift().__  
队列的访问规则是先进先出, 并且队尾添加项, 队头移除项. push方法和shift方法结合使用, 就可以像操作队列一样操作数组.  
__shift()方法__  
shift()方法将删除数组的第一项，将数组长度-1，并且返回删除的项。
```$xslt
var arr = ['a', 'b', 'c', 'd', 'e'];
var temp = arr.shift();
console.info('temp: ' + temp); // temp: a
console.info('length: ' + arr.length); // length: 4
```
__unshift()方法__
unshift()方法可以接受一个或者多个参数，把他们依次添加到数组前端，并返回改变后的数组长度。
```$xslt
var arr = ['a', 'b', 'c', 'd', 'e'];
var temp = arr.unshift('x', 'y', 'z');
console.info('temp: ' + temp); // temp: 8
console.info(arr); // ["x", "y", "z", "a", "b", "c", "d", "e"]
```
**重新排序**  
reverse()和sort()方法  
其中reverse()是用来翻转数组的，
```$xslt
var arr = [1, 3, 2, 5, 4];
arr.reverse();
console.info(arr); // [4, 5, 2, 3, 1]  
```
关于sort方法, 默认情况下, 它是对数组的每一项进行升序排列, 即最小的值在前面. 但sort方法会调用toString方法将每一项转成字符串进行比较(字符串通过Unicode位点进行排序), 那么这种比较方案在多数情况下并不是最佳方案. 例如:
```$xslt

var arr = [1, 3, 2, 5, 4];
arr.sort();
console.info(arr); // [1, 2, 3, 4, 5]

arr = [1, 5, 10, 20, 25, 30];
arr.sort();
console.info(arr); // [1, 10, 20, 25, 30, 5]
```  
因此, sort方法可以接收一个比较函数作为参数, 由我们来决定排序的规则. 比较函数接收两个参数, 如果第一个参数小于第二个参数(即第一个参数应在第二个参数之前)则返回一个负数, 如果两个参数相等则返回0, 如果第一个参数大于第二个参数则返回一个正数, 例如:  
```$xslt
var arr = [1, 5, 10, 20, 25, 30];
arr.sort(function(value1, value2){
  if(value1 < value2) {
    return -1;
  } else if(value1 > value2) {
    return 1;
  } else {
    return 0;
  }
});
console.info(arr); // [1, 5, 10, 20, 25, 30]
```  
**操作方法**   

**concat()**  
concat方法可以将多个数组合并成一个新的数组. concat可以接收的参数可以是数组, 也可以是非数组值.  
> var arr1 = ['a', 'b', 'c'],
    arr2 = ['x', 'y', 'z'],
    val = 'hello';
  var temp = arr1.concat(val, arr2);
  console.info('arr1: ' + arr1); // arr1: a,b,c
  console.info('arr2: ' + arr2); // arr2: x,y,z
  console.info('val: ' + val); // val: hello
  console.info('temp: ' + temp); // temp: a,b,c,hello,x,y,z

