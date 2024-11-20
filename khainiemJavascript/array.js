/**
 * Mảng trong javascript - Array
 * 1. Tạo mảng
 *      - Cách tạo
 *      - Sử dụng cách nào? Tại sao?
 *      - Kiểm tra data type?
 * 
 * 2. Truy xuất mảng
 *      - Độ dài mảng
 *      - Lấy phần tử theo index
 */

var colors = [
    'orange', 
    'red',
    'blue',
    'dark red',
    'purple'
]

// kiểm tra kiểu dữ liệu 
console.log(typeof colors);
// mảng và object khi typeof ra thì đều là object nên không thể biết được cái nào mảng cái nào là object
// sử dụng Array.isArray(truyền vào tham số mảng) để check => giá trị trả về là boolean
console.log(Array.isArray(colors));

// Độ dài mảng
console.log(colors.length);

// Lấy phần tử theo index
// array[truyền vào chỉ mục hay còn gọi là index]
console.log(colors[2]);