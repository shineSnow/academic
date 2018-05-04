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
    