/**
 * Toán tử số học
 *       -->Cộng   
 *       -->Trừ   
 *       -->Nhân   
 *       -->Luỹ thừa   
 *       -->Chia
 *       -->Chia lấy số dư   
 *       -->Tăng 1 giá trị số   
 *       -->Giảm 1 giá trị số
 */

var a = 2
var b = 3
var c = 4
console.log('Tong cong= ' + (a + b));
console.log('Tong tru= ' + (a - b));
console.log('Tong nhan= ' + (a * b));
console.log('Tong chia= ' + (a / b));
console.log('Tong chia lay so du= ' + (a % b));
a++;
console.log('tang 1 gia tri so ' + a);
b--;
console.log('giam 1 gia tri so ' + b);

/**
 * Toán tử ++ giúp tăng giá trị của một biến mang giá trị số lên 1. Có 2 cách để sử dụng toán tử ++ là:
    Dùng làm hậu tố: variable++ (toán tử nằm sau biến)
    Dùng làm tiền tố: ++variable (toán tử nằm trước biến)

    Toán tử - -
    Cách hoạt động tương tự như toán tử ++, điểm khác biệt là thay vì cộng thêm 1, thì toán tử -- sẽ trừ đi 1.

    Tổng kết
    x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
    ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
    x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
    --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảmm
 */