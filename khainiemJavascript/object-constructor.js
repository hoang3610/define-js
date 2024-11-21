/**
 * Object Constructor => xây dựng đối tượng
 * 
 * Quy ước khi viết Object Constructor --> Viết hoa các chữ cái đầu của tên Object Constructor
 */
/* Thây chỉ là 1 bản thiết kế --> không phải đối tượng*/
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

/* Khi khai báo như thế này thì mới gọi là đối tượng */
var author = new User('Hoang', 'Pham', 'Avatar');
var user = new User('Ty', 'Nguyen', 'Avatar');

console.log(author.getName())
console.log(user.getName())
