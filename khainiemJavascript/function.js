/**
 * Hàm trong javascript
 * 
 * 1. Hàm?
 *      - Một khối mã
 *      - Làm 1 việc cụ thể
 * 
 * 2. Loại hàm
 *      - Built-in
 *      - Tự định nghĩa
 * 
 * 3. Tính chất
 *      - Không thực thi khi nó được định nghĩa
 *      - Sẽ được thực thi khi được gọi
 *      - Có thể nhận tham số
 *      - Có thể trả về 1 giá trị
 * 
 * 4. Tạo hàm đầu tiên
 */

/* LƯU Ý: Cách đặt tên hàm 
   Tên hàm có thể chứa chữ cái từ a-z thường
   Tên hàm có thể chứa chữ cái từ A-Z hoa
   Tên hàm có thể chứa số 0-9
   Tên hàm có thể chứa dấu _
   Tên hàm có thể chứa dấu $
   KHÔNG ĐƯỢC đặt số ở đầu tiên

   Tham khảo thêm những cách đặt tên cho biến, hàm, mảng, object
*/

function showDialog() {
    // code
    alert("Hello world!!!");
}


// Để thực thi hàm mình gọi hàm thì viết ra tên hàm rồi dùng toán tử call or ()
showDialog();

/**
 * Một số điều cần biết thêm về function
 * 
 * 1. Khi funciton đặt trùng tên ?
 * 2. Khai báo biến trong hàm ?
 * 3. Định nghĩa hàm trong hàm ?
 */

// Khi function đặt trùng tên nó sẽ ưu tiên lấy function ở sau cùng => hoặc sẽ báo bug để biết bị trùng function

// Phạm vi của biến nếu định nghĩa trong hàm thì sẽ sử dụng được trong hàm thôi không thể in trực tiếp ở bên ngoài

// Phạm vi của hàm nếu định nghĩa trong hàm thì cũng sẽ chỉ sử dụng được ở trong hàm đó thôi không thể in trực tiếp ở bên ngoài


