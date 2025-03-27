const isEven = (input: number): boolean => {
    return input % 2 == 0 ? true : false;
};


const isNumberEven = isEven(3);

// console.log(isNumberEven);

const arr1: number[] = [1,2,3];
const arr2: number[] = [4,5,6];



const mergeArrays = (array1: number[], array2: number[]): number[] => {
    return [
        ...array1,
        ...array2
    ];
}

// console.log(mergeArrays(arr1,arr2));

type BioType = string | number;

const bio = (...args: BioType[]) => {
    return args;
}

// console.log(bio("Usama",28, "Karachi"));

const sum = (...args: number[]): number => {
    return args.reduce((previousValue, currentValue) => {
        console.log(previousValue, currentValue);
        return previousValue + currentValue;
    });
}

// console.log(sum(1,2,4));

const vowelCount = (input: string): number => {
    return Array.from(input).reduce((accumulator, current) => {
        if (['a','e','i', 'o','u'].includes(current.toLowerCase())) 
            accumulator += 1;
        return accumulator;
    }, 0);
}

// console.log(vowelCount("aeroplane"));

type VowelFrequencyType = {
    a: number;
    e: number;
    i: number;
    o: number;
    u: number;
}

const vowelFrequencyCount = (input: string): VowelFrequencyType => {
    return Array.from(input).reduce((accumulator, current) => {
        const currentLower = current.toLowerCase();
        if(currentLower == 'a'){
            accumulator['a'] += 1;
        } else if(currentLower == 'e'){
            accumulator['e'] += 1;
        } else if(currentLower == 'i'){
            accumulator['i'] += 1;
        } else if(currentLower == 'o'){
            accumulator['o'] += 1;
        } else if(currentLower == 'u'){
            accumulator['u'] += 1;
        }
        return accumulator;
        
    }, {
        a:0,
        e:0,
        i:0,
        o:0,
        u:0
    });
}

const result = vowelFrequencyCount("aeroplane");
// console.log(result);

// localStorage.setItem("vowelsCount", JSON.stringify(result));

// const resultFromLocalStorage = localStorage.getItem("vowelsCount");

// if (resultFromLocalStorage !== null) {
//     const parsedJson = JSON.parse(resultFromLocalStorage);
//     console.log(parsedJson);
// }

// const r = confirm("Do you want to add value in sessionStorage");

// if (r) {
//     sessionStorage.setItem("check", "asdasd")
// }


enum Province { 
    GB,
    KPK,
    AJK,
    Sin,
    Pun,
    Bal,
}
// enum Province { 
//     GB = "Gilgit Baltistan",
//     KPK = "Khyber Pakhtun Khuwan",
//     AJK = "Azad Jammu Kashmir",
//     Sin = "Sindh",
//     Pun = "Punjab",
//     Bal = "Balochistan",
// }
const p: string = Province[1]
const province: Province = Province.Sin;

console.log(province, p)

interface A {
    name: "sadas"
}

const my: unknown | A = "Usama";

if (typeof my === "string") {
    console.log(my.toLowerCase());
}

const throwError_s = (message: string) => {
    throw new Error(message);
}


const throwError = (message: string): string | never => {
    if (message != "") {
        throw new Error(message);
    } else {
        return "No Message";
    }
}