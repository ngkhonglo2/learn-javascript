// const a = 5;
// const b = 10;
//   if(a > b){
//     console.log(a);
//   }else{
//       console.log(b);
//   }
// "nếu a > b = true thì cl(a) else thì cl(b)"


//  toán tử 3 ngôi ? :
// const max = a > b ? a : b
// console.log(max);
// cl ra 10 vì a < b nên lấy giá trị sau là b

// a > b ? console.log(a) : console.log(b);
// "tương tự như trên"

// toán tử !
// let b = false
// console.log(!b);
// "in ra true vì ! là phủ định giá trị đó"

// let x = 100
// console.log(--x);
// " hiển thị là 99 vì nếu -x nó hiểu là -100"

/*
câu lệnh rẽ nhánh if - else
*/ 
// if(0){
//     console.log('dung');
// }else {
//     console.log('sai');
// }


// ++ and --
// let a = 5;
// console.log(a++);// cộng sau in ra 5
// console.log(++a);// công trước in ra 6

/*
 câu lệnh rẽ nhánh switch case
 */
// let a = 1
// switch(a){
//     case 1:
//     console.log('mot');
//     break
//     case 2:
//     console.log('hai');
//     break
//     case 3:
//     console.log('ba'); 
//     break
// }
// "hiển thị ra mot vì có break nếu ko có break thì nó sẽ hiển tất cả giá trị sau giá trị đúng"

/*
lệnh lặp for
*/
// for(let i =1; i<= 100; i++){
//     console.log(i);
// }
// "trong lệnh for này nó hiển thị từ 1 => 100"

/*
lệnh lặp while
*/
// let i = 1
// while(i<=100)console.log(i++);// bằng for bên trên

// let i = 1
// do {
//     console.log(i++);
// }while(i<= 100)

/*
bài tập
*/
// 0 - 99 dừng lại ở 93
// let solanmua = 0
// let somuaduoc = -1

// while(somuaduoc != 93){
//     somuaduoc =  Math.floor( Math.random() * 100)
//     const message = 'Lan thu ' + ++solanmua + ' mua duoc ' + somuaduoc;
//     console.log(message);
// }

/*
hàm function
*/
// function show(){
//     console.log('XIN CHAO');
// }
// show()
// show()

// function show(a){
//     console.log(a);
// }
// show('hello')
// show('xin chao')

// function add(x, y){
//     return x + y
// }
// console.log(add(4,5));

// function show(x){
//     console.log(x);
// }
// function add(x, y){
//     return x + y
// }
// console.log(show(100));
//in ra 100 và undefined

// function la 1 gia tri
// const a = console.log;
// a(1000)
//in ra 1000

// function getLog(){
//     return console.log;
// }
// const x = getLog()  //hoặc getLog()(1000)
// x(1000)

//higher order function
// function addWithX(x){
//     return function(y){
//         return x + y;
//     }
// }
// const result = addWithX(10)(5); // function(y){return 10 + y}
// console.log(result);
// in ra 15

// function addWithX(x){
//     return function(y){
//         return x + y;
//     }
// }
// const addWith10 = addWithX(10)
// console.log(addWith10(100));
// //in ra 110

//function nhận tham số 
// function doSomethingWith1000(aFuc){
//     aFuc(1000);
// }
// doSomethingWith1000(console.log)
//in ra 1000

// function doSomethingWith1000(aFuc){
//     aFuc(1000);
// }
// function multiplyWith2(x){
//     console.log(x * 2);
// }
// doSomethingWith1000(multiplyWith2)
//in ra 2000

