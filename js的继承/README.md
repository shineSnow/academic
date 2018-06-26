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
如果按照字面意思来理解，那么prototype就是通过调用构造函数而创建的那个实例对象的的原型对象。使用原型对象的好处是可以让所有实例共享它所包含的属性和方法。

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
person1.sayName();  // "jack"

var person2 = new Person();
person2.sayName();    //"jack"  
alert(person1.sayName = person2.sayName);  //true
```  
创建方式：首先创建一个构造函数，然后调用构造函数Person的原型，Person.prototype,并且为其添加属性和方法。  

调用方式：new 一个构造函数就创造了一个原型的实例，赋值给一个变量就可以实现调用。  

缺点：原型模式最大的缺点就是：如果共享的属性是引用类型，一个实例对改属性进行的修改会影响到其他实例，这正是原型很少被单独使用的原因。  

优点：觉得应该先说优点的。。。。，优点就是所有实例实现了共用属性和方法，节省内存。   

追加：原型模式其实还有一种别的写法，就是对象字面量写法，但是这种写法有一定局限：

```js
function Person () {
    
}
Person.prototype = {
    name:"jack",
    age:20,
    job:"cooker",
    guys:['lily','mary','ben'],
    sayName:function() {
      alert(this.name)
    }
}

var friend = new Preson();
var friend2 = new Person();

friend.guys.push('baly');

alert(friend.guys);   // ["lily","mary","ben","baly"]
alert(friend2.guys);  // ["lily","mary","ben","baly"]

alert(friend instanceof Object);   //true
alert(friend instanceof Person);   //true
alert(friend.constructor == Person);   //false
alert(friend.constructor == Object);   //true

```  
- 在上面的代码中，我们将 Person.prototype 设置为等于一个以对象字面量形式创建的新对象。 最终结果相同，但有一个例外:constructor 属性不再指向 Person 了。前面曾经介绍过，每创建一 个函数，就会同时创建它的 prototype 对象，这个对象也会自动获得 constructor 属性。而我们在 这里使用的语法，本质上完全重写了默认的 prototype 对象，因此 constructor 属性也就变成了新 对象的 constructor 属性(指向 Object 构造函数)，不再指向 Person 函数。此时，尽管 instanceof 操作符还能返回正确的结果，但通过 constructor 已经无法确定对象的类型了。  
- 使用对象字面量的时候，一定要在对象字面量原型后面再创建实例，如果在之前创建会报错。但是如果不是用对象字面量的方式，则不会报错。    

### 四，组合使用构造函数和原型模式（接近完美）   
话不多少，先上代码：  
```js
function Person (name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["jack","lily","fans"]
}

Person.prototype =  {
    constructor:'Person',
    sayName:function() {
      alert(this.name)
    }
}

var person1 = new Person('nancy',23,'singer');
var person2 = new Person('sara',24,'novelist');
person1.friends.push("vans");

alert(person1.friends); // ["jack","lily","fans","vans"];
alert(person2.friends); // ["jack","lily","fans"];
alert(person1.friends === person2.friends)   // false  
alert(person1.sayName === person2.sayName)     //true
```    
创建方式：在构造函数中设置希望每个实例都可以继承的属性，一个实例修改属性不会对其他实例产生影响。把共享的方法定义在Person的原型上，实现方法的共用。   

调用方式：new 一个构造函数Person出来，实现调用。

优点：（这次改过来先说优点），可以说是同时拥有了构造函数保持每个实例数据独立性优点的同时，实现了方法的共享，极大的节省了内存，这个模式堪称完美。but，并不。  

缺点：几乎没有了，还不够优雅，优雅 ：）接下来教你优雅的写代码。     

### 五，优雅模式或者完美模式 ：）（并不，动态原型模式）     
上代码：   
```js
function Person(name,age,job) {
  this.name = name;
  this.age = age;
  this.job = job;
  
  if(typeof this.sayName !== "function") {
      Person.prototype.sayName = function() {
        alert(this.name)
      }
  }
}
```
- 咳咳咳。。。，（兰花指）有其他 OO 语言经验的开发人员在看到独立的构造函数和原型时，很可能会感到非常困惑。动态原 型模式正是致力于解决这个问题的一个方案，它把所有信息都封装在了构造函数中，而通过在构造函数 中初始化原型(仅在必要的情况下)，又保持了同时使用构造函数和原型的优点。  
- 注意构造函数代码中加粗的部分。这里只在 sayName()方法不存在的情况下，才会将它添加到原 型中。这段代码只会在初次调用构造函数时才会执行。此后，原型已经完成初始化，不需要再做什么修 改了。不过要记住，这里对原型所做的修改，能够立即在所有实例中得到反映。因此，这种方法确实可 以说**非常完美**。其中，if 语句检查的可以是初始化之后应该存在的任何属性或方法——不必用一大堆 if 语句检查每个属性和每个方法;只要检查其中一个即可。对于采用这种模式创建的对象，还可以使 用 instanceof 操作符确定它的类型。
- 可以说非常完美了，非常具有实用性。   

  完结？   
  
  并没有完结，除了以上7中创建对象的方式，还有两种创建对象的方式，分别是：寄生构造函数模式，稳妥构造函数模式。有兴趣的了解一下。


## 继承   
终于到继承了，好阔怕😱，前面做了那么多铺垫，终于要切入正题了。看了上面那么多实现对象的方法，如果你没有晕，给你个赞。刚开始看的时候我cpu已经不够用了。继承需要你重新认识，继承是构造函数之间的继承，是对某一个构造函数方法和属性的扩展，明白这一点是很重要的，下面开始：  
由于函数没有签名，在ECMAScript中无法实现接口继承，ECMAScript只支持实现继承，而其实现继承主要是依靠原型链来实现的。

### 一，原型链
要来理解原型链继承先要了解什么是原型链。
>ECMAScript 中描述了原型链的概念，并将原型链作为实现继承的主要方法。  
 其基本思想是:**利用原型让一个引用类型继承另一个引用类型的属性和方法。**  
**简单回顾一下构造函数、原型和实例的关系:每 个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型 对象的内部指针。那么，假如我们让原型对象等于另一个类型的实例，结果会怎么样呢?显然，此时的 原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数 的指针。假如另一个原型又是另一个类型的实例，那么上述关系依然成立，如此层层递进，就构成了实 例与原型的链条。这就是所谓原型链的基本概念。**   

以上是小红书关于原型链的解释，感觉已经很清晰，主要是让一个构造函数的原型 =  一个构造函数的实例 ->这个构造函数的原型，从而实现继承。     

![prototype](https://github.com/shineSnow/academic/blob/master/img/prototype.jpg) 
   















































                              
