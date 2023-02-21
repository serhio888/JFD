//#1
const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];
const package = document.getElementById('package')
let counter = 0;

package.addEventListener('click',()=>{   
        const name = peopleWaiting.at(0)
        peopleWaiting.shift()
        counter++
        if(counter < 3){
            alert(`${name} получил(а) посылку, в очереди осталось ${peopleWaiting.length} человек`)
        }               
        if(counter === 3){
            alert('К сожалению у нас обеденный перерыв, мы ненадолго закрываемся, успееет еще один человек')
            alert(`${name} получил(а) посылку, в очереди осталось ${peopleWaiting.length} человек`)
            alert('Оставшиеся люди объявляют протест и уходят из очереди')
            for ( const name of peopleWaiting){
                alert(`${name} не получил(а) посылку и ушел(ла) из очереди`)
            }
            peopleWaiting.splice(0)
            alert(`В  очереди ${peopleWaiting.length} человек`)                     
        }      
})

//#2
function getSumOfSequence(number){
    let arr = []
    if ( number < 1 || typeof number !== 'number' ) {
        return alert('Введите целове число больше 0')
    }
    if(number === 1) return 1
    for(let i = 0; i<number;i++){       
        arr.push(i+1)
    }
    console.log(arr)
    return arr.at(0)+arr.at(-1)
}

// //#3
const coffees = ['Latte', 'Cappuccino', 'Americano'];
const coffeeName = prompt('Поиск кофе по названию:')
const index = coffees.findIndex((elem)=>{
   return elem.toLowerCase() === coffeeName.toLowerCase()     
})
if(index === -1){
    alert('к сожалению такого кофе у нас нет')
}else {
    alert(`Держи ваш любимый кофе, он ${index+1} по популярности в нашей кофейне`)   
}

//#4
const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];
const updatedPrices = prices.map(elem=>elem+0.5)
coffees.forEach((elem,ind)=>{
    alert(`Кофе ${elem} сейчас стоит ${updatedPrices.at(ind)} евро`)
})

//#5
let clientsEstimations = [];
function askClientToGiveEstimation(){
    const score = prompt('Как вы оцениваете нашу кофейню от 1 до 10?')
    if(Number(score) >= 1 && Number(score) <=10 ){
        clientsEstimations.push(Number(score))
    }
}

for(let i = 0; i<5; i++){
    askClientToGiveEstimation()
}

alert(`Всего положительных оценок: ${clientsEstimations.filter(elem=>elem>5).length}.
 Всего отрицательных оценок: ${clientsEstimations.filter(elem=>elem <=5).length}`)

//#6
const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;
for(i=0;i<numbers.length;i++){
    sum += numbers[i]**3
}
for(elem of numbers){
    sum += elem**3
}
numbers.forEach((elem)=>{
    sum += elem**3
})

const sum3 = numbers.reduce((acc,cV)=>{
    return acc + cV**3
},0)







