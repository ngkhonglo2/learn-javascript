// chủ đề scope bài 1 và 2 chủ đề object bài 3 và 4

// * Chủ đề scope
// Bài 1
// for(var i=0; i<10; i++){

// }
// console.log(i);
// in ra 10 vì phạm vi sống lớn 

//Bài 2
// for(let i=0; i<10; i++){

// }
// console.log(i);
//báo lỗi vì phạm vi sống nhỏ chỉ trong block

//* chủ đề object
// Bài 3 
// cho var number = 30 gán lại giá trị của biến number thành số "30".
// var number = 30
// number = "so 30"
// console.log(number);

//Bài 4
// cho const object={
    //name:'nodemy'
// }
//a. có gán lại được object= 'nodemy' được không? vì sao?
//b. có gán lại đượ object= "YA" được không ? vì sao?
//a.
// const object={
//     name: 'nodemy'
// }
// object = 'nodemy'
// console.log(object);
//báo lỗi vì đây là biến const nên không thể gán lại lần thứ 2
//b
// const object={
//     name: 'nodemy'
// }
// object.name = 'YA'
// console.log(object);
//được vì vẫn là object đó nhưng chỉ thay đổi thuộc tính bên trong 

//bài 5
// cho mảng:
//Hãy in ra thông tin tất cả mọi người như sau:
//Nam có job là Dev
//Duong có job là Tester
// var persons = [{
//     name: 'Nam',
//     job: 'Dev'
// },{
//     name: 'Duong',
//     job: 'Tester'
// }]
// for (let i= 0; i< persons.length; i++) {
//     let item = persons[i]
    
//     console.log(item.name + ' có job là '+ item.job);
// }

//Bài 6 
//cho: Hãy dùng for in để in ra toàn bộ thuộc tính 
// var person = {
//     name: 'Nam',
//     job: 'Dev',
//     phone: 0866633805,
//     company: 'Nodemy',
//     group: ['Nodejs.vn', 'Nodejs Viet Nam'],
//     website: 'http//nodemy.vn'
// }
// for(let key in person){
//     console.log(person[key]);
// }