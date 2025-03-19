let str:string = 'hello world'

str = ''

console.log(str)

const arr:number[] = [1,2,3,4]

for (let item of arr) (
    console.log(item)
)

console.log(arr.slice(0,2))

function sayname(name:string):string{
    return name
}

console.log(sayname("usama"))

let abc;

let acceptableName: "usama" | "akmal" = "usama";

let xyz: number | string = 1;

let value: any = 1;
value = "Usama";
value = new Date();

let array: (number | string)[] = [1, 2,3, ""];
let strArr: Array<string | number> = ["asd", 1];


let employee: [number, string, boolean] = [1, "ABC",false];

// let person: {
//     name: string;
//     yearOfBirth: number;
// } = {
//     name: "Usama",
//     yearOfBirth: 1996
// }

// interface PersonInfo {
//     name: string;
//     yearOfBirth: number;
// }

// interface PersonOtherDetails {
//     country: string;
//     abc?: string;
// }

type PersonInfo = {
    name: string;
    yearOfBirth: number;
}

type PersonOtherDetails =  {
    country: string;
    abc?: string;
}

type Person = PersonInfo & PersonOtherDetails;

const a: Person = {
    name: "Usama",
    yearOfBirth: 1995,
    country: "Pakistan",
}

let persons: Person[] = [
    {
        name: "Usama",
        yearOfBirth: 1995,
        country: "Pakistan"
    },
    {
        name: "Usama",
        yearOfBirth: 1995,
        country: "Pakistan",
        abc: ""
    },
]

// interface Multiply {
//     (a: number, b: number) : number;
// }

type Multiply =  {
    (a: number, b: number) : number;
}

const multiply: Multiply = (a, b) => {
    return a * b;
}