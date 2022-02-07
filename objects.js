const person = {
    name: {
        first: "Bob",
        second: "Smith"
    },
    age: 32,
    gender: "male",
    interest: ["music", "skiing"],
    bio: function(){
        alert(this.name.first + " " + this.name.second + " is " + this.age + " years old. He likes " + this.interest[0] + " and " + this.interest[1] + ".") 
    }, 
    greeting: function(){
        alert("Hi! I\'m " + this.name.first + ".")
    }
}; 


let myDataName = "height";
let myDataValue = "1.75m"


person[myDataName] = myDataValue;


let myFootSize = "size";
let myDataValue1 = "39";

person[myFootSize] = myDataValue1



let numberOfPhones = "numberofphones";
let myDataValue3 = "1"

person[numberOfPhones] = myDataValue3;