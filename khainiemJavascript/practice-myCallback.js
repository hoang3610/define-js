/**
 * thực hành viết lại 1 hàm callback riêng của mình
 * 
 * foreach, find, filter, some, every, reduce
 * 
 * Có 1 hàm cần lưu ý trong bài này 
 * sử dụng this.hasOwnProperty (index)) => hàm này dùng để kiểm tra kiểm tra 1 một thuộc tính 
 * có tồn tại trong Object hay không => nếu có thì trả về true, còn ngược lai thì là false
 */

// myForeach

Array.prototype.forEach2 = function (callback) {
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
}

var courses = [
    'Java',
    'Php',
    "Ruby"
];

courses.forEach2(function(courses, index, array) {
    console.log(courses, index, array)
})



var books = [
    {
        name: 'Hoc lam giau',
        price: 900
    },
    {
        name: 'Hoc English',
        price: 500
    },
    {
        name: 'Hoc Japanese',
        price: 300
    },
]
//myFilter
Array.prototype.filter2 = function(callback) {
    var output = [];
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if(result) {
                output.push(this[index]);
            }
        }
    }
    return output;
}
var result = books.filter2(function(book, index, array) {
    return book.price > 400;
})

console.log(result);



var sports = [
    {
        name: 'soccer',
        isPaid: false
    },
    {
        name: 'basketball',
        isPaid: false
    },
    {
        name: 'tennis',
        isPaid: false
    },
]
// mySome
Array.prototype.some2 = function(callback) {
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index], index, this)){
                return true;
            }
        }
    }
    return false;
}
var resultSomeFunction = sports.some2(function(sport, index, array) {
    return sport.isPaid === true;
})
console.log(resultSomeFunction);




var sports2 = [
    {
        name: 'soccer',
        isPaid: true
    },
    {
        name: 'basketball',
        isPaid: true
    },
    {
        name: 'tennis',
        isPaid: true
    },
]
// myEvery
Array.prototype.every2 = function(callback) {
    var output = true;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(!callback(this[index], index, this)){
                output = false;
                break;
            }
        }
    }
    return output;
}
var resultEveryFunction = sports2.every2(function(sport, index, array) {
    return sport.isPaid === true;
})
console.log(resultEveryFunction);
