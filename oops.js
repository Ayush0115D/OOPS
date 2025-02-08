//PROTOTYPE
// =>
// const student={
//     fullname : "shradha khapra",
//     marks:94,
//     printMarks: function(){
//         console.log("marks=",this.marks);
//     },
// };
// prototype phle se bna hota he,hamre jitne bhi obj hote js me wo  
//prototype objects se kuch kuch properties or methods inherit krte
// KOI BHI OBJ JO JS ME  HOTE USKE BY DEFAULT PROTOTYPE OBJ HOTE H..like .push etc
const employee={ //prototype
    calcTax() {
        console.log("tax rate is 10%");
    }
};
const karanArjun={
    salary:500000,
    calcTax(){
    console.log("tax rate is 20%");
    },
};
karanArjun.__proto__ =employee;
//classes
class ToyataCar{
    constructor(brand,mileage){
        console.log("creating new object");
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){
    console.log("start");
    }
    stop(){
        console.log("stop");
    }
    // setBrand(brand){
    //     this.brand=brand; // jo this ke sath he woh obj property he
    // }
}
let fortuner=new ToyataCar("fortuner",100);
console.log(fortuner);
// fortuner.setBrand("fortuner");
let lexus= new ToyataCar("lexus",79);
console.log(lexus);
// lexus.setBrand("lexus");
class parent{
    hello(){
        console.log("hello");
        
    }
}
//Inheritance
class child extends parent{}
let obj=new child();
class person{
    constructor(name){
        console.log("enter parent constructor");
        this.species="homo sapiens";
        this.name=name;
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing"); // parent class ka fucn invoke na hoga child ka hoga
    }
}
class engineer extends person{
    // constructor(branch){
    constructor(name){
        console.log("enter child constructor");
        super(name);// to invoke parent class constructor
        // this.branch=branch;
        console.log("exit child constructor");
    }
    work(){
        super.eat();
        console.log("solve problems,build something");
    }
}
//     class doctor extends person{
//         work(){
//             console.log("treat patients");
//         }
// }

// let engObj = new engineer("computer science and engg.");
let engObj = new engineer("shradha");
// let amanObj=new doctor();
//Ques.
 let DATA="secret information";
class user{
    constructor(name,email){
this.name=name;
this.email=email;
    }
    viewData(){
        console.log("data",DATA);
    }
}
class admin extends user{
    constructor(name,email){
        super(name,email);
    }
 editData(){
   DATA="some new value" 
 }
}
let student1=new user("shradha","abc@email.com");
let student2=new user("aman","aman@email.com");
let teacher=new user("dean","dean@email.com")
let admin1=new admin("admin","admin@college.com")
//error handling
let a=5;
let b=5;
console.log("a=",a);
console.log("b=",b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);
try{
    console.log("a+b=",a+c); //error
}
catch(err){
    console.log(err);
}
console.log("a+b=",a+b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);


