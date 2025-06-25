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

var languages5 = [
    'English', 
    'French',
    'Vietnames',
    'Spanish'
]
// Splicing => có thể xoá, cắt hoặc có thể chèn vào mảng
// Xoá => sau khi xoá sẽ trả về mảng đã xoá
languages5.splice(1, 2);// đặt con trỏ vào vị trí 1, số phần tử muốn xoá 2 => sau khi xoá sẽ còn ['English', 'Spanish']
// Chèn => Chèn thêm vào vị trí nào đó ở trong mảng
languages5.splice(2, 0, "Japanese");// mảng trả về Japanese sẽ đứng trước vị trí Vietnames
console.log(languages5);

var languages7 = [
    'English', 
    'French'
]
var languages8 = [
    'Vietnames',
    'Spanish'
]
// Concat => nối array lại với nhau
console.log(languages7.concat(languages8)); // 2 cái mảng sẽ được hợp nhất vào cái mảng gọi đến phương thức concat => languages7

var languages9 = [
    'English', 
    'French',
    'Vietnames',
    'Spanish'
]
// Slicing => cắt 1 vài element của mảng
console.log(languages9.slice(1, 3)); // đang cắt để lấy mảng ['french', 'Vietnames']
console.log(languages9); // mảng trên đã cắt nhưng không làm thay đổi mảng ban đầu ['English', 'French', 'Vietnames', 'Spanish'] 