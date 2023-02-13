//#1
const student = {
    stack:['HTML'],
    level:1,
    improveLevel: function(){
        this.level++
        if(this.level === 2){
            this.stack.push('CSS')
            return this
        }
        if(this.level === 3){
            this.stack.push('JavaScript')
            return this
        }
        if(this.level === 4){
            this.stack.push('React')
            return this
        }
        if(this.level === 5){
            this.stack.push('NodeJS')
            return this
            
        }
        if(this.level > 5){
            console.log('Студент выучил все технологии!')
            this.level = 5
            return this
        }
    }
}

console.log(student.improveLevel().improveLevel().improveLevel().improveLevel().improveLevel())

//#2
const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
       return 'Гав-Гав';
    }
 }
 
 const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() { 
       return 'Чик-чирик';
    }
 }
 function makeDomestic(isDomestic) {
    console.log(this.type + ' по имени ' + this.name + ' говорит ' + this.makeSound())
    this.isDomestic = isDomestic
    return this
 }
 const animal = makeDomestic.bind(dog)
 console.log(animal(true))
 console.log(makeDomestic.call(bird,false))
 console.log(makeDomestic.apply(bird,[false]))