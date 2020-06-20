class Person {
    
    constructor({ name = "John",color = 'black' } = {}) {
        this.name = name;
        this.color = color;
    }

    static changeColor(person,color) {
        person.color = color;
    }

    changeName() {
        return "Named Change"; 
    }
}

let john = new Person();
let mark = new Person('Mark');
let kilt = { 
    "name" : "Lordgape",
    "age" : 21
};

Person.changeColor(john,'Red');
Person.changeColor(mark,'Yellow');


console.dir(john);
console.log('John', john['changeName'](john,'Red'));
console.log('Mark', mark.color);