// gom nhóm các thuộc tính

// buổi 4 oop

// cách 1: khai báo trực tiếp
// cách 2: class

// const teo = {
//     name: 'Teo Nguyen', 
//     age: 18,
//     sayHello: function(){
//         console.log('xin chao');
//     }
// };
// // console.log(teo.name);
// //teo.sayHello();

// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.sayHello = function(){
//         console.log(`xin chao, toi la ${this.name}, ${this.age} tuoi`);
//     }
// }
// // console.log(Person());
// // const ti = new Person('Ti', 18);
// // const tun = new Person('Tun', 30);
// // console.log(ti.name);
// // ti.sayHello();
// // tun.sayHello();


// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age =age;
//         this.sayHello = function(){
//             console.log(`Xin chao, toi la ${this.name}, ${this.age} tuoi`);
//         }
//     }
// }
// const teo = new Person('Teo Nguyen', 18);
// console.log(teo);

// const khoa = {
//     name: 'Khoa Pham',
//     company:{
//         name: 'KPTraining',
//         address: '92 LTR'
//     }

// };
// console.log(khoa.company);

// class Company{
//     constructor(name, address){
//         this.name = name;
//         this.address = address;
//     }
// }
// class Person{
//     constructor(name, age, company){
//         this.name = name;
//         this.age = age;
//         this.company = company;
//     }
//     sayHello(){
//         console.log(`Xin chao, toi la ${this.name}, ${this.age} tuoi`);
//     }
//     tangTuoi(){
//         this.age++;
//     }
// }
// const kpTraining = new Company('KP Training', '92 LTR');
// const khoa = new Person('Khoa pham', 30, kpTraining);
// console.log(khoa.company.name);

// function Person1(name, age){
//     this.name = name;
//     this.age = age;
//     this.sayHello = function(){
//         console.log(`Xin chao, toi la ${this.name}, ${this.age} tuoi`);
//     }
// }

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     sayHello(){
//         console.log(`Xin chao, toi la ${this.name}, ${this.age} tuoi`);
//     }
//     tangTuoi(){
//         this.age++;
//     }
// }

//HinhVuong -> canhHinHVuong -> getPerimeter -> getSquare

// const teo = new Person('Teo Nguyen', 18);
// teo.sayHello();
// teo.tangTuoi();
// teo.sayHello();
// console.log(teo);

//Point
//Line getlength -> do dai cua doan thang
// class Point{
//     constructor(x,y)  {
//         this.x = x;
//         this.y = y;
//     }
// }
// class Line{
//     constructor(Point1, Point2){
//         this.Point1 = Point1;
//         this.Point2 = Point2;
//     }
//     getLine(){
//         const dx = this.Point1.x - this.Point2.x;
//         const dy = this.Point1.y - this.Point2.y;
//         return Math.sqrt(dx*dx + dy*dy); // Math.sqrt() căn bậc 2 
//     }
// }
// const p1 = new Point(0, 0);
// const p2 = new Point(1, 1);
// const l1 = new Line(p1, p2);
// console.log(l1.getLine());


// class Point{
//     constructor(x,y)  {
//         this.x = x;
//         this.y = y;
//     }
// }
// class Line{
//     static company(l1, l2){
//         return l1.getLength() > l2.getLength();
//     }
//     constructor(PointA, PointB){
//         this.PointA = PointA;
//         this.PointB = PointB;
//     }
//     getLength(){
//         const dx = this.PointA.x - this.PointB.x;
//         const dy = this.PointA.y - this.PointB.y;
//         return Math.sqrt(dx*dx + dy*dy);
//     }
// }

// class Triangle{
//     constructor(pointA, pointB, pointC){
//         this.pointA =pointA;
//         this.pointB = pointB;
//         this.pointC = pointC;
//     }

//     getPerimeter(){
//         const l1 = new Line(this.pointA, this.pointB);
//         const l2 = new Line(this.pointA, this.pointC);
//         const l3 = new Line(this.pointB, this.pointC);
//         return l1.getLength() + l2.getLength() + l3.getLength();
//     }
// }
// const p1 = new Point(0, 0);
// const p2 = new Point(1, 1);
// const l1 = new  Line(p1,p2);
// console.log(l1.getLength());