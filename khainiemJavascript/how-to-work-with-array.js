/**
 * Làm việc với Array
 * 
 * 1. To string
 * 2. Join
 * 3. Pop
 * 4. Push
 * 5. Shift
 * 6. Unshift
 * 7. Splicing
 * 8. Concat
 * 9. Slicing
 */

var languages = [
    'English', 
    'French',
    'Vietnames',
    'Spanish'
]

// To string => chuyển dữ liệu từ Array sang String => cách nhau bằng dấu phẩy
console.log(languages.toString());

//  Join => chuyển dữ liệu từ Array sang String => có thể thay đổi dấu phẩy bằng một kí tự được chuyền vào
console.log(languages.join(' '));

var languages1 = [
    'English', 
    'French',
    'Vietnames',
    'Spanish'
]
// Pop => xoá đi phần tử cuối mảng => và trả về chính thằng đã xoá
console.log(languages1.pop());

var languages2 = [
    'English', 
    'French',
    'Vietnames',
    'Spanish'
]
// Push => thêm một hoặc nhiều phần tử cuối mảng => và trả về độ dài của mảng mới
console.log(languages2);
console.log(languages2.push('Japanese'));
console.log(languages2.push('Chinese', 'German', 'Hindi'));
console.log(languages2);

var languages3 = [
    'English', 
    'French',
    'Vietnames',
    'Spanish'
]
// Shift => xoá đi phần tử đầu mảng => và trả về chính thằng đã xoá
console.log(languages3.shift());

var languages4 = [
    'English', 
    'French',
    'Vietnames',
    'Spanish'
]
// Unshift => thêm một hoặc nhiều phần tử đầu mảng => và trả về độ dài của mảng mới
console.log(languages4);
console.log(languages4.unshift('Japanese'));
console.log(languages4.unshift('Chinese', 'German', 'Hindi'));
console.log(languages4);

// Splicing


// Concat
// Slicing