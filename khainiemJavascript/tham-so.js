/**
 * Tham số hàm - Javascript cơ bản
 * 
 * 1. Tham số?
 *      - Định nghĩa ?
 *      - Kiểu dữ liệu?
 *      - Tính private
 *      - 1 tham số
 *      - Nhiều tham số
 * 
 * 2. Truyền tham số
 *      - 1 tham số
 *      - Nhiều tham số
 * 
 * 3. Arguments ?
 *      - Đối tượng arguments
 *      - Giới thiệu vòng lập for
 */

/* Khi mà định nghĩa trong hàm mà mà có gắn 1 biến hay gì vào => vd: function writeLog(message) thì => nó gọi là tham số
   Còn khi mình gọi hàm mà truyền vào 1 giá trị nào đó => thì đó gọi là đối số => ví dụ writeLog('Hello') => đây là đối số
*/

/**
 * Không giới hạn kiểu dữ liệu trong hàm
 */

/* đối số truyền vào hàm => thì tham số đố chỉ sử dụng được trong hàm thôi => nếu cho ra khỏi hàm sẽ không chạy được, bug*/

/**
 * không giới hạn tham số truyền vào 
 */
function writeLog(message1, message2) {
    console.log(message1);
    console.log(message2);
}
writeLog('ms1', 'ms2');

/**
 * - Đối tượng arguments
 * - Giới thiệu vòng lập for
 *  Trong Javascript sử dụng dấu backticks (`) để nhúng biến dễ dàng.
 */

function writeLog() {
    var myString = '';
    for(var params of arguments){
        myString += `${params} - `;
    }
    console.log(myString);
}

writeLog(1, 2, 3);

