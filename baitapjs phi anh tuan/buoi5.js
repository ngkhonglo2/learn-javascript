// const a = ['Tuan', 'Quynh', 'Huyen'];
// console.log(a[0]);

// const a = ['abc','def']
// a.push('123');//thêm vào cuối
// a.unshift('duy');//thêm vào đầu
// a.pop();//xóa phần tử cuối
// a.shift();//xóa phần tử đầu
// a.splice(1,2);//xóa phần tử 1 tới 2
// a.splice(1,0, 'them vao'); //thêm 'them vao' vào vị trí thứ 1
// console.log(a);


// const arrNums = [1,2,3,5];
// function sqrNums(inputArrNum){
//     const output = [];
//     for(let i = 0; i< inputArrNum.length; i++){
//         output.push(inputArrNum[i] * inputArrNum[i]);
//     }
//     return output
// }
// console.log(sqrNums(arrNums));//in ra [1,4,9,25]
// console.log(arrNums.map(e => e*e));

// cach khac 
// const arrNums = [1,2,3,5];
// function myMap(arr, fn){
//     const arrOutput= [];
//     for(let i=0; i<arr.length; i++){
//         arrOutput.push(fn(arr[i]));
//     }
//     return arrOutput
// }
// console.log(myMap(arrNums, e => e*e));

//chọn các số ko chia hết cho 2
// const arrNums = [1,2,3,5];
// function myFilter(arr, fnCheck){
//     //trả về các phần tử thỏa mãn điều kiện fnCheck
//     let arrOutput = [];
//     for(let i =0; i<arr.length; i++){
//         if(fnCheck(arr[i])) arrOutput.push(arr[i]);
//     }
//     return arrOutput;
// }
// // console.log(myFilter(arrNums, e => e %2===1));
// const oddNumbers = arrNums.filter(e =>e%2==1);
// console.log(oddNumbers);


// class Person{
//     constructor(name, age, heigh){
//         this.name = name;
//         this.age = age;
//         this.heigh =  heigh;
//     }
// }
// const arr = [
//     new Person('Ti',10,150),
//     new Person('Teo',19,180),
//     new Person('Tun',15,190)
// ];
// // log ra các mảng của các phần tử có tuổi >14 và chiều cao >160
// //biến p tự đặt
// console.log(arr.filter(p => p.age>14 && p.heigh >160)); // method  .filter() lọi ra các phần tử thỏa mãn đk
//in ra[
//     Person { name: 'Teo', age: 19, heigh: 180 },
//     Person { name: 'Tun', age: 15, heigh: 190 } 
//   ]


// class Person{
//     constructor(name, age, heigh){
//         this.name = name;
//         this.age = age;
//         this.heigh =  heigh;
//     }
// }
// const arr = [
//     new Person('Ti',10,150),
//     new Person('Teo',19,180),
//     new Person('Tun',15,190)
// ];
// console.log(arr.sort((a, b)=>{ // method sort() sắp xếp thứ tự mặc định tăng dần
//     if(a.age !== b.age) return a.age - b.age;
//     return a.heigh - b.heigh;
// }));
// //kiểm tra xem trong mảng arr Person có tồn tại phần tử nào có
// console.log(arr.some(e=> e.heigh > 185));
// console.log(arr.every(e=> e.heigh > 170));
//in ra [
//   Person { name: 'Ti', age: 10, heigh: 150 }, 
//   Person { name: 'Tun', age: 15, heigh: 190 },
//   Person { name: 'Teo', age: 19, heigh: 180 } 
// ]
// true cl của method .some do có phần tử đúng
// false cl của method .every do không phải tất cả phần tử thỏa mãn đk

// function checkEvery(arr, fnCheck){
    
//     for(let i=0; i <arr.length; i++){
//         if(!fnCheck(arr[i]))return false;
//     }
// }


// class Person{
//     constructor(name, age, heigh){
//         this.name = name;
//         this.age = age;
//         this.heigh =  heigh;
//     }
// }
// const arr = [
//     new Person('Ti',10,150),
//     new Person('Teo',19,180),
//     new Person('Tun',15,190)
// ];
// console.log(arr.find(e=>e.age===15));
// console.log(arr.findIndex(e=>e.age===15));// method .findIndex() tìm vị trí của phần tử đầu tiên thỏa mãn đk tính từ vi trí 0
// arr.forEach(e=> console.log(e.name));
// arr.forEach((e, index)=> console.log(index + 1 + ': ' +e.name));
// console.log(arr.push(1000));