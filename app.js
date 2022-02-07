const input = document.querySelector("input");
const btn = document.querySelector("button");
const para = document.querySelector("p");

function Person(first, last , age, gender , interests) {
    this.name = {
        first: first, 
        last: last
    }, 
    this.age = age;
    this.gender = gender;
    this.interests = interests;

}

Person.prototype.greeting = function(){
    alert("Hi I/'m" + this.name.first + ".");
}


Person.prototype.bio = function(){
    alert(this.name.first + " " + "Interests in  " + this.interests )
}

function Teacher(first, last , age , gender, interests, subject, phone, car) {
    Person.call(this, first , last , age, gender, interests);
    this.subject = subject;
    this.phone = phone;
    this.car = car;



}


Teacher.prototype = Object.create(Person.prototype)

Object.defineProperty(Teacher.prototype, 'constructor', {
    value: Teacher,
    enumerable: false, // false, чтобы данное свойство не появлялось в цикле for in
    writable: true

});


Teacher.prototype.greeting = function() {
    var prefix;
  
    if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
      prefix = 'Mr.';
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
      prefix = 'Mrs.';
    } else {
      prefix = 'Mx.';
    }
  
    alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};



function Zoo (name , size, numbersOfAnimals, employers) {
    this.name = name;
    this.size = size;
    this.numbersOfAnimals = numbersOfAnimals;
    this.employers = employers;


}


Zoo.prototype.greeting = function() {
    alert(this.name + " " + "Hello , We're glad to meet you");
}




//Example of function.call()

// function Brick () {
//     this.width = 10;
//     this.height = 20;


// }

// function blueGlassBrick() {
//     Brick.call(this);

//     this.opacity = 0.5;
//     this.color = 'blue';


// }



// var person1 = new Teacher ("Sarah", "Louern " , 24, "female" , ["art", "computer science", "collector"], 'ART', '01298914', 'BMW')
var teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics', '412312492','Toyota');
var teacher2 = new Teacher('Tyler', 'Smith', 23, 'male', ['casino', 'skiing '], 'ART', '123912391');
var teacher3 = new Teacher('Robert', 'Braune', 21, 'male', ['basketball', 'skate'], 'history');

var zoo1 = new Zoo('zoo1', 'medium', 40, 120);
var zoo2 = new Zoo('zoo2', 'small', 15, 30);
var zoo3 = new Zoo('zoo3', 'big', 80, 150);

