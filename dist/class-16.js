"use strict";
const isEven = (input) => {
    return input % 2 == 0 ? true : false;
};
const isNumberEven = isEven(3);
// console.log(isNumberEven);
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergeArrays = (array1, array2) => {
    return [
        ...array1,
        ...array2
    ];
};
const bio = (...args) => {
    return args;
};
// console.log(bio("Usama",28, "Karachi"));
const sum = (...args) => {
    return args.reduce((previousValue, currentValue) => {
        console.log(previousValue, currentValue);
        return previousValue + currentValue;
    });
};
// console.log(sum(1,2,4));
const vowelCount = (input) => {
    return Array.from(input).reduce((accumulator, current) => {
        if (['a', 'e', 'i', 'o', 'u'].includes(current.toLowerCase()))
            accumulator += 1;
        return accumulator;
    }, 0);
};
const vowelFrequencyCount = (input) => {
    return Array.from(input).reduce((accumulator, current) => {
        const currentLower = current.toLowerCase();
        if (currentLower == 'a') {
            accumulator['a'] += 1;
        }
        else if (currentLower == 'e') {
            accumulator['e'] += 1;
        }
        else if (currentLower == 'i') {
            accumulator['i'] += 1;
        }
        else if (currentLower == 'o') {
            accumulator['o'] += 1;
        }
        else if (currentLower == 'u') {
            accumulator['u'] += 1;
        }
        return accumulator;
    }, {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    });
};
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
var Province;
(function (Province) {
    Province[Province["GB"] = 0] = "GB";
    Province[Province["KPK"] = 1] = "KPK";
    Province[Province["AJK"] = 2] = "AJK";
    Province[Province["Sin"] = 3] = "Sin";
    Province[Province["Pun"] = 4] = "Pun";
    Province[Province["Bal"] = 5] = "Bal";
})(Province || (Province = {}));
// enum Province { 
//     GB = "Gilgit Baltistan",
//     KPK = "Khyber Pakhtun Khuwan",
//     AJK = "Azad Jammu Kashmir",
//     Sin = "Sindh",
//     Pun = "Punjab",
//     Bal = "Balochistan",
// }
const p = Province[1];
const province = Province.Sin;
console.log(province, p);
const my = "Usama";
if (typeof my === "string") {
    console.log(my.toLowerCase());
}
const throwError_s = (message) => {
    throw new Error(message);
};
const throwError = (message) => {
    if (message != "") {
        throw new Error(message);
    }
    else {
        return "No Message";
    }
};
