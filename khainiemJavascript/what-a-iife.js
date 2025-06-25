/**
 * IIFE là gì 
 * Viết tắt của - Immediately Invoked Function Expression
 * 
 * => 1 function expression được gọi ngay tức thì
 * 
 * 
 */

// Trông như thế nào -> OK
(function() {
    console.log('Now')
})()

// Dùng dấu ; trước IIFE -> OK

let name = "Van Hoang"

;(function() {
    console.log('Now')
})()

// IIFE là hàm "private"
