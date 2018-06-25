# js的继承  
继承真的是js体系中很重要的一部分,有一个相对的体系.牵涉的内容比较,刚开始从书上看到继承的时候,也是似懂非懂,根本记不住,
工作很久后,在回头看书,突然就没明白了很多,对了我是倒着看的,按着顺序看我总是想睡着,可能是带着问题吧.首要还是面向对象编程的思维,
其三个主要的特征是封装,继承,多态性.如果没有记错的话.所以,我们要知道js继承的最终目的是我们要学会面向对象编程.  

##理解对象  
这个可以看之前的文章[数组和对象的原生方法](https://github.com/shineSnow/academic/blob/master/%E6%95%B0%E7%BB%84%E5%92%8C%E5%AF%B9%E8%B1%A1%E5%8E%9F%E7%94%9F%E6%96%B9%E6%B3%95/%E5%AF%B9%E8%B1%A1.md)可以理解对象的本质.记下来就是要学会创建对象,然后在实现一个对象继承另一个对象的方法和属性,let us go.

## 创建对象   

- 创建一个Object实例，然后为它添加属性和方法，如下：  
```js
var person = new Object();
    person.name = "jack";
    person.age = 20;
    person.job = "FEDR";
    person.sayName = function() {
      alert(this.name);
    }
```       

- 上面例子为person添加了是哪个属性和一个sayName方法，this.name = person.name,这是早起的模式，后来又出现了对象字面量创建对象的方法，所以也可以写写成这样：  
```js
var person = {
    name:'jack',
    age:20,
    job:'FEDR',
    sayName:function() {
      alert(this.name)
    }
}
```  
这个例子使用对象字面量发方法创建了一个和上面一模一样的对象。
虽然Object构造函数或者对象字面量的方法都可以用来创建单个对象，但是这些方法有个明显的缺点：使用同一个接口创建很多对象，会产生大量的重复代码。为了解决这个方法，人们开始使用工厂模式的一种变体。   

#### 一，工厂模式    
代码如下，以下：  
```js
function createPerson(name,age,job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
      alert(this.name)
    }
    return o;
    
}
var person1 = createPerson('gg',22,'dj');
var person2 = createPerson('mm',18,'student');
```
创建方式：首先在函数内部用new Obejcet()创建一个空对象，然后在这个对象上创建对应函数参数的属性，最后返回这个对象。  

调用方式：直接调用函数并赋值给一个变量.  

优点：工厂模式解决了创建多个相似对象的的问题。  

缺点：没有解决对象的识别的问题。   

#### 二，构造函数  
针对工厂模式的不足，于是提了构造函数创建对象的方式：
```js
function Person(name,age,job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName =function() {
    alert(this.name)
  }
}

var person1 = new Person('jack',18,'soho');
var person2 = new Person('lily',23,'cooker');
```   
创建方式：函数名首字母使用了大写P而不是小写，按照惯例，构造函数始终都应该以一个大写字母开头，而非构造函数则应该以一个小写字母开头，这个做法借鉴了其他oo语言的，主要是为了区别其他函数。  

调用方式：使用new操作符创建了一个Person实例，以上这种方式会经过一些四个步骤：  

1，创建了一个新的对象；  
2，将构造函数的作用于赋给新的对象（因此this也就指向了这个新的对象）；  
3，执行构造函数的代码（为这个新对象添加属性）；  
4，返回新对象。  

优点：可以很容易的确定实例和构造函数之间的关系；  
 ```js
alert(person1.constructor === Person);  //true
alert(person2.constructor === Person);  //true
```   
constructor最初是用来标识对象类型的。   

提到类型检测还是instanceof操作符更可靠一点。在这个例子中创建的所有对象既是Object的实例，同时也是Person的实例。这一点通多instanceof可以得到确定：  
```js
alert(person1 instanceof Object);  //true
alert(person2 instanceof Object);  //true
alert(person1 instanceof Person);  //true
alert(person2 instanceof Person);  //true
```

缺点：构造函数的主要问题就是每个方法都要在实例上重新创建一遍，比较浪费内存。虽然可以把构造函数的方法单独抽出来变为全局函数，实现共用，但是这也不是一种好方法。  

#### 三，原型模式   
我们创建每一个函数都有一个prototype（原型）属性，这个属性是一个指针，指向一个对象，而这个对象的用途就是包含可以由特定类型的所有实例共享的属性和方法。
如果按照字面意思来理解，那么prototype就是通多调用构造函数而创建的那个实例对象的的原型对象。使用源性对象的好处是可以让所有实例共享它所包含的属性和方法。

```js
function Person() {
  
} 



Person.prototype.name = "jack";
Person.prototype.age = 20;
Person.prototype.job = 'cooker';
Person.prototype.sayName = function() {
  alert(this.name);
} 



var person1 = new Person();
person1.sayName(); // "jack"

var person2 = new Person();
person2.sayName();    //"jack"  
alert(person1.sayName = person2.sayName);  //true
```



























                              
