console.log("02.class实现面向对象编程.js_S");

// ES6之前
function Person(name, age){
    // 这里的 name 和 age 叫做 实例属性【只能通过实例对象，点 出来的属性，叫做实例属性】
    this.name = name;
    this.age = age;
}
// 原型方法     实例方法
Person.prototype.showName = function(){
    console.log("Person.prototype.showName", this, this.name);
}

// 这里的 info 叫做 静态属性【直接使用 构造函数 点 出来的属性，叫做 静态属性】
Person.info = "Person.info 这是function构造函数"
Person.show = function(){
    console.log("Person.show = function()");
}

var p1 = new Person("jia", "20");
console.log("p1", p1, p1.name);
p1.showName();
console.log("Person.info", Person.info);
Person.show();


console.log("ES6===============================");
// ES6
// 使用 class 定义的 ，叫做类
class Per {
    // constructor 是构造函数的意思
    // 每当 new Per() 的时候，必然会优先调用 Per 上的  constructor    
    constructor(name, age){
        console.log("class Per constructor");
        this.name = name;
        this.age = age;
    }

    // 实例方法
    showName(){
        console.log("class Per showName()", this, this.name);
    }

    // static 是关键字，专门用来创建静态属性的
    static info = "class Per static info";

    // 静态方法：
    static show(){
        console.log("class Per static show()");
    }
}

var p2 = new Per('tosin', 18);
console.log("p2", p2, p2.name); // 实例属性【通过类的实例，点出来的属性】
p2.showName();
console.log(Per.info);  // 静态属性【通过类直接点出来的属性】
// 调用静态方法
Per.show();

console.log("02.class实现面向对象编程.js_E");