# Clone函数
实现对js中的所有类型(NULL,undefiend,String,Number,B00lean,Array,Onject)数据的拷贝clone函数.  

看到这个一开始我想的是可以直接返回一个数据.  
```js
    var obj = {
        name:'jack',
        friends:['lily','bob'],
        jisu:{
            react:'yes',
            vue:'yes'
        }
    }
    var str = 'hello',num=22,bool=true;

    function clone(param) {
        return param;
    }
    var newStr = clone(str);
    var newNum  = clone(num);
    var newObj = clone(obj)

    str = 'world';
    num = 33;
    obj.name = 'rose';
    console.log(newStr)  //仍然返回hello
    console.log(newNum)  //仍然返回22
    console.log(newObj)  //返回值发生了变化,name=rose
```     

这样是不行的,因为是object是引用类型,newObj是obj的一个引用,其实数据还是同一份,所以这样不行.    

数据类型的浅拷贝  
```js
    function lightClone (param) {
        if(Object.prototype.toString.call(param) === "[object Array]") {
            return param.slice();   // slice()数组拷贝将返回一个新数组
        }else if(Object.prototype.toString.call(param) === "[object Object]") {
            var o = {}
            for(var key in param) {
                if(param.hasOwnProperty(key) === true) { //使用 for in 循环遍历对象的属性时，原型链上的所有属性都将被访问：
                    o.key = param[key]
                }
            }
            return o;
        } else {
            return param;
        }
    }
    var newObj1 = lightClone(obj);
    obj.name = 'wesday'
    str = 'new  world'
    
    var newStr1 = lightClone(str)
    console.log('浅拷贝')
    console.log(newObj1)  // 返回obj
    console.log(newStr1)   // new  world
```




### 参考链接  
[for/in 循环遍历对象的属性](https://blog.csdn.net/qi1271199790/article/details/53696933)


