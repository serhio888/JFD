//task#1
// function Student(name, age) {
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = 'Junior';

//     this.setTechnologies = function(technologies) {
//       this.technologies = [
//         ...this.technologies,
//         ...technologies,
//       ];
// 	}
//     this.setNewStatus = function(newStatus) {
//       this.status = newStatus;
//     }
// }
class Student {
    constructor(name,age){
        this.name = name,
        this.age = age,
        this.technologies = [],
        this.status = 'Junior'
    }

    setTechnologies(technologies){
        this.technologies = [...this.technologies, ...technologies]
    }
    setNewStatus(newStatus){
        this.status = newStatus
    }

}

const student = new Student ('Serg', 34);
student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ,'React']);
student.setNewStatus('Junior+');
//console.log(student);

class Person {
    constructor(name,age){
        this.name = name,
        this.age = age
    }

    compareAge(person){
       if(this.age >= person.age){
        console.log(this.name + ' старше чем ' + person.name)
       }else{
        console.log(this.name + ' младше чем ' + person.name)
       }
       
    }
}

const person1 = new Person('Максим', 24);
const person2 = new Person('Светлана', 36);
const person3 = new Person('Ирина', 23);

// person1.compareAge(person2); 
// person2.compareAge(person3); 
// person3.compareAge(person1);

//#3

class Dictionary {
    constructor (name){
        this.name = name,
        this.words = {}
    }

    add(word,description){
        if(!(word in this.words)){
            this.words[word] = {           
                word,description                    
            }
        }            
    }
    remove(word){
        delete this.words[word]
    }
    get(word){
        return this.words[word]
    }
    showAllWords(){
        const wd = Object.entries(this.words).map((el)=>{
            return el[1]['word'] + '-' + el[1]['description']
        })
       return console.log(wd.join(', '))
    }
}

const dictionary = new Dictionary('Языки программирования')
dictionary.add('js','Самый лучший язык программирования')
dictionary.add('GO','язык программирования разработанный в Google')
dictionary.add('GO','язык разработанный в Google')
//console.log(dictionary)
dictionary.remove('GOO')
//console.log(dictionary.showAllWords())

//#4

class HardWordsDictionary extends Dictionary {
    constructor(name){
        super(name)
    }
    add(word,description){
        if(!(word in this.words)){
            this.words[word] = {           
                word,
                description,
                isDifficult: true                    
            }
        }            
    }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
    
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');   
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.'); 
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');  
hardWordsDictionary.remove('неологизм');   
hardWordsDictionary.showAllWords();
console.log(hardWordsDictionary)

//#5

class Developer {
    constructor(fullName,age,position){
        this.fullName = fullName,
        this.age = age,
        this.position = position
        this.technologies = []
    }

    code(){

    }

    learnNewTechnologies(technology){
        this.technologies.push(technology)
    }


}

class JuniorDeveloper extends Developer {
    constructor(fullName,age){
        super(fullName,age,"Junior")
        this.technologies = ['HTML', 'CSS', 'JavaScript']
    }

    code(){
        return console.log('Junior разработчик пишет код...')
    }
}
class MiddleDeveloper extends Developer {
    constructor(fullName,age){
        super(fullName,age,"Middle")
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React']
    }
    code(){
        return console.log('Middle разработчик пишет код...')
    }
}

class SeniorDeveloper extends Developer  {
    constructor(fullName,age){
        super(fullName,age,"Middle")
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']
    }
    code(){
        return console.log('Senior разработчик пишет код...')
    }
}

const juniorDeveloper = new JuniorDeveloper('Анастасия', 20);
const middleDeveloper = new MiddleDeveloper('Игорь', 25);
const seniorDeveloper = new SeniorDeveloper('Максим', 30);

juniorDeveloper.code();
middleDeveloper.code(); 
seniorDeveloper.code();

seniorDeveloper.learnNewTechnologies('Docker');
console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position, juniorDeveloper.technologies); 
console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position, middleDeveloper.technologies);
console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position, seniorDeveloper.technologies); 