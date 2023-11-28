// 01
// console.log(a); // undefined
// var a = 5;


// 02
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 3;


// 03
// console.log(2 + "2" - 1); // 21


// 04
// JS JSON
// let text =
//   '{ "employees" : [' +
//   '{ "firstName":"John" , "lastName":"Doe" },' +
//   '{ "firstName":"Anna" , "lastName":"Smith" },' +
//   '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
// const jsonobj = JSON.parse(text);
// console.log(jsonobj.employees[0].firstName);             // John


// 05
// const values = [9,22,14,78];
// for (var i = 0; i < values.length; i++);{
//   console.log(`Value logged is ${values[i]}`) // undefined
// }


// 06
// for(let x = 1; x < 9; x++){
// console.log(x);
// }


//--------- 07
// var value = "Javascript challenges you!";

// var outputFirst = calling(value, "");
// // console.log(outputFirst);

// var outputSecond = calling(outputFirst, " ");
// console.log(outputSecond)

// function calling(string, item) {
//   return string.split(item).reverse().join(item);
// }


//------------- 08
// var values =  [5,7,3,9,10,9];
// values.splice(0, values.length);
// console.log(values)


//------------- 09
// var fruit = "Mango";
// var color = "Blue";

// console.log(calling(fruit, color)); 

// function calling(val, item) {
//   var j = val.toLowerCase();
//   j = j.split("").sort().join("");
  
//   var k = item.toLowerCase();
//   k = k.split("").sort().join("");

//   return !(j === k);
// }



//-------------------- 10
// function getAge(...args){
//     console.log(typeof args);    //-- object
// }
// getAge(32);

// console.log(typeof [5, 6, 7]);    //-- object


//--------------------- 11
// for(var i = 0; i < 10; i++){
//     setTimeout(() => console.log(i), 0);
// }
/*
সেট-টাইমআউট হচ্ছে একটা এসিন্ক্রোনাস টাস্ক,এখানে যদি সময় ০ সেকেন্ডও দেওয়া থাকে তাহলেও এটা এসিন্ক্রোনাস ওয়ে তেই কাজ করবে।
আর for loop হচ্ছে সিন্ক্রোনাস টাস্ক,তাই এটি নরমালি এক্সিকিউটিভ হয়ে যাবে।
এটা এক্সিকিউটিভ হওয়া শেষ হলে এসিন্ক্রোনাস টাস্ক আসবে কল স্টাকে।আর ততক্ষণে লুপ শেষ হয়ে যাবে এবং লুপের বাহিরে গিয়ে প্রথমে ১০ প্রিন্ট করবে এবং আর ইনক্রিমেন্ট হবে না তাই পরবর্তীতে সবগুলো ১০ প্রিন্ট হবে।
*/


//---------------------- 12
// console.log(-false);


// --------------------------13
// console.log(!"hello");
// console.log(!!"hello");


// -----------------------14
/*
function show(){
    console.log(show.age);
}
show(); // undefined
show.age = 100;
show() // 100
show.age = 500;
show.age = 600;
show(); // 600
*/

