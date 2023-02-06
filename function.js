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