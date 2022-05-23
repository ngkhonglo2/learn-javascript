// Chủ đề array method
//bài 1:
//Cho array = [1,5,7,8,9,15] sử dụng map hoặc filter
//bài 1.1: in ra các số chẵn trong mảng
// var array = [1,5,7,8,9,15]
// var newArr = array.filter(function(item){
//     return item%2 == 0  // bài 1.2 in ra số lẻ item%2 == 1
// })
// console.log(newArr);
//bài 1.3 in ra các số lớn hơn hoặc bằng 5
// var array = [1,5,7,8,9,15]
// var newArr = array.filter(function(item){
//     return item >= 5 // bài  1.4: in ra các số chia hết cho 5 thì return item%5 == 0
// })
// console.log(newArr);
// bài 1.5 tìm các số > 5 của mảng và tăng thêm một đơn vị
// var array = [1,5,7,8,9,15]
// var newArr = array.map(function(item){
//     if(item > 5){
//         return item + 1;
//     }else{
//         return item;
//     }
// });
// console.log(newArr);
//  bài 1.6 dùng slice để copy mảng từ số 3 đến phần tử cuối cùng
// var array = [1,5,7,8,9,15]
// var newArr = array.slice(3, array.length)
// console.log(newArr);
//bài 1.7 dùng splice để xóa 1 phần tử trong mảng 
// var array = [1,5,7,8,9,15]
// array.splice(2, 1)
// console.log(array);
//bài 1.8 push thêm một phần tử vào cuối mảng 
// var array = [1,5,7,8,9,15]
// array.push(99)
// array.push(-1)
// console.log(array);
//* dùng vòng lặp for tăng kết quả của các phần tử array lên 2 lần
// var array = [1,5,7,8,9,15]
// var array2 =[]
// for(var i = 0; i < array.length; i++){
//     var item = array[i]
//     array2.push(item*2)
// }
// console.log(array2);

//Bài 2: cho arr[1,8,5,2,7,6,9,2,6] dùng .sort để sắp xếp mảng tăng dần và giảm dần
// var arr = [1,8,5,2,7,6,9,2,6] 
// var newArr = arr.sort(function(item1, item2){
//     if(item1 > item2){    // nếu muốn giảm dần thì 1 thành -1 và ngc lại 
//         return 1
//     }
//     if(item1 < item2){
//         return -1
//     }
//     if(item1 == item2){
//         return 0
//     }
// })
// console.log(newArr);

// Bài 3:
//Bài 3.1 dùng sort để sắp xếp mảng objecct có tuổi tăng dần
// var persons = [
//     {
//         name: "Trung",
//         class: "Nodemy01",
//         dateJoin: "05-02-2020",
//         age: 20,
//     },
//     {
//         name: "Phong",
//         class: "Nodemy01",
//         dateJoin: "06-01-2020",
//         age: 19,
//     },
//     {
//         name: "trung",
//         class: "Nodemy02",
//         dateJoin: "25-01-2020",
//         age: 20,
//     }
// ];
// var tuoitangdan = persons.sort(function(item1, item2){
//     if(item1.age > item2.age){
//         return 1
//     }
//     if(item1.age < item2.age){
//         return -1
//     }
//     if(item1.age == item2.age){
//         return 0
//     }
// })
// console.log(tuoitangdan);
//bài 3.2 dùng .sort để sắp xếp mảng theo ngày tham gia của học viện
// var persons = [
//     {
//         name: "Trung",
//         class: "Nodemy01",
//         dateJoin: "05-02-2020",
//         age: 20,
//     },
//     {
//         name: "Phong",
//         class: "Nodemy01",
//         dateJoin: "06-01-2020",
//         age: 19,
//     },
//     {
//         name: "trung",
//         class: "Nodemy02",
//         dateJoin: "25-01-2020",
//         age: 20,
//     }
// ];
// function convertDateString(dateString){
// var arrDate = dateString.split('-')
// var date = arrDate[2] + '-'+arrDate[1]+ '-'+arrDate[0];
// return new Date(date)
// }
// var sorted = persons.sort(function(item1, item2){
//     var date1 = convertDateString(item1.dateJoin)
//     var date2 = convertDateString(item2.dateJoin)
//     if(date1 > date2){
//         return 1
//     }
//     if(date1 < date2){
//         return -1
//     }
//     if(date1 == date2){
//         return 0
//     }
// })
// console.log(sorted);

//bài 3.3 dùng filter để tìm ra những học viên tham ra trước tháng 2
// var persons = [
//         {
//             name: "Trung",
//             class: "Nodemy01",
//             dateJoin: "05-02-2020",
//             age: 20,
//         },
//         {
//             name: "Phong",
//             class: "Nodemy01",
//             dateJoin: "06-01-2020",
//             age: 19,
//         },
//         {
//             name: "trung",
//             class: "Nodemy02",
//             dateJoin: "25-01-2020",
//             age: 20,
//         }
//     ];
//     function convertDateString(dateString){
//     var arrDate = dateString.split('-')
//     var date = arrDate[2] + '-'+arrDate[1]+ '-'+arrDate[0];
//     return new Date(date)
//     }
// var newArr = persons.filter(function(item){
//     var date = convertDateString(item.dateJoin);
//     return date.getMonth() < 1
// })
// console.log(newArr);
//bài 3.4 dùng.map để tạo mảng mới, viết hoa  toàn bộ tên học viên 
// var persons = [
//         {
//             name: "Trung",
//             class: "Nodemy01",
//             dateJoin: "05-02-2020",
//             age: 20,
//         },
//         {
//             name: "Phong",
//             class: "Nodemy01",
//             dateJoin: "06-01-2020",
//             age: 19,
//         },
//         {
//             name: "trung",
//             class: "Nodemy02",
//             dateJoin: "25-01-2020",
//             age: 20,
//         }
//     ];
//     function convertDateString(dateString){
//     var arrDate = dateString.split('-')
//     var date = arrDate[2] + '-'+arrDate[1]+ '-'+arrDate[0];
//     return new Date(date)
//     }
// var newArr = persons.filter(function(item){
//     item.name =item.name.toUpperCase()
//     return item
// })
// console.log(newArr);
 // Bài 4:
// var doan ={
//     name: "Doan",
//     age: 22,
//     salary: 1000,
// }
// var trung = {...doan};
// trung.clone = true;
// trung.name = 'Trung'
// console.log(trung);