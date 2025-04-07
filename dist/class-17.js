"use strict";
// // const _str: string = 'I am learning JavaScript, We can build web app using Javascript.';
// // // const regex: RegExp = /(JavaScript)|(learn(ing){0,3})/gi
// // const regex: RegExp = /JavaScript/gi;
// // // const _result: boolean = regex.test(_str); 
// // // const _result: string = _str.replace(regex, "Python");
// // // const _result = _str.split(regex);
// // const _result = _str.search(regex);
// // console.log(_result);
// const spinalCase = (str: string) => {
//     const strLower = str.toLowerCase();
//     const regex = /\s|_/gi;
//     return strLower.replace(regex, "-");
// }
// console.log(spinalCase("This Is Spinal Tap"))
// console.log(spinalCase("The_Andy_Griffith_Show"));
const parentFn = (a, b) => {
    debugger;
    return () => {
        debugger;
        return a + b;
    };
};
const childFn = parentFn(1, 2);
console.log(childFn());
