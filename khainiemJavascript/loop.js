/**
 * Vòng lặp - Loop
 * 
 * Vòng lặp for ... in --> dùng vòng lập này để lấy ra key của những đối tượng (có thể áp dụng cho đối tượng)
 * Vòng lặp for ... of --> lấy ra phần tử của mảng
 */

// for .. in
var myInfo = {
    name: 'Hoang',
    age: 25,
    address: 'Go Vap'
}
var languages = [
    'English',
    'VietNamese',
    'Japanese',
    'Chinese'
]
for (var key in languages){
    console.log(languages[key]);
}

for (var key of languages){
    console.log(key);
}