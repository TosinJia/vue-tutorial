console.log("03.使用class实现面向对象编程.js_S");

// 创建一个Person类
class Person1 {
  // 在 class 的 { } 作用域中，只能写 constructor 函数，静态方法、静态属性、实例方法
  // 在 class 类中，必须有一个 constructor，如果你没有显示定义，则 系统会默认提供一个看不见的constructor

  // 如果用户显示定义了一个 constructor， 则会把默认的那个看不见的 constructor 给 覆盖掉    
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
//创建一个广东人的类
class GDPerson1 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
GDPerson1.prototype.sayHello = function(){
    console.log("GDPerson1.prototype.sayHello ", this, this.name);
}

console.log("=========================================================");
class Person {
    constructor(name, age){
        console.log("class Person constructor");
        this.name = name;
        this.age = age;
    }

    // 实例方法
    sayHello(){
        console.log("class Person sayHello", this, this.name);
    }

    // static 是关键字，专门用来创建静态属性的
    static PERSON_STATIC_INFO = "class Person static PERSON_STATIC_INFO";

    // 静态方法：
    static PERSON_STATIC_SHOW(){
        console.log("class Person static PERSON_STATIC_SHOW()");
    }
}

//创建一个广东人的类
class GDPerson extends Person{
    // 什么叫面向对象？？？
    // 记住这一句就行了：面向对象，就是【封装】、极致的封装就是面向对象；什么是极致的封装呢：【封装、继承、多态】
    // 面向对象，就是把 一些功能性的代码，封装到 具体的 类中，如果需要什么功能，就 new 什么样类，这样，即提高的代码的复用性，提高了开发的效率和协作开发的体验；
    // 谈编程的发展历史      面向过程（函数式编程）   ->  面向对象（以对象的形式来组织代码）    
    constructor(name, age, hobby){
        // super 这个函数，引申为 父类的构造函数
        // 注意： 如果 子类 通过  extends 关键字，实现了继承，那么，子类的构造函数中，必须先调用一下 super 这个父类的构造函数，才能使用 this         
        console.log("class GDPerson extends Person constructor super before");
        super(name, age);
        console.log("class GDPerson extends Person constructor super after");
        this.hobby = hobby;
    }

    gdPersonSayHello(){
        console.log("class GDPerson gdPersonSayHello", this, this.name);
    }

    // static 是关键字，专门用来创建静态属性的
    static GDPERSON_STATIC_INFO = "class GDPerson static GDPERSON_STATIC_INFO";

    // 静态方法：
    static GDPERSON_STATIC_SHOW(){
        console.log("class GDPerson static GDPERSON_STATIC_SHOW()");
    }
}



var person = new Person('tosin', 18);
console.log("person ", person, person.name);

var gdPerson = new GDPerson('jia', 20, '甜食');
console.log("gdPerson", gdPerson);

gdPerson.sayHello();

console.log("03.使用class实现面向对象编程.js_E");