/**
 * if - else
 */

/**
 * Những 6 giá trị khi chuyển sang boolean sẽ thành false
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
 */

// Giải thích thêm về kiểu logical và câu điều kiện if else
//toán tử sẽ chạy từ vế trái sang phải
var typeAnd = 'a' && null && 'c'; // chỉ cần trong các vế có 1 vế thuộc trong 6 giá trị chuyển thành false thì nó sẽ gán giá trị chuyển sang false đó cho biến đó luôn mà ko quan tâm đến những vế khác
console.log(typeAnd);
var typeOr = 'a' || 0 || 'c';
console.log(typeOr);// ngược lại với toán tử And thì chỉ cần 1 phần tử không thuộc trong 6 giá trị là false thì nó sẽ gán giá trị đó vô biến luôn mà ko quan tâm đến những vế đằng sau

// Syntax
var fullname = 'Hoang'
if(fullname) {

} else {

}



/* Ví dụ */
// Số chẵn là số khi chia cho 2 sẽ có phần dư là 0
// Số lẻ là số khi chia cho 2 sẽ có phần dư là 1

// Khai báo biến number, và gán trá trị cho biến number
var number = 13;

// Sử dụng toán tử % để lấy ra phần dư của number khi chia cho 2
// Khai báo biến remian ,và gán phần dư cho biến đặt tên là remain
var remain = number % 2

// Sử dụng toán tử so sánh === để thực hiện so sánh biến remain với 1
// Khai báo biến isOdd, và gán kết quả so sánh cho biến isOdd
var isOdd = remain === 1;

// In giá trị của biến isOdd ra cửa sổ console của trình duyệt
console.log(isOdd) // Output: là số lẻ