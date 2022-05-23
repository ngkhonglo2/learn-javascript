// var number = 9999
// var string = ''
// var boolean = true
// var arr = []
// var object = {}
// test = function(){

// }

// var student1 = {
//     name: 'tien',
//     age: 25,
// }
// var student2 = {
//     name: 'hiep',
//     age: 24
// }
// console.log(student1.name + ' co do tuoi = ' + student1.age);
// console.log(student2.name + ' co do tuoi = ' + student2.age);

// function print(){
//     console.log('xin chao Tien');
//     console.log('xin chao Hiep');
//     console.log('xin chao Loc');
//     console.log('xin chao Chi');
// }
// print();

// function cong(number1, number2){
//     var ketqua = number1 + number2
//     return ketqua
// }
// var number =  cong(8, 9)
// console.log(number);

// var x = 9
// var y = 99
// function cong(number1, number2){
//     y += 100;
//     x++;
// }
// cong()
// cong()
// console.log(y);




// arr=[6,7,8]
// arr2=[36,7,8]
// arr3=[2,7,8]
// arr4=[5,7,8]
// arr5=[4,7,8]
// arr=[6,7,8]
// arr=[6,7,8]
// // viet ham tinh tong *2 so 

// function tinhtong(number1, number2, number3){
//     var sum = number1 + number2 + number3
//     return sum
// }
// var tongmoi = tinhtong(6,7,8)
// var tongmoi2 = tinhtong(36,7,8)
// console.log(tongmoi);
// console.log(tongmoi2);



// // giả sử viết chương trình kiểm  tra số chẵn lẻ như sau:
// function check_number(number, hhhh, hhh){
//     console.log(number);
//     console.log(hhhh);
//     console.log(hhh);
//     // if(number %2 == 0){
    //     alert(number + ' la so chan');
    // }
    // else{
    //     alert(number + 'so le');
    // }
// }
// var arr =  [7, 7, 8]
// check_number(2);
// check_number(3);
// check_number(4);
// check_number(5);

// ham co return
// function inSo(){
//     console.log(ketqua + 6666);
// }
// function tinh_tong(a, b){
//     return a + b;

// }
// var so1 = 1;
// var so2 = 2;
// inSo();
// var ketqua = tinh_tong(so1, so2);
// console.log(ketqua);

// inSo();




// function tinh_tong(a, b){
//     console.log('tong la ' + (a + b));
// }
// var so1 = 1;
// var so2 = 2;
// tinh_tong(so1, so2);

//gia tri mac dinh cua tham so 
// function showMessage(message){
//     //nếu mesage không được truyền vào hoặc giá trị nó là rỗng 
//     // thì sẽ được thay thế bàng giá trị 'Không có tin nhắn'
//     message = message  || 'Không cos tin nhắn <br/>';
//     console.log(message);
// }
// showMessage()
// showMessage('chào mừng bạn đến với freetuts.net');

// một số ví dụ tạo hàm trong javascript

// function kiem_tra_nam_nhuan(nam){
//     if(nam%100 == 0){
//         if(nam%400 == 0){
//             console.log(nam + 'là năm nhuận');
//         }
//         else{
//             console.log(nam + 'không phải năm nhuận');
//         }
//     }
//     else if(nam%4 == 0){
//         console.log(nam + 'là năm nhuận');
//     }
//     else{
//         console.log(nam + 'không phải là năm nhuận');
//     }
// }

// kiem_tra_nam_nhuan(4);
// kiem_tra_nam_nhuan(2020)
// kiem_tra_nam_nhuan(2024)



// let array1 =[1, 2, 4]
// let array2 =[3, 4, 5]
// let array3 =[1, 2]

// function hienthiarr(array){
//     console.log(array);
// }
// hienthiarr(array1)
// hienthiarr(array2)
// hienthiarr(array3)

// function add(n1 , n2){
//     var tong = n1 + n2;

//     return tong 
// }
// var ketqua = add(8, 10)
// console.log(ketqua);

//  tinh giai thua 
// function tinhgiaithua(so){
//     var ketqua = 1;
//     for(i=1; i<=so;i++){
//         ketqua *= i
//     }
//     return ketqua
// }
// var ketquamoi = tinhgiaithua(7)
// console.log(ketquamoi);


// function gioithieubanthan(name, age, job){
//     console.log('ten toi la '+ name + ' nam nay toi '+ age + ' toi dang la '+job);
//     return 8888
// }
// gioithieubanthan('phong', '23', 'sinh vien')

// function pheptru(n1, n2){
//     var thuong = n1 - n2
//     return thuong
// }
// var thuongmoi=pheptru(4, 2)
// console.log(thuongmoi);



