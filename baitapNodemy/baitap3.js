//các chủ đề trong bài tập 3 * chủ đề trsing method * chủ đề date * chủ đề Math




// Chủ đề string method
// bài 5: 
//cho string
//var geeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy'
//5.1 đếm xem có tất cả bao nhiêu kí tự 
// var geeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy'
// console.log(geeting.length);

//5.2 .indexOf tìm xem nodemy  nằm ở vị trí nào
// var geeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy'
// var ketqua = geeting.indexOf('Nodemy')
// console.log(ketqua);

//5.3 dùng .startWith kiểm tra có bắt đàu với welcome không
// var geeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy'
// var ketqua = geeting.startsWith('Welcome')
// console.log(ketqua);

//5.4 dùng .substring để lấy chữ Academy
// var geeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy'
// var ketqua = geeting.substring(geeting.length - 7, geeting.length)
// console.log(ketqua);

//5.5 dùng .split để tách các từ 
// var geeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy'
// var ketqua = geeting.split(' ')
// console.log(ketqua);

//5.6 dùng .trim() để xóa các dấu ngoài rìa
// var geeting = '   Welcome to Nodemy, Nodemy is stand for Nodejs Academy  '
// var ketqua = geeting.trim()
// console.log(ketqua);

//5.7 dùng .include để kiểm tra xem Nodemy có trong câu trên hay không
// var geeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy'
// var ketqua = geeting.includes('Nodemy')
// console.log(ketqua);

//5.8 dùng .replace để thay thế Nodemy thành NODEMY 
// var geeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy'
// var ketqua = geeting.replace(/Nodemy/g, 'NODEMY')
// console.log(ketqua);

//5.9 dùng toUppercase  để in hoa chữ cái
// var geeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy'
// var ketqua = geeting.toUpperCase()
// console.log(ketqua);

//5.10 dùng .charAt để lấy một kí tự ở vị trí thứ 4
// var geeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy'
// var ketqua = geeting.charAt(4)
// console.log(ketqua);

//Chủ đề date
//bài 6 
//cho var phucBirthday = '26-11-1992'
//cho var cuongBirthday = '27-11-1994'
//6.1 Đổi định dạng ngày thành '1992-11-26'

//6.2 Quy đổi cả 2 về object date

// 6.3 So sánh xem phuc hay cuong lớn tuổi hơn 

//6.4 Hỏi sau 100 ngày từ lúc phucBirthday là ngày hôm nào, thứ mấy ?


//Chủ đề Math
//bài 7:
//7.1 tạo ra số random từ 1-10, 1-100, 50-100
// var randomNumber = Math.random() * 10 // nếu 50-100 (Math.random()* 50) + 50;
// console.log(randomNumber);

//7.2 làm tròn số 7.434345 (.round), làm tròn lên (.ceil), làm tròn xuống  (.floor)
// var number1 = 7.434345;
// var newNumber =Math.round(number1)// muốn làm tròn lên thì Math.ceil và ngc lại Math.floor
// console.log(newNumber);

//7.3 lấy sau số thập phân 2 đơn vị: ví dụ 7.434345 = 7.43
// var number1 = 7.434345;
// var newNumber = number1.toFixed(2)
// console.log(newNumber);

//7.4 cho  string '8' và '5' Dùng parselnt để  tính tổng (kết quả = 13)
// var number1 = '8';
// var number2 = '5';
// number1 = parseInt(number1)
// number2 = parseInt(number2)
// console.log(number1 + number2);

//7.5 tính 2^10
// var ketqua = Math.pow(2, 10)
// console.log(ketqua);