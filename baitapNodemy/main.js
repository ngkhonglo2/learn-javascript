//vòng lặp for...in chỉ dùng khi muốn duyệt từng key-value trong object
// var object = {
//     Name: 'phong',
//     Age: 18,
//     class: 'he thong dien',
// }
// for(var key in object){
//     console.log(object[key]);
// }

//vòng lặp for ...of chỉ dùng  cho array
// var arr = ['a','b']
// for(var key of arr){
//     console.log(key);
// }

//ví dụ Break
// for(let i = 0; i < 10; i++){
//     if(i == 3){
//         break;
//     }
//     console.log(i);
// }
// console.log('outside')
//sẽ ra là 0 1 2 outside
// for (let i = 0; i< 10; i++){
//     break;
//     console.log(i);
// }
// console.log('outside');
//chỉ hiện mỗi outside

//chua co break
// for(let i = 0; i < 10; i++){
//     for(let j= 0; j < 5; j++){
//         console.log('lap j', j);
//     }
//     console.log('====== lap I', i);
// }
// console.log('outside');
//thi for ben trong lap tu 0 - 4 cho moi phan tu for ngoai
//co break
// for(let i = 0; i < 10; i++){
//     for(let j= 0; j < 5; j++){
//         console.log('lap j', j);
//         break;
//     }
//     console.log('====== lap I', i);
// }
// console.log('outside');
//thi for trong chi lap 0 cho moi for ben ngoai

//voi continue
// for (var i = 0; i < 5; i++){
//     if(i == 3){
//         continue;
//     }
//     console.log(i);
// }
// ket qua in ra: 0 1 2 4
// 3 se khong dc in ra do lenh continue da bo  qua lenh in ben duoi va sang lan lap tiep theo



// Hàm function
/*trong đó :
+ name: tên function
+ argument_1: tham số thứ nhất 
+ argument_2: tham số thứ hai
+ return: câu lệnh quyết định function trả về dữ liệu gì
vd: 
khai báo 
cách 1
function name(argument_1, argument_2){
    argument_1 + argument_2
    return 1000
}

cách 2: gán function vào biến 
var name = function(argument_1, argument_2){
    argument_1 + argument_2
    return 1000
}

cách 3: ít dung (mang tính chất giới thiệu)
//Self-invoke
(function(){
    console.log('call-function')
})()
 */
// function print(){
//     console.log('xin chao');
//     console.log('xin chao');
// }
// print();
//se in ra 2 xin chao neu ghi ra nhieu print() thi se dc 4 xin chao ben trong cang nhieu ghi ra cang nhieu

// function print(hocvien, address){
//     console.log('xin chao' + hocvien);
//     console.log(hocvien + 'co dia chi tai' + address);

//     return 8888//den lenh return thi cau lenh se ket thuc
// }
// print('phong', 'ha noi');
// print('tuan anh', 'ho chi minh');
//ket qua in ra:
// xin chaophong
//  phongco dia chi taiha noi
// xin chaotuan anh
// tuan anhco dia chi taiho chi minh

// function add(number1, number2){
//     var sum = number1 + number2;

//     return sum;
// }
// var ketqua = add(8, 10);
// var ketqua2 = 2 + 20
// console.log(ketqua2);
//ket qua in ra la 22

//tính giai thừa
// function tinhgiaithua(number){
//     var ketqua = 1;
//     for(var i = 1; i <= number; i++){
//         ketqua *= i
//     }

//     return ketqua;
// }
// var giaithua = tinhgiaithua(4);
// console.log(giaithua);
//kqua in ra 24

