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
console.log(student);

