// function sum(a,b){
//     return a+b
// }

// let sum2 = (a,b) => a + b 


// function isPositive (number){
//     return number >= 0
// }
// let isPositive2 = number => number >=0

// console.log(isPositive(2))

class Person{
    constructor(name){
        this.name = name
    }

    printNameArrow(){
        setTimeout(() => {
            console.log('Arrow: '+ this.name);
        }, 100);
    }

}
let a = new Person("asfasdf")
a.printNameArrow()