//* array, string, date, math method
//I: Array
//1: arr.push() thêm 1 phần tử bất kì vào cuối của mảng arr  gốc
// var arr = [4,5,6,2,1]
// arr.push(3)
// console.log(arr);
// ra [ 4, 5, 6, 2, 1, 3 ]
//2: arr.pop() làm mất đi phần tử cuối arr gốc, và trả về nó "arr.pop()"
// var arr = [4,5,6,2,1]
// arr.pop()
// console.log(arr);
// ra [ 4, 5, 6, 2 ]
//3: arr.slice() sao chép một đoạn phần tử bất kì của mảng arr gốc 
// var arr = [4,5,6,2,1]
// var arrMoi = arr.slice(0,3)
// console.log(arrMoi);
// ra [ 4, 5, 6 ] nếu (arr) vẫn giữ nguyên
//4: arr.splice() vừa có thể thêm vừa có thể xóa các phần tử trong arr gốc.p tử bị xóa sẽ chuyển  về "arr.splice()"
// var arr = [4,5,6,2,1]
// arr.splice(2,2,'khoang','trong')
// console.log(arr);
//ra [ 4, 5, 'khoang', 'trong', 1 ]
//5: arr.sort() dùng  để sắp xếp các p tử trong arr gốc nếu là number để () nó  tự sắp xếp
// var arr = [4,5,6,2,1]
// arr.sort(function(item1, item2){
//     if(item1 > item2){
//         return 1
//     }
//     if(item1 < item2){
//         return -1
//     }
//     if(item1 == item2){
//         return 0
//     }
// })
// console.log(arr);
//ra [ 1, 2, 4, 5, 6 ]
//nếu object có trong array thì, nếu có hay hay nhiều phần tử trong object thì khi viết 
//ví dụ if(item1.name > item2.name){}
//6: arr.map() bóc tách từng p tử trong arr sẽ chuyển vào item và trả về arr mới
// var arr = [4,5,6,2,1]
// var newArr = arr.map(function(item){
//     return item *= 2
// })
// console.log(newArr);
//ra [ 8, 10, 12, 4, 2 ]
//7: arr.filter() hàm lặp
// var arr = [4,5,6,2,1]
// var newArr = arr.filter(function(item){
//     return item > 4
// })
// console.log(newArr);
//ra [ 5, 6 ]
//8: arr.find() hàm tìm kiếm
// var arr = [4,5,6,2,1]
// var phantu = arr.find(function(item){
//     return item>4
// })
// console.log(phantu);
// ra 5
//II: string
//1: .lenght
// var fullname = 'Do Van Bao'
// console.log(fullname.length);
//ra 10
//2: .trim loại bỏ dấu cách thừa ở hai đầu 
// var fullname = '    Do Van Bao  '
// console.log(fullname.trim());
//ra Do Van Bao
//3: .indexof chuỗi mà ta muốn tìm ở vị trí bao nhiêu
// var fullname = 'Do Van Bao'
// console.log(fullname.indexOf('Van'));
//ra 3
//4: .substring lấy ra cái chuỗi con
// var fullname = 'Do Van Bao'
// var string2 = fullname.substring(2,8)
// console.log(string2);
//ra  Van B
//5: .replace() thay thế toàn bộ 
// var fullname = 'Do Van Van Bao'
// var newstring  = fullname.replace(/Van/g,'VAN')
// console.log(newstring);
//ra Do VAN VAN Bao
//6: .toUpperCase() Biến đổi tất cả chữ thường thành hoa và ngc lại thì dùng toLowerCase()
// var fullname = 'Do Van Bao'
// var newString = fullname.toUpperCase();
// console.log(newString);
//ra DO VAN BAO
//7: .charAt() lấy các p tử
// var fullname = 'Do Van Bao'
// var firstChar = fullname.charAt(0) // nếu muốn lấy  p tử cuối thì(fullname.length -1)
// console.log(firstChar);
//ra D
//8: .split() hàm tách chuỗi
// var fullname = 'Do Van Bao'
// var newArray = fullname.split(" ");
// console.log(newArray);
//ra [ 'Do', 'Van', 'Bao' ]

// III: Date
//1: new Date()
// var today = new Date("2021-4-9")
// console.log(today);

//2:getFullYear()
// var date2 = new Date("2021-4-9")
// var date = date2.getFullYear();
// console.log(date);

//3: getMonth()
// var date2 = new Date("2021-4-9")
// var date = date2.getMonth();
// console.log(date);

//4: getDate()
// var date2 = new Date("2021-4-9")
// var date = date2.getDate();
// console.log(date);

//5: Date.now() thời gian từ năm 1970 đến nay
// console.log(Date.now());

