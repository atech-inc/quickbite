// // DEFAULT WAY
// const car = {
//     name : "toyota",
//     model : 2015,
//     color : "white"
// }


// ///EMPTY OBJECT
// const person = {}

// person.height = 150
// person.complextion = "brown"
// person.weight = 100

// console.log(person.height) //FIRST WAY
// console.log(person["height"])// SECOND WAY


// ///NEW OBJECT//////
// const student = new Object({
//    department : "software",
//    gpa : 3.5,
//    school : "nile"
// })


// console.log(student.department)



// // console.log(car.name) //Correct way
// // console.log(car["name"]) /// Cotrrect way

// // console.log(car[name])///WRONG WAY






////FUNCTIONS DECLARATION 
function sum(a, b){
    return  a + b
}

// console.log(sum(2, 3))


//FUNCTION EXPRESSION////
const sumNum = function(a, b){
    return a + b
}

console.log(sumNum(3,5))


const car = {
    name : "toyota",
    model : 2015,
    color : "white",
    fullcar : function(){
       return  car.name + " " + car.model + " " + car.color
    }
}

console.log(car.fullcar())


//ARROW FUNCTION/////////

const sub = (a, b) =>{
    return a - b
}

console.log(sub(4,6))


function check(n){
  if(n % 2 == 0){
    return "Even number"
  }else{
    return "Odd number"
  }
}

console.log(check(5))



function upper(str){
    return str.toUpperCase()
}

console.log(upper("auta"))

const Upper = function(str){
    return str.toUpperCase()
}
console.log(Upper("james"))






/// WE RUN A FUNCTION BY CALLLING OUT THE NAME OF THAT FUNCTION
// ARGUMENTS ARE VALUES PASSED IN OUR FUNCTION

// let a = 2
// let b = 4
// let c = a + b