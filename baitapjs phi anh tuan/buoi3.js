/*
//1.......100
//in ra các số chia hết cho 2 trong khoảng đó 
//in ra các số chia hết cho 3
//in ra các số chia hết cho 5 dư 1
//in ra con số chính phương ->x => Math.sqrt(x) % 1
*/
// function insochiahetcho2(){
//     for(let i=1; i<=100; i++){
//         const dieukien = (i%2===0);
//         if(dieukien) console.log(i);
//     }
// }
// insochiahetcho2()

// function insochiahetcho3(){
//     for(let i=1; i<= 100;  i++){
//         const dieukien = (i%3===0)
//         if(dieukien) console.log(i);
//     }
// }
// insochiahetcho3()

// function insochiahetcho5du1(){
//     for(let i=1; i<=100; i++){
//         const dieukien = (i%5===1)
//         if(dieukien) console.log(i);
//     }
// }
// insochiahetcho5du1()


// function insochinhphuong(){
//     for(let i =1; i<= 100; i++){
//         const dieukien = (Math.sqrt(i)%1===0)
//         if(dieukien) console.log(i);
//     }
// }
// insochinhphuong();

// function inso(CheckNumber){
//     for(let i=1; i<=100; i++){
//         const dieukien = CheckNumber(i);
//         if(dieukien) console.log(i);
//     }
// }
// function kiemtrachiahetcho2(i){
//     return i%2 == 0;
// }
// //tương tự với kiemtrachiahetcho3 và cho5 chính phương
// inso(kiemtrachiahetcho2)

//arrow function 
// inSo((i)=>{
//     return Math.sqrt(i)%1 == 0;
// })
// //hoặc viết
// inSo(i => Math.sqrt(i)%1 ===0)

//bài tập in ra 
// *
// **
// ***
// ****
// *****
// function vetinh1(soDong){
//     for(let i=1; i <= soDong; i++){
//         let s ='';
//         for(let j=1; j<=soDong; j++){
//             if(j<=i) s += '*';
//         }
//         console.log(s);
//     }
// }
// function vetinh2(soDong){
//     let s = '';
//     for(let  i=1; i<= soDong; i++) console.log(s +='*');
// }
// vetinh1(5)
//in ra *
//      **
//      ***
//      ****
//      *****

// function vehinh1(soDong){
//     for(let i=1; i<= soDong; i++){
//         let s = '';
//         for(let j = 1; j<= soDong; i++){
//             if (j<=i) s += '*';
//         }
//         console.log(s);
//     }
// }

// function vehinh2(soDong){
//     for(let i=1; i<= soDong; i++){
//         let s = '';
//         for(let j = 1; j<= soDong; i++){
//             s +=(i+j >= soDong + 1) ? '*' : ' ';
//         }
//         console.log(s);
//     }
// }

// function vehinh3(soDong){
//     for(let i=1; i<= soDong; i++){
//         let s = '';
//         const soCot = soDong*2-1;
//         for(let j=1; j<= soCot; i++){
//             const dieuKien = Math.abs(j - soDong) <= i - 1;
//             s += dieuKien ? '*' : ' ';
//         }
//         console.log(s);
//     }
// }

/*
cách 2
*/
// function vehinh(soDong, checkPoint){
//     for(let i = 1; i <= soDong; i++){
//         let s = '';
//         for(let j=1; j<= soDong; j++){
//             const dieuKien = checkPoint(i, j, soDong);
//             s += dieuKien ? '*' : ' ';
//         }
//         console.log(s);
//     }
// }
// vehinh(5, function(i, j, soDong){
//     return i >= j;
// })
//in ra *
//      **
//      ***
//      ****
//      *****
//nếu 
// vehinh(5, function(i, j, n){
//     return i+j >= n+1;
// })
//thì in ra        *
            //    **
            //   ***
            //  ****
            // *****

//một function giải quyết đc 3 bài toán
// function vehinh(soDong, checkPoint, getSoCot){
//     for(let i=1; i <= soDong; i++){
//         let s = '';
//         const soCot = getSoCot(soDong);
//         for(let j =1; j <= soCot; j++){
//             const dieuKien = checkPoint(i, j, soDong);
//             s += dieuKien ? '*' : ' ';
//         }
//         console.log(s);
//     }
// }
// vehinh(5, (i, j) => i>= j, soDong => soDong)// in ra hinh so 1
// vehinh(5, (i, j, n) => i + j >= n + 1, soDong => soDong)// in ra hinh so 2
// vehinh(5, (i, j, n) => Math.abs(j-n) <= i-1, soDong => soDong*2 -1) // in ra hinh so 3

