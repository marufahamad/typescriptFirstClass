const a = "hello world!";


// string, number, Array. null, undefined, bollean, never, unknown
//any

function getLowerCase(str: string) {
    return str.toLowerCase();
}


console.log(getLowerCase("hello"));
console.log(getLowerCase("hello World!"));
console.log(getLowerCase(""));

const b: number = 234;

function add(number1: number, number2: number): number {
    return number1 + number2
}

const subtract = (number1: number, number2: number): number => {
    return number1 - number2;
}

subtract(b, 54);
add(3, 4);
add(54, b);

// Array <T>

const arr2: Array<number | string> = [123, 456, "Maruf"];
const arr: number[] = [123, 456, 789];
const arr1: string[] = ["123", "456", "789"];

type numberAndString = number | string;

const id: numberAndString = 23;

interface IPerson {
    name: string;
    age: number;
    hobby?: string;
}

const person1: IPerson = {
    name: "Tamim",
    age: 22,
    hobby: "Programming"
}

const person2: IPerson = {
    name: "Maruf",
    age: 42,
}

// Enums


enum Colors {
    color1 = '#ededed',
    color2 = '#ededff',
    color3 = '#ededee',
}

console.log(Colors.color1)

 // Generic

// function _concat<T>(a:T, b:T) {
//     return a + b;
// }

// _concat<number>(1,3);
// _concat<string>("Maruf","Ahamad");