//IV: Math
//1: Math.round(x) làm tròn số 
// var number = Math.round(2.6)
// console.log(number);
//ra 3

//2: Math.pow(x, y) số mũ y
// var number = Math.pow(2, 3)
// console.log(number);
// ra 8

//3: Math.sqrt(x) căn 
// var number = Math.sqrt(9)
// console.log(number);
// ra 3

// 4: Math.abs(x) luôn cho số dương ||
// var number = Math.abs(-16)
// console.log(number);
//ra 16

//5: Math.max() chọn số lớn nhất và ngược lại Math.min()
// var arr = [1,3,5,4,3,3,2,1]
// var number = Math.max(...arr) // Math.min(...arr)
// console.log(number);
//ra 5                           // ra 1

//6: Math.random() random ra 1 số bất kì
// var number = Math.random()*100
// console.log(number);
// ra một số ngẫu nhiên



// V: Xử lý bất đồng bộ
//5.1 callback
// function voGao(callback){
//     callback()
// }
// function nauCom(){
//     console.log('nau com');
// }
// voGao(nauCom)
//in ra nau  com

// function bieuThuc(number1, number2, cb){
//    let ketqua = cb(number1, number2)

//     console.log('ket qua cua bieu thuc = ' + ketqua);
// }

//Ban hoc sinh 1 trien khai phep cong
// function add(num1, num2){
//     return num1 + num2;
// }
// bieuThuc(10, 6, function(num1, num2){
//     return num1 + num2;
// })
// in ra   ket qua cua bieu thuc = 16
//them ban hoc sinh 2 trien kai phep tru 
// bieuthuc(10, 6, function(num1, num2){
//     return num1 - num2;
// })
//in ra ket qua cua bieu thuc = 16
//      ket qua cua bieu thuc = 4

//5.2 setTimeout , setInterval
//5.2.1 setTimeout
// console.log(1);
// console.log(2);
// console.log(3);
// setTimeout(function(){
//     console.log(4);
// },2000);
// console.log(5);
//in ra 1 2 3 5 hai giây sau mới in ra  4 vì các lệnh đồng bộ sẽ ưu tiên thực hiện trước 
// 5.2.2 clearTimeout
// console.log(1);
// console.log(2);
// console.log(3);
// var quatrinh1 = setTimeout(function(){
//     console.log(4);
// },2000)
// clearTimeout(quatrinh1)
//in ra 1 2 3 nhưng hủy lệnh in ra 4 và 4 ko dc in ra

//5.2.3 setInterval
// setInterval(function(){
//     console.log('hello');
// },2000)
// in ra chữ hello đến khi nào dùng lệnh clearInerval để dừng
//5.2.4 clearInterval
// var quatrinh1 = setInterval(function(){
//     console.log('hello');
// },2000);
// clearInterval(quatrinh1)
//sẽ dừng lệnh in ra hello và hello ko dc in ra nữa

//6: promise
// vd tạo promise
// var p1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve('da xu ly xong ') 
//     },1000)
// })
// .then(function(data){       // ăn theo resolve
//     console.log(data);
// })
// .catch(function(err){       // ăn theo  reject
//     console.log('loi', err);
// })
//nếu là resolve thì in ra da xu ly xong còn reject thì in ra loi da xu ly xong 
//phần .then và .catch là phần cần nhớ 

//  7: class
// class Person{
//     constructor(name){
//         this.name = name
//     }
// }
// var p1 = new Person('thai')
// console.log(p1);
// in ra Person{name:'thai'}

// class Person{
//     constructor(name){
//         this.name = name
//     }
//     fun2(){
//         console.log('hello2');
//     }
// }
// var p1 = new Person('thai')
// p1.fun2()
//in ra hello2

// class Person{
//     constructor(name, age){
//         this.name = name 
//         this.age = age
//     }
// }
// class student extends Person{
//     constructor(name, age, univer, className){
//         super(name, age)
//         this.univer = univer
//         this.className = className
//     }
// }
// var st1 = new student('thai', 25, 'Nodemy', 'k5')
// console.log(st1);
//in ra student { name: 'thai', age: 25, univer: 'Nodemy', className: 'k5' }