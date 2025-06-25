/**
 * Làm việc với Array 2
 * 
 * Methods:
 * 1. forEach()
 * 2. every()
 * 3. some()
 * 4. find()
 * 5. filter()
 * 6. map()
 * 7. reduce()
 * 
 * 8. includes()
 */

var books = [
    {
        id: 1,
        name: 'Hoc Lam Giau',
        price: 100
    },
    {
        id: 2,
        name: 'bitcoin',
        price: 300
    },
    {
        id: 1,
        name: 'Hoc lap trinh',
        price: 500
    }, 
    {
        id: 1,
        name: 'Toan 10',
        price: 100
    }
]

// forEach() --> Dùng để duyệt qua từng phần tử của mảng
books.forEach(function(book, index) {
    console.log(index, book);
})

// every() --> kiểm tra tất cả các phần tử thuộc 1 mảng phải thoả mãn 1 điều kiện nào đó => trả về giá trị boolean
var isFree = books.every(function(book, index) {
    return book.price === 0;
})
console.log(isFree)

// some() --> kiểm tra các phần tử thuộc 1 mảng => chỉ cần 1 phần tử thoả mãn 1 điều kiện nào đó => trả về giá trị boolean
var isFree = books.some(function(book, index) {
    return book.price === 0;
})
console.log(isFree)

// find() --> tìm kiếm --> nếu đúng thì sẽ trả về phần tử tìm kiếm
// Lưu ý hàm find() chỉ tìm kiếm được 1 phần tử thôi
var isFree = books.find(function(book, index) {
    return book.name === 'bitcoin';
})
console.log(isFree)

// filter() --> tìm kiếm --> nếu đúng thì sẽ trả về phần tử tìm kiếm
// Lưu ý hàm filter() có thể tìm được 1 danh sách nếu có phần tử thoả mãn
var isFree = books.filter(function(book, index) {
    return book.price === 100;
})
console.log(isFree)

// map() --> trả về 1 mảng mới có giá trị do chúng ta setup
var newBooks = books.map(function(book) {
    return book;
})
var newBooks1 = books.map(function(book) {
    return {
        id: 1,
        name: 'Toan 10',
        price: 100, 
        coinText: `Gia ${book.price}`
    };
})
console.log(newBooks)

// reduce()
var newBooks = books.reduce(function(book) {
    return book;
}, 0)
console.log(newBooks)

// Flat - làm phẳng mảng từ Deth array - "Mảng sâu"
var depthArray = [1, 2, [3, 4], 6, 6, 7, 8, 9]


// includes 
var title = "Responsive web design"
console.log(title.includes('web', 1))// ->>>includes('từ tìm kiếm', vị trí bắt đầu)


