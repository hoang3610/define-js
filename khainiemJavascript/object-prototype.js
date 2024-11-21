/**
 * Object prototype - Basic
 * 
 * 1. Prototype là gì ?
 * 2. Sử dụng khi nào ?
 */

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

// Object prototype => có thể add được thuộc tính ở bên ngoài Objec Construtor
// Cách thức thực hiện Object.prototype.thuoctinh = value;
// Ví dụ
User.prototype.className = '5A';
// Cũng có thể tạo được 1 phương thức
User.prototype.getClassName = function() {
    return this.className;// Đối với Object prototype thì chỉ có phương thức mới gọi được thằng this như thế này
}

/* Khi khai báo như thế này thì mới gọi là đối tượng */
var author = new User('Hoang', 'Pham', 'Avatar');
var user = new User('Ty', 'Nguyen', 'Avatar');

console.log(user);// Khi in ra thì thuộc tính sẽ nằm ở [Prototype] ->> thuộc tính className