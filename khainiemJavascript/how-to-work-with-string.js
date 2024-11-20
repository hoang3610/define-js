/**
 * LÀM VIỆC VỚI CHUỖI
 * 
 * Keyword: Javascript string methods
 * 
 * 1. Length
 * 2. Find
 * 3. Cut
 * 4. Replace
 * 5. Convert to upper case
 * 6. Convert to lower case
 * 7. Trim
 * 8. Split
 * 9. Get a character by index
 */

var myString = "Hello My Name is My Hoang <3";
// 1. Length --> lấy độ dài chuỗi
console.log(myString.length);

// 2. Find index --> sử dụng indexof -> chỉ lấy giá trị đầu tiên mà nó tìm được
console.log(myString.indexOf('My'));
// javascript có hỗ trợ hàm lastIndexOf() => để tìm những chuỗi cuối cùng mà nó tìm được và trả về giá trị index
console.log(myString.lastIndexOf('My'));
// Trong indexOf có hỗ trợ giá trị bắt đầu tìm kiếm => ví dụ bên dưới
console.log(myString.indexOf('My', 8));

// 3. Cut string --> cắt chuỗi tìm được
// slice(giá trị bắt đầu, giá chị kết thúc) -> vd: slice(6, 8); slice(6) -> sẽ lấy từ vị trí 6 đến hết
// slice muốn tìm từ phải qua thì giá trị bắt đầu để số âm là được slice(-4)
console.log(myString.slice(6));

// 4. Replace
// Biểu thức chính quy là gì?
console.log(myString.replace('Hoang', 'Ty'));

// 5. Convert to upper case
console.log(myString.toLocaleUpperCase());

// 6. Convert to lower case
console.log(myString.toLocaleLowerCase());

// 7. Trim --> Loại bỏ những khoảng trăng users nhập vào
console.log(myString.trim());
console.log(myString.trim().length);

// 8. Split --> Cắt 1 cái chuỗi thành 1 array
var languages = "Java, php, Ruby, Nodejs, React";
console.log(languages.split(', '))

// 9. Get a character by index
var myString2 = "This is my String 2";
console.log(myString2.charAt(5))