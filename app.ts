#!/usr/bin/env node

//Exercise 2
let personName: string= "ERIC";
console.log(`Hello ${personName}, would you like to learn some python today?`);

//Exercise 3
//lower case
let personName1: string ="Areeba"
console.log("lowercase:", personName1.toLowerCase());
//uppercase
console.log("uppercase:", personName1.toLocaleUpperCase());
//title case
console.log("titlecase:", personName1.replace(/\bw/g,c => c.toUpperCase()));

//Exercise 4
let quote: string= "A person who never made a mistake never tried anything new";
let author: string= "Albert Einstein";
console.log(`${author} once said, "${quote}`);

//Exercises 5
let quote1: string= "A person who never made a mistake never tried anything new";
let famous_person="Albert Einstein";
let message=`${famous_person} once said, ${quote}`;
console.log(message);

//Exercise 6
let nameWithWhiteSpace:string = "\t \n syeda areeba \t \n";
console.log("name With White Space:", nameWithWhiteSpace);

let strippedName:string = nameWithWhiteSpace.trim();
console.log("stripped Name:", strippedName);

//Exercise 7
let additionResult:number = 5+3;
console.log("Addition Result:", additionResult);

let subtractionResult:number = 10-2;
console.log("subtraction Result:", subtractionResult);

let multiplicationResult:number = 4*2;

console.log("multiplication Result:", multiplicationResult);

let divisionResult:number = 16/2;

console.log("division Result:", divisionResult);

//Exercise 8
console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);

//Exercise 9
let favoriteResult:number = 8;
let messageResult:string = `My favorite number: ${favoriteResult}`;

console.log(messageResult);

//Exercise 10

// this program adds two number and prints the result

//define two numbers
let number1:number = 10;
let number2:number = 20;
// Add two numbers
let Result:number = number1+number2;
// Print Result
console.log(Result);

//Exercise 11

let names: string[] = ["Abdullah,Areeba,Salik,mahnnor,shehwar"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//Exercise 12

for (let i = 0; i < names.length; i++) {
    console.log(`hello, ${names[i]}! how are you today?`);
}

//Exercise 13

let transportationMode: string[] = ["car", "motorcycle", "bicycle", "bus" ];

for (let i = 0; i < transportationMode.length; i++) {
    console.log(`I would like to own a ${transportationMode[i]}`);
}

//Exercise 14

let guestlist:string[] = ["fardeen", "Daniyal", "shariq"];

guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner`);
    
});

//Exercise 15

let guestlists:string[] = ["Abdullah", "Areeba", "Ali"];

let unableAttend:string | undefined = guestlists.splice(1,1)[0];

console.log(`${unableAttend} not invited for dinner`);

guestlists.push("Ali");

guestlists.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner`);
    
});

//Exercise 16
console.log("Great News! we found a bigger table");
guestlist.unshift("Hammad");

guestlists.splice(Math.floor(guestlist.length/2),0, "Komal");

guestlist.push("oliver");

console.log(guestlist);

guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you all are cordially invited to dinner`);
});

//Exercise 17

console.log("unfortunately! the new dinner table wont arrive so we can invite only two guest");

guestlist.unshift("alice", "lisa");

console.log("updated list of guest:", guestlist);

while (guestlist.length > 2) {
    let removedGuest :string | undefined = guestlist.pop();
    if (removedGuest!== undefined) {
        console.log(`Sorry, ${removedGuest}, we cant invite you for dinner`);
    }
    
}
guestlist.forEach(guest => {
    console.log(`Dear ${guest},you both are invited for the dinner`);
    
})

guestlist.splice(0, guestlist.length)

console.log("updated list of guest:", guestlist);

//Exercise 18

let placeToVisit: string[] = ["Paris" , "New York" , "Switzerland" , "Turkey" , "China"];

console.log("original order:", placeToVisit);

//print array in alphabetical order without modifying the actual list
console.log("/n Alphabetical Order:", placeToVisit.slice().sort());

//array is still in its original order by printing it
console.log("original order:", placeToVisit);

//print array in reverse alphaetical order without changing the order of the original list
console.log("reverse order:", placeToVisit.slice().sort().reverse());

//array is still in its orginal order by printing it again
console.log("original order:", placeToVisit);

//reverse the order of your list.Print the array to show that its order has changed
console.log("reverse order changed");

placeToVisit.reverse();
console.log(placeToVisit);
//reverse the order of your list again.print the list to show its back to its orginal order

console.log("original order:", placeToVisit.sort());
console.log(placeToVisit);

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("orginal order:", placeToVisit.sort());
console.log(placeToVisit);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("reverse alphabetical order changed:", placeToVisit.sort().reverse());
console.log(placeToVisit);

//Exercise 19
console.log("unfortunately! the new dinner table wont arrive so we can invite only two guest");

guestlist.unshift("alice", "lisa");

console.log("updated list of guest:", guestlist);

while (guestlist.length > 2) {
    let removedGuest :string | undefined = guestlist.pop();
    if (removedGuest!== undefined) {
        console.log(`Sorry, ${removedGuest}, we cant invite you for dinner`);
    }
    
}
guestlist.forEach(guest => {
    console.log(`Dear ${guest},you both are invited for the dinner`);
    
})

guestlist.splice(0, guestlist.length)
console.log("updated list of guest:", guestlist);

//Exercise 20
let countries:string[] = ["Usa", "Canada", "France", "Germany", "Japan"]
//print list of countries 
console.log("list of countries:", countries.forEach(country => {
    console.log(country);
    
}));
//Exercise 21
let objectContainingItems: {[key: string]: any} ={
    "laptop": {
        name: "laptop",
        price: 100000,
        description: "high performance laptop with fast processor"
    },
    "mobile": {
        name: "mobile",
        price: 50000,
        description: "high performance mobile with fast processor"
    },
 "car": {
        name: "car",
        price: 1000000,
        description: "high performance car with fast processor"
    }

}
console.log(objectContainingItems);

//Exercise 22
//Intentional Error
let intentionError :number[] = [1,2,3,4,5];
console.log(intentionError[10]);

let intentionErrors :number[] = [1,2,3,4,5];
console.log(intentionErrors[2]);

//Exercise 23
//Conditional Tests: Write a series of conditional tests.10test
//Test 1
let car = `subaru`;
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru');

//Test 2
console.log("Is car == 'toyata'? I predict False.")
console.log(car == 'toyata');

//Test 3
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'toyata');

//Test 4
console.log("Is car === 'subaru'? I predict False.");
console.log(car === 'subaru');

//Test 5
console.log("Is car.length > 0? I predict true");
console.log(car.length > 0);

//Test 6
console.log("Is car.length < 5? I predict false");
console.log(car.length < 5);

//Test 7
console.log("Is car.toUpperCase() === 'SUBARU'? I predict True");
console.log(car.toUpperCase() === 'SUBARU');

//Test 8
console.log("Is car.toUpperCase() === 'subaru'? I predict True");
console.log(car.toUpperCase() === 'subaru');

//Test 9
console.log("Is car.toLowerCase() === 'subaru'? I predict True");
console.log(car.toLowerCase() === 'subaru');

//Test 10
console.log("Is car.includes('u')? I predict True");
console.log(car.includes('u'));

//Exercise 24
//Tests for equality and inequality with strings
const string1: string = "hello"
const string2: string = "world"
console.log(string1 === string2); //false
console.log(string1 !== string2); //true

//Tests using the lower case function
const upperCase : string = "HELLO";
const lowerCase : string = "hello";
console.log(upperCase.toLowerCase() === lowerCase); //true

//Numerical Tests involving equality and inequality
const number_1 : number = 10;
const number_2 : number = 20;
console.log(number_1 === number_2); //false
console.log(number_1!== number_2); //true
console.log(number_1 > number_2); //false
console.log(number_1 < number_2); //true
console.log(number_1 >= number_2); //false
console.log(number_1 <= number_2); //true

//Tests using "and" and "or" operators
const x: number = 10;
const y: number = 20;
const z: number = 30;
console.log(x < y && y < z ); //true
console.log(x > y || y < z); //true

//Tests whether an item is in a array

const array: number[] = [1,2,3,4,5];
const itemToFind : number = 3;
console.log(array.indexOf(itemToFind) !== -1 ); //true

//Tests whether an item is not in a array
console.log(array.indexOf(10) === -1); //true

//Exercise 25
let alienColor: string ="Green";

if (alienColor === "Green"){
console.log("Player just earned 5 points");

}

alienColor = "Red";

if (alienColor === "Green"){
console.log("Player just earned 5 points");

}

//Exercise 26
let alien_Color: string = "Green";

if (alien_Color === "Green"){
console.log("Player just earned 5 points for shooting the alien");

}
else{
    console.log("Player just earned 10 points");
}
alien_Color = "Red";

if (alien_Color === "Green"){
console.log("Player just earned 5 points for shooting the alien");

}

//Exercise 27

let alien_Color1: string = "Green";
//if the alien is green , print a message that the player earned 5 points

 if (alien_Color1 === "Green"){
console.log("Player just earned 5 points");

}
//if the alien is yellow, print a message that the player earned 10 points
else if (alien_Color1 == "yellow") {
    console.log("The player just earned 10 points");
    
}
//If the alien is red, print a message that the player earned 15 points
else if (alien_Color1 == "red") {
    console.log("The player just earned 15 points");
    
}
else{
    console.log("Please select right color");
    
}
//write three version of this program.
//version 2
alien_Color1 ="Red";
if (alien_Color1 === "Green"){
    console.log("Player just earned 5 points");
    
    }
    
    else if (alien_Color1 == "yellow") {
        console.log("The player just earned 10 points");
        
    }
    
    else if (alien_Color1 == "red") {
        console.log("The player just earned 15 points");
        
    }
    else{
        console.log("Please select right color");
        
    }
//version 3
alien_Color1 = "yellow";
if (alien_Color1 === "Green"){
    console.log("Player just earned 5 points");
    
    }
    
    else if (alien_Color1 == "yellow") {
        console.log("The player just earned 10 points");
        
    }
    
    else if (alien_Color1 == "red") {
        console.log("The player just earned 15 points");
        
    }
    else{
        console.log("Please select right color");
        
    }
    
    //Exercise 28
    //Stages of life
    let age:number = 25;
    //if a person is less than 2 years old, print a message that the person is baby
    if (age < 2){
        console.log("The person is baby");
    }
    //if a person is at least 2 years old but less than 4, print a message that the person is toddler
    else if (age >= 2 && age < 4){
        console.log("The person is toddler");
    }
    //if a person is at least 4 years old but less than 13, print a message that the person is kid
    else if (age >= 4 && age < 13){
        console.log("The person is kid");
    }
    //if a person is at least 13 years old but less than 20, print a message that the person is teenager
    else if (age >= 13 && age < 20){
        console.log("The person is teenager");
    }
    //if a person is at least 20 years old but less than 65, print a message that the person is adult

    else if (age >= 20 && age < 65){
        console.log("The person is adult");
    }

    //Exercise 29
    let favoriteFruits : string [] = ['apple','mango','cherry','banana']
    if (favoriteFruits.includes('apple')) {
        console.log('I really like apple!');
        
    }
    if (favoriteFruits.includes('mango')) {
        console.log('I really like mango!');
        
    }
    if (favoriteFruits.includes('cherry')) {
        console.log('I really like cherry!');
        
    }
    if (favoriteFruits.includes('grapes')) {
        console.log('I really like grapes!');
        
    }
    if (favoriteFruits.includes('banana')) {
        console.log('I really like banana!');
        
    }
//Exercise 30
let usernames = ["Zafar", "Zain", "zubair", "admin", "salahuddin"];
usernames.forEach((user) => {
    if (user === "admin") {
        console.log(`Hello ${user},  would you like to see a status report?`);
    }
    else {
    console.log(`Hello ${user}, thank you for logging in again.`);
    }
});

//Exercise 31

let user_names1 = ["Zafar", "Zain", "zubair", "Admin", "salahuddin"];
user_names1 = []

if (user_names1.length === 0){
    console.log("Your Array in Empty we need to find some users!");
}
else{
    user_names1.forEach(oneUser => {
        if(oneUser === "Admin"){
            console.log('Hello $(oneUser), would you like to see a status report?') 
        }
        else(
            console.log('Hello $(oneUser), thank you for logging in again.')
        )
    }); 
}

//Exercise 32
let current_users: string[] = ["saba", "zahara", "hassan", "naimal"];
let new_users: string[] = ["fahad", "kashif", "sara", "mantasha"];

new_users.forEach((user) => {
    
    let is_existing = current_users.some((current_user) => current_user.toLowerCase() === user.toLowerCase());

    if (is_existing) {
        console.log(`Username '${user}' is already taken. Please enter a new username.`);
    } 
    else {
        console.log(`Username '${user}' is available.`);
    }
});

//Exercise 33
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i < myNumbers.length; i++){
    if(myNumbers[i] == 1){
        console.log(`${myNumbers[i]}st`);
        
    }
else if (myNumbers[i] == 2) {
    console.log(`${myNumbers[i]}nd`);
    
    
}
else if (myNumbers[i] == 3) {
    console.log(`${myNumbers[i]}th`);
    
    
}
else if (myNumbers[i] >= 4 && myNumbers[i] <= 9) {
    console.log(`${myNumbers[i]}th`);
    
}};

//Exercise 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza. 

// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let myPizza = ["cheese pizza", "pepperoni pizza", "bbq pizza"];

for (const food of myPizza) {
    console.log(`I like ${food}`);
}
console.log(' \t\nI really love pizza!\t\n');

//Exercise 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let Animals = ['cat', 'dog', 'butterfly'];
 
for (let animal of Animals ) {
    console.log(`A ${animal} would make a great pet `);
};
console.log("\t\n These animals would make a great pet!\t\n");

//Exercise 36
function make_shirt(size: string, message: string) {
    console.log(`Size: ${size}, Message: ${message}`);
}
make_shirt("Small", "Programmer Areeba");

//Exercise 37
function make_shirt1(size: string = "large", message: string = "I love typescript") {
    console.log(`Size: ${size}, Message: ${message}`);
}
make_shirt1();
make_shirt1("medium");
make_shirt1("small", "Programmer Areeba");

//Exercise 38
function describe_city(nameOfCity: string, country: string = "Pakistan") {
    return `${nameOfCity} is in ${country}`;
    
};
let city1 = describe_city("Karachi,Pakistan");
let city2 = describe_city("Delhi,India");
let city3 = describe_city("NewYork,America");
let city4 = describe_city("UAE,Dubai");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);

//Exercise 39
function city_country(city: string, country:string):string {
    return `${city}, ${country}`
}
console.log(city_country("Karachi","Pakistan"));
console.log(city_country("Osaka","Japan"));
console.log(city_country("Los Angeles","America"));

//Exercise 40
function make_album(artist_name: string, album_title: string, tracks?:number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    }
    if(tracks !== undefined){
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Ali", "Album title 1")
let album2 = make_album("Amir", "Album title 2")
let album3 = make_album("Adil", "Album title 3", 20)
console.log(album1);
console.log(album2);
console.log(album3);

//Exercise 41
function show_magicians1(magicians: string[]) {
    magicians.forEach(name => console.log(name)
    );
    
}

let magicians_names1 = ["Aniq","Atiq","Asif"]
show_magicians1(magicians_names1)


//Exercise 42
function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name)
    );
    
}
function make_great(magicians: string[]) {
    return magicians.map(name => `The Great ${name}`)
}
let magicians_names = ["Aniq","Atiq","Asif"]
let great_magicians = make_great(magicians_names)
show_magicians(great_magicians)


//Exercise 43
function show_magicians2(magicians: string[]) {
    magicians.forEach(name => console.log(name)
    );
    
}
function make_great2(magicians: string[]) {
    return magicians.map(name => `The Great ${name}`)
}
let magicians_names2 = ["Aniq","Atiq","Asif"]
let great_magicians2 = make_great(magicians_names)
show_magicians(great_magicians)
let copy_magicians_names = magicians_names.slice()
let copy_great_magicians = make_great2(copy_magicians_names)
console.log("\nOriginal Array\n");
show_magicians(magicians_names)
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians)

//Exercise 44
function make_sandwich(...items: string[]){
    console.log("\n making a sandwhich with the following items: \n");
    items.forEach(singleItem =>
        console.log(singleItem)
        
    )
    console.log("Now Enjoy Sandwhich");
    
}
make_sandwich("Bread", "Butter")
make_sandwich("Chicken", "Cheese", "Egg")
make_sandwich("Bread", "Butter","Chicken", "Tomato", "Cheese", "Egg", "Mayo")


//Exercise 45
function storeCarInfo(manufacturer: string, model: string, ...option: { [key : string] : any} []): 
    Object {
        const carInfo = {
            manufacturer,
            model,
            ...Object.assign({}, ...option)
        }
        return carInfo;
};

let answer = storeCarInfo('Honda', 'civic', {color:'black'}, {features: ['Navigation', 'Power window']})
console.log(answer);
