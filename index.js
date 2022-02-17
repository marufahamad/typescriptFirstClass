var a = "hello world!";
// string, number, Array. null, undefined, bollean, never, unknown
//any
function getLowerCase(str) {
    return str.toLowerCase();
}
console.log(getLowerCase("hello"));
console.log(getLowerCase("hello World!"));
console.log(getLowerCase(""));
var b = 234;
function add(number1, number2) {
    return number1 + number2;
}
var subtract = function (number1, number2) {
    return number1 - number2;
};
subtract(b, 54);
add(3, 4);
add(54, b);
// Array <T>
var arr2 = [123, 456, "Maruf"];
var arr = [123, 456, 789];
var arr1 = ["123", "456", "789"];
var id = 23;
var person1 = {
    name: "Tamim",
    age: 22,
    hobby: "Programming"
};
var person2 = {
    name: "Maruf",
    age: 42
};
// Enums
var Colors;
(function (Colors) {
    Colors["color1"] = "#ededed";
    Colors["color2"] = "#ededff";
    Colors["color3"] = "#ededee";
})(Colors || (Colors = {}));
console.log(Colors.color1);
// Generic
// function _concat<T>(a:T, b:T) {
//     return a + b;
// }
// _concat<number>(1,3);
// _concat<string>("Maruf","Ahamad");
