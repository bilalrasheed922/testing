// function abc(a){
//     console.log("ola"+ " " + a);
// }
// abc("salam");
// abc("hello");

// function abc(firstName,lastName)
// {
//     var fullName = firstName + " " + lastName;
//     return fullName;

// }
// abc("saim","xxxx");

// function abc(num1,num2,operator){
 
//     if(operator=="+")
//     {
//         var calculatednum = num1 + num2;
//         return calculatednum;
//     }
//     else if(operator=="-")
//     {
//         var calculatednum = num1 - num2;
//         return calculatednum;
//     }
//     else if(operator=="*")
//     {
//         var calculatednum = num1 *  num2;
//         return calculatednum;
//     }
//     else if(operator=="%")
//     {
//         var calculatednum = num1 % num2;
//         return calculatednum;
//     }
//     else{console.log("sahi value likh");}
// }       
// var a=abc(2,4,"+");
// console.log(a);

//=============LOCAL AND GLOBAL VARIABLES=========
// var b="jbhb";
// function abc()
// {
//     var a = "hello";
//     console.log(b);
//     console.log(a);
// }
// abc();

var a = "hello";  //global variable
function abc()
{
    var b = "bilal bin rasheed"   //local variable  (global var function k andr b kam krta h or bhr b lekin local variable funtion k bhr kam nhi krta)
    a = "hello world";
}
abc();
console.log(a);




