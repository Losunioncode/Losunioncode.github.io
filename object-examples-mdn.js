function Person(first, last, age, gender, interests) {
    this.name = {
        first: first, 
        last: last
    }, 
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        if(this.gender === "male"){
            alert(this.name.first+ " " + this.name.last + this.age + " " + this.gender + " " + "He likes " + this.interests);

        }else {
            alert(this.name.first+ " " + this.name.last + this.age + " " + this.gender + " " + "She likes " + this.interests);
        }
    };
    this.greeting = function() {
        alert("Hi I\'m " + this.name.first + ".");
    };

    


}

Person.prototype.farewell = function() {
    alert(this.name.first + " has left the building. Bye for now! ");
}






let person1 = new Person("Sarah", "Louern " , 24, "female" , ["art", "computer science", "collector"])
let person2 = new Person("Mark", "Will " , 25 , "male" , ["basketball", "tennis", "skiing"])
let person3 = new Person("Elena", "Larunce", 22, "female" , ["design", "skater", "architectur"])


