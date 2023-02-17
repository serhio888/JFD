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
console.log(dictionary.showAllWords())