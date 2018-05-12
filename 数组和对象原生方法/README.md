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

2. push()和pop()   
push方法和pop方法, 可以使数组的行为类似于栈, 先进后出, 并且推入和弹出操作只发生在一端.   
 
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

    