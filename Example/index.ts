

//#8.1 Introduction to Typescript
//before
// const puls = (a, b) => a + b;
// console.log(puls(1, 2));
const puls = (a:number, b:number) => a + b;
console.log(puls(1, 2));

//#8.2 Introduction to Typescript part Two
let hello: string = "hello";
hello = "";

const greet = (name: string, age:number): string => {
    return `Heelo ${name} you are ${age} years old`;
    //return 11 x
}

console.log(greet("aaa", 14));

const human = {
    name: "aa",
    age: 13,
    hungry:true
}

const lynn = {
    name: "bb",
    hungry:true
}

interface IHuman{
    name: string;
    age?: number;
    hungry: boolean;
}

const helloToHuman = (human: IHuman) => {
    console.log(`Hello ${human.name} your are ${human.age} years old`);
}

helloToHuman(human);
helloToHuman(lynn);