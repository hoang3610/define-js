/**
 * Kiểu dữ liệu trong Javascript
 * 
 * 1. Dữ liệu nguyên thuỷ - Primitive Data
 *      - Number
 *      - String
 *      - Boolean
 *      - Undefined
 *      - Null
 *      - Symbol
 * 
 * 2. Dữ liệu phúc tạp  - Complex Data
 *      - Function
 *      - Object
 */

/* Muốn kiểm tra kiểu dữ liệu trong javascript => sử dụng typeof */

// Number
var a = 1;
var b = 1.5;

console.log(typeof a);

// String
//This is a String
//Chuỗi bên trong được bao quanh bởi dấu nháy đơn hoặc giấu nháy kép
//Muốn js hiểu có nháy đơn bên trong ta có thể dùng 'Van \'Hoang'
// Nếu dùng giấu nháy "" thì không cần phải thêm \
var myname = 'Van \'Hoang';
console.log(typeof myname);

// Boolean
// Có 2 kiểu => 1 là false; 2 là true
var isSuccess = true;
var isFail = false;
console.log(typeof isSuccess);

// undefine
// 1 biến mà không gán giá trị cho nó

// Null
var isNull = null; // nothing => không có gì 
// Note: kiểu Null khi in ra thì là kiểu Object chứ ko phải là kiểu null
// đây có thể coi là 1 lỗi của javascript
console.log(typeof isNull);

// Symbol
var id = Symbol('id'); // unique

// Function
// đoạn code bên trong function sẽ không được thực thi
var myFunction = function() {
    alert('hello world');
}
// chỉ hoạt động khi được gọi thì mới được thực thi
myFunction();

// Object
// object có thể chứa rất nhiều loại dữ liệu bên trong: số, chuỗi, thậm chí là 1 mảng
var myObject = {
    name: 'Hoang',
    age: 26, 
    job: 'Developer',
    myFunction: function() {
        
    }
}
console.log(typeof myObject)

// Array
var myArray = ['Javascript', 'java', 'php'];
console.log(typeof myArray)