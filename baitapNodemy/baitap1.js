// Chủ đề object
// bài 1
//* in ra số chẵn và lẻ và lớn hơn hoặc bằng 5 trong mảng
// var array = [1,5,7,8,9,15,8]
// for(var i = 0; i < array.length; i++){
//     var item = array[i]
    // if(item%2 == 0){     // số lẻ thì == 1 //lớn hơn hoặc bằng 5 thì item >= 5
        // console.log(item);
//     }
// }
// in ra 8 8

//* cộng các số chia hết cho 5 trong mảng
// var array = [1,5,7,8,9,15,8]
// var tong = 0
// for(var i = 0; i < array.length; i++){
//     var item = array[i]
//     if(item%5 == 0){
//         tong += item
//     }
// }
// console.log(tong);
//in ra 20

//*tìm ra tích 3 số đầu của mảng
// var array = [1,5,7,8,9,15,8]
// console.log(array[0] * array[1] * array[2]);
// ỉn ra 35

//* tính tổng 3 phần tử cuối của mảng
// var array = [1,5,7,8,9,15,8]
// console.log(array[array.length-1] + array[array.length-2] + array[array.length-3]);
// in ra 32

//* tìm xem trong array có phần tử nào là số 5 không
// var array = [1,5,7,8,9,15,8]
// for(var i = 0; i < array.length; i++){
//     var item = array[i]
//     if(item == 5){
//         console.log('có phần tử 5');
//     }
// }
// in ra có phần tử 5
// nếu viết theo function thì
// var array = [1,5,7,8,9,15,8]
// function checkNumber5(mang){
//     for(var i = 0; i < mang.length; i++){
//             var item = mang[i]
//             if(item == 5){
//                 return true
//             }
//     }
//     return false
// }
// var ketqua = checkNumber5(array)
// console.log(ketqua);
// in ra true

// var array = [1,5,7,8,9,15,8]
// function count8(mang){
//     var count = 0;
//     for(var i = 0; i < mang.length; i++){
//         var item = mang[i]
//         if(item == 8){
//             count++;
//         }
//     }
//     return count;
// }
// var ketqua = count8(array)
// console.log(ketqua);
// in ra 2

//chủ đề object
// var obj={
//     firstName: 'Đỗ',
//     lastName: 'Hảo',
// }
// console.log('họ và tên học viên ' + obj.firstName + ' ' + obj.lastName);
// in ra họ và tên học viên Đỗ Hảo

//Bài 2:  Định nghĩa 1 đói tượng tên là car gồm các thuộc tính 
// hãng Xe là BMW, giá 300000 USD, xuatXu ở Đức 
// var car ={
//     hangxe: 'BMW',
//     gia: 300000,
//     xuatxu: 'Đức',
// }
// car.mausac = 'Đen'
// car.gia = 250000

// var message = car.hangxe + ' ' + car.mausac + ' xuất xứ ở ' + car.xuatxu + ' có giá là ' + car.gia;
// cách khác var message = `${car.xuatxu} xuất xứ ở ${car.xuatxu} có giá là ${car.gia}`
// console.log(message);






arr=[6,7,8]
arr2=[36,7,8]
arr3=[2,7,8]
arr4=[5,7,8]
arr5=[4,7,8]
// arr=[6,7,8]
// arr=[6,7,8]
// // viet ham tinh tong *2 so 
// arr=[6,7,8]



function tinhtong(arr, arr2, arr3, arr4, arr5) {
    
}

tinhtong()



// giả sử viết chương trình kiểm  tra số chẵn lẻ như sau:
function check_number(number, hhhh, hhh){
    console.log(number);
    console.log(hhhh);
    console.log(hhh);
    // if(number %2 == 0){
    //     alert(number + ' la so chan');
    // }
    // else{
    //     alert(number + 'so le');
    // }
}
var arr =  [7, 7, 8]
// check_number(2);
// check_number(3);
// check_number(4);
// check_number(5);
function tinh_tong(a, b){
    return a + b;
}
var so1 = 1;
var so2 = 2;

var ketqua = tinh_tong(so1, so2);
console.log(ketqua);