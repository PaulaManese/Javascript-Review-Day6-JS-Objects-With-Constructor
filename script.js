console.log ("connected");
//CRUD Operation
//C - Create

let gino = {
    firstGrading: 95,
    subject: "English",
    teachers: ["Jelly", "Kai", "Alfren"],
    isStudent: true, //whenever we assigned a boolean always start with the word "is"
    school: {
        city: "Manila",
        country: "Philippines"
    },
    classmates:[
        {
            name: "Regie",
            batch: "12"
        },
        {
            name: "Lalaine",
            batch: "9"
        },
        {
            name: "Paul",
            batch: "11"
        }
    ],

    description: function () {
        return `${this.subject}:${this.firstGrading}`
    }
}

//R - Read/View

//Q: How do we access properties in an object?
//through dot (.) notation
//through bracket ([""]) notation
//syntax: objectName.propertyName
//we can use both notation altogether
//we can use 2 same notation together

console.log(gino.firstGrading);//95
console.log (gino.subject); //English

console.log(gino['isStudent']); //true
console.log(gino ['teachers']); //array
console.log(gino.teachers); //array

console.log(gino['teachers'][2]); //Alfren - specified index
console.log(gino.teachers[2]); //Alfren - combination of dot and bracket notation is also applicable when accessing properties within the object

console.log (gino.school); //object
console.log (gino['school']); //object

console.log(gino.school["city"]);//Manila
console.log(gino['school']['city']); //Manila
console.log (gino.school.city); //2 or more dot notation is also applicable when accessing properties within the object.

//How to access school's country?
console.log(gino['school']['country']);

console.log(gino.classmates); //array of an object
console.log(gino['classmates']); //array of an object

console.log(gino.classmates[1]); //2nd object
console.log(gino ['classmates'][1]); //2nd object

console.log(gino.classmates[1].name); //Lalaine
console.log(gino ['classmates'][1]['name']); //same output on above Lalaine
console.log(gino ['classmates'][1].name); //same output on above Lalaine

//How do we access the function in gino object?
console.log(gino.description()); //execute the function

console.log(gino.description); //displays the defined function but it did not execute what was written inside the function

//How to add a property in an object with a property name semester?
//Update
console.log(gino.semester); //undefined
gino.semester = "first"; //first approach
console.log(gino);

console.log (gino["semester"] = "second"); //second approach
console.log (gino);

//How to remove/delete a property in an object?
//D - Delete
delete gino.semester;
console.log(gino);

const studentGrades = [

    {
        studentId: 1,
        Q1: 89.3,
        Q2: 91.2,
        Q3: 93.3,
        Q4: 89.8
    },

    {
        studentId: 2,
        Q1: 69.2,
        Q2: 71.3,
        Q3: 76.5,
        Q4: 81.9
    },

    {
        studentId: 3,
        Q1: 95.7,
        Q2: 91.4,
        Q3: 90.7,
        Q4: 85.6 
    },

    {
        studentId: 4,
        Q1: 86.9,
        Q2: 74.5,
        Q3: 83.3,
        Q4: 86.1
    },

    {
        studentId: 5,
        Q1: 70.9,
        Q2: 73.8,
        Q3: 80.1,
        Q4: 81.8
    }

];

//SOLUTION 1: Manual Computation

let ave1 = 
(
    studentGrades[0].Q1 + 
    studentGrades[0].Q2 +
    studentGrades[0].Q3 +
    studentGrades[0].Q4
) / 4;

console.log(studentGrades[0].average); //undefined
studentGrades[0].average = ave1; //displays result for student whose variable is ave1
console.log(studentGrades[0].average); //90.9
console.log(studentGrades[0]);


//SOLUTION 2: Using For Loop
for (let i = 0; i<studentGrades.length; i++)
{
    //compute the element average
    let forLoopAve = 
    (
        studentGrades[i].Q1 + 
        studentGrades[i].Q2 +
        studentGrades[i].Q3 +
        studentGrades[i].Q4
    ) / 4;
    console.log (forLoopAve); //90.9
    //add aveProperty in each object
    studentGrades[i].average = parseFloat
    (forLoopAve.toFixed(1));
}
console.log(studentGrades);

//Object Constructor - template/blueprint

let hero = 
{
    name: "Angela",
    level: 1,
    role: "support",
    health: 100,
    attack: 50,
    mana: 100,

    tackle: function()
    {
        console.log(`This hero tackled targetHero`);
        console.log(`Target Hero's health is now reduced to heroHealth`);
    },

    faint: function()
    {   
        console.log(`Hero fainted`);
    }
}

console.log(hero);

//What if we want to create multiple objects with the same properties? Would you prefer creating 1 object for each?

//To solve this problem, we can use "Object Constructors"

//Objects created using "this" constructor will inherit what are function properties and methods set by this function.

//template or blueprint
function Pokemon (name, lvl, hp){
    this.name = name;
    this.level = lvl;
    this.health = hp * 2;
    this.attack = lvl;

    this.tackle = function (target){
        console.log(target);
        console.log(`${target.name}'s health is now reduced to ${target.health - this.attack} `);
    }
}

//initialize an object with arguments
let pikachu = new Pokemon ("Pikachu", 5, 50);
let charizzard = new Pokemon ("Charizzard", 8, 40);
console.log(pikachu); //object
console.log(charizzard); //object

//execute the tackle property of pikachu object
console.log(pikachu.tackle(charizzard));
console.log(pikachu.tackle(charizzard));

/*

Create your own person self object and with the use of object constructor, create a new person with different information out of the template.


*/

//SOLUTION 1:
function Person (firstName, lastName, age)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = `${firstName} ${lastName} ${age}`;
}

let jelly = new Person ("Jelly", "Lumactud", 11);
console.log(jelly);

//Array of objects
let cars = 
[
    {
        brand: "Toyota",
        model: "Vios",
        price: 1000000
    },

    {
        brand: "Nissan",
        model: "Sentra",
        price: 1120108
    },

    {
        brand: "Foton",
        model: "ETX_N 6x4 WING",
        price: 2009525
    }
];

//find(cb())
//iterates over items in our array and returns the item/element which will satisfy the condition
//find() will return the first item that will satisfy the condition and stops the process
//if find() cannot satisfy its condition even after reiterating all of the items/elements in the array, it will return undefined
//we can even use logical operators for our condition

let foundCar = cars.find( function(car){
    console.log(car)//undefined
    return (car.brand === "Toyota")
});
console.log(foundCar);
if (foundCar === undefined)
{
    console.log( `Some data are missing`);
}
else 
{
    console.log( `Data exists`);
}

//SOLUTION
let users = [
    {
        username: "kimdhyn",
        email: "dahyun@gmail.com",
        password: "dahyunTwiceu",
    },
    {
        username: "jenKimBP",
        email: "jennieSolo@gmail.com",
        password: "dududuJennie",
    },
    {
        username: "lisaBP",
        email: "lisaManoban@gmail.com",
        password: "lisaIsHere",
    },
];

//SOLUTION
function login(userEmail, userPassword)
{
    let userCredentials = users.find((user)=>
    {
        return user.email === userEmail &&
        user.password === userPassword
    }
    );

    if (!userCredentials){
        alert("Login Failed. Wrong Credentials!")
    }

    else 
    {
        alert ("Thank you for logging in");
        console.log(userCredentials);
    }
}

login ("dahyun@gmail.com", "dahyunTwiceu");
