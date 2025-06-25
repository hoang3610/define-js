/**
 * Callback? => có nghĩa là gọi lại
 * 
 * - Là hàm (function) được truyền qua đối số
 * - Khi gọi hàm khác
 * 
 * thoả mãn 2 điều này thì là callback
 * 1. Là hàm
 * 2. Được truyền qua đối số
 */

function myFunction(param) {
    if (typeof param === 'function'){
        param();
    }
}

function myCallback (value) {
    console.log('Value: ', value);
}

myFunction(myCallback('Hoc English'));


