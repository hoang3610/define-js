/**
 * FETCH
 * 
 * API (thông qua url)  --> Application programing interface
 * Gọi là cổng giao tiếp giữa các phần mềm
 * 
 * Backend -> trả về 1 API -> Fetch (gọi api để lấy giữ liệu) -> JSON/XML
 * -> JSON.parse -> Javascript types -> render ra giao diện HTML
 * 
 */

var postAPI = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(postAPI)
    .then(function(res) {
        return res.json();
    })
    .then(function(posts) {
        console.log(posts)
    })