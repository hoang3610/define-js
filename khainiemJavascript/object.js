/**
 * Object trong javascript
 * 
 * Cách khai báo mảng bằng cách đơn giản là dấu {}
 * Bên trong {} sẽ là key và value cú pháp sẽ như bên dưới
 * {
 *      key: "bên trong sẽ là value"
 * }
 * 
 */
// Vd: cú pháp
var myInfo = {
    name: 'Van Hoang',
    age: 25,
    job: 'developer'
};

console.log(myInfo);

// Muốn thêm key-value mới vào Object đã được tạo thì ta thao tác như sau
myInfo.email = 'hoang3610@gmail.com';
// Or sử dụng cách sau
myInfo['gender'] = 'male';
console.log(myInfo);

// Lấy value ra ngoài thì ta sử dụng cách sau
console.log(myInfo.name);
console.log(myInfo['age']);

// xoá key trong Object bằng cách như sau
delete myInfo.job;
console.log(myInfo);


var myInfo2 = {
    name: 'Van Hoang',
    age: 25,
    job: 'developer',
    getName: function() {
        return this.name;
    }
};
// Thêm key-value là 1 function
// Giải thích this trong Object myInfo2 => thực chất this.name cũng giống như myInfo2.name thôi => ko cần care lắm
// Để lấy được function trong Object ta làm như sau => chúng ta phải gọi tới function đó thì mới lấy được
console.log(myInfo2.getName());
// Thống nhất cách gọi trong Object
// Nếu trong Object là 1 Function       ---> Phương thức (hay còn gọi là method)
// Nếu trong Object là những thằng khác ---> Thuộc tính (hay còn gọi là property)


