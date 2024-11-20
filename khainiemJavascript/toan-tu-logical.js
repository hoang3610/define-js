/**
 * Toán tử logic
 * 1. && - And
 * 2. || - Or
 * 3. ! - Not
 */

var a = 1;
var b = 2;
var c = 3;

// AND
/* Chỉ đúng => khi và chỉ khi tất cả các vế đều đúng, còn lại
đều là false
*/
if(b>a && c>a){
    console.log('dieu kien dung');
}

// OR
/* Chỉ đúng => khi và chỉ khi 1 trong các vế đúng, nếu tất cả 
các vế đều sai thì là false
*/
if(b>a || c<a){
    console.log('dieu kien dung');
}

// NOT
/* là phủ định của vế
*/
if(!(c<a)){
    console.log('dieu kien dung');
}