console.log("---");

class Person {
    constructor(name, age){ //Person.prototype.constructor 实例对象.constructor 点击跳转源码
        console.log("class Person constructor");
        this.name = name;
        this.age = age;
    }

    // 实例方法
    sayHello(){ //Person.prototype.sayHello 点击跳转源码
        console.log("class Person sayHello", this, this.name);
    }

    // static 是关键字，专门用来创建静态属性的
    static PERSON_STATIC_INFO = "class Person static PERSON_STATIC_INFO "; //Person.prototype.constructor.PERSON_STATIC_INFO

    static {
        console.log("Person static{}", this);
        this.PERSON_STATIC_INFO = this.PERSON_STATIC_INFO + "static {}";
    }
    // 静态方法：
    static PERSON_STATIC_SHOW(){ //Person.prototype.constructor.PERSON_STATIC_SHOW
        console.log("class Person static PERSON_STATIC_SHOW()");
    }

    static #PRIVATE_PERSON_STATIC_INFO = "class Person static #PRIVATE_PERSON_STATIC_INFO"; //person.__proto__ constructor.#PRIVATE_PERSON_STATIC_INFO
    static #PRIVATE_PERSON_STATIC_SHOW(){ ////person.__proto__ constructor.#PRIVATE_PERSON_STATIC_SHOW
        console.log("class Person static #PRIVATE_PERSON_STATIC_SHOW()");
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
    static {
        console.log("GDPerson static{}", this);
        this.GDPERSON_STATIC_INFO = this.GDPERSON_STATIC_INFO + "static {}";
    }
    // 静态方法：
    static GDPERSON_STATIC_SHOW(){
        console.log("class GDPerson static GDPERSON_STATIC_SHOW()");
    }

    static #PRIVATE_GDPERSON_STATIC_INFO = "class GDPerson static #PRIVATE_GDPERSON_STATIC_INFO";

    static #PRIVATE_GDPERSON_STATIC_SHOW(){
        console.log("class GDPerson static #PRIVATE_GDPERSON_STATIC_SHOW()");
    }
}



var person = new Person('tosin', 18);
//添加实例属性
person.gender='男';
var attributeName='gender';
//获取对象属性的两种方式 .属性名 [属性变量名]
console.log("person ", person, person.name, person.gender, person[attributeName]);



var gdPerson = new GDPerson('jia', 20, '甜食');
console.log("gdPerson", gdPerson);

gdPerson.sayHello();

// 
console.log("Person.prototype", Person.prototype, "GDPerson.prototype", GDPerson.prototype);
console.log("Person.prototype===person.__proto__", Person.prototype===person.__proto__);