//#1
function getName1(name){
    return `you name ${name}`
}

const getName2 = function(name){
    return `you name ${name}`
}

const getName3 = name => `you name ${name}`

console.log(getName1('serg'))
console.log(getName2('serg'))
console.log(getName3('serg'))

//#2
function getSumOfNumbers(number, type="odd"){
    let sum = 0;
    if(typeof number != "number") return NaN
    if(type === "even"){
        for(let i = 0; i<=number; i++){
            i%2 === 0 ? sum+=i : null
        }
    }
    if(type === ''){
        for(let i=0;i<=number;i++){
            sum +=i
        }
    }
    if(type === "odd"){
        for(let i = 0; i<=number; i++){
            i%2 != 0 ? sum+=i : null
        }
    }

    return sum
}

//#3
function getDivisorsCount(number){
    let divisors = 0
    if(typeof number != "number") return NaN
    if(!Number.isInteger(number) || number < 0) {
        return alert("number должен быть целым числом и больше нуля!")
    }
    for(let i = 0; i<=number; i++){
        number%i === 0 ? divisors++ : null
    }
    return divisors
}


 
