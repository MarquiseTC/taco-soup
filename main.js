// Harry Potter Titles
// var harryPotterTitles = ["and the Sorcerer's Stone", 
// "and the Chamber of Secrets", "and the Prisoner of Azkaban", 
// "and the Goblet of Fire", "and the Order of the Phoenix", 
// "and the Half-Blood Prince", "and the Deathly Hallows"];

// for (var i = 0; i <harryPotterTitles.length; i++){
// console.log(`Harry Potter ${harryPotterTitles[i]}`
// )}

// Student Grades

var grades = [92, 91, 75, 66, 
    52, 90, 83, 85, 64, 90, 72,
     88, 77, 98, 100, 73, 92]
     
     for (let i = 0; i < grades.length; i++){

     

     if (grades[i] >= 0 && grades <= 69[i]){console.log("You got an F");}


if (grades[i] >= 70 && grades <= 76[i]){console.log("You got an D");}


if (grades[i] >= 77 && grades[i] <= 84){console.log("You got an C");}


if (grades[i] >= 85 && grades[i] <= 92 ){console.log("You got an B");}


if (grades[i] >= 93 && grades[i] <=100 )
{console.log('You got an A!' );}}


// Student Grades Part 2
var grades = [92, 91, 75, 66, 
    52, 90, 83, 85, 64, 90, 72,
     88, 77, 98, 100, 73, 92]

let anA = 0; 
for (let i = 0; i < grades.length; i++)
if (grades[i] >= 93 && grades[i] <=100 ){
anA++}

let aB = 0; for (let i = 0; i < grades.length; i++)
if (grades[i] >= 85 && grades[i] <= 92){aB++} 

let aC = 0; for (let i = 0; i < grades.length; i++)
if (grades[i] >= 77 && grades[i] <= 84){aC++}

let aD = 0; for (let i = 0; i < grades.length; i++)
if (grades[i] >= 70 && grades[i] <= 76){aD++}

let anF = 0; for (let i = 0; i < grades.length; i++)
 if (grades[i] >= 0 && grades[i] <= 69){anF++}

 console.log(`There were ${anA} A's`)
 console.log(`There were ${aB} B's`)
console.log(`There were ${aC} C's`)
console.log(`There were ${aD} D's`)
console.log(`There were ${anF} F's`)

//  What was the most commonn letter grade

let aGrade = 0;
let bGrade = 0;
let cGrade = 0;
let dGrade = 0;
let fGrade = 0;

let numGrades = [aGrade, bGrade, cGrade, dGrade, fGrade]
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 0 && grades[i] <= 69) {
        fGrade ++
    } else if (grades[i] >= 70 && grades[i] <=76) {
        dGrade ++
    } else if (grades[i] >=77 && grades[i] <=84) {
        cGrade ++
    } else if (grades[i] >=84 && grades[i] <=92) {
        bGrade ++
    } else if (grades[i] >=93 && grades[i] <=100) {
        aGrade ++
    }
}

console.log("F Grades: " + fGrade);
console.log("D Grades: " + dGrade);
console.log("C Grades: " + cGrade);
console.log("B Grades: " + bGrade); // most common: 7 
console.log("A Grades: " + aGrade);

 
 
 
 
 
 
//  Average of grades
 
var total = 0;
for(var i = 0; i < grades.length; i++) {
total += grades[i];
}
var avg = Math.round(total / grades.length);
     

console.log (`The average grade in the class was ${avg}`)
     

//Cheer 2, 4, 6, 8 who do we appreciate
for(var i = 2; i < 11; i = i + 2){
  
    if(i < 9){
      console.log(i);
    }
    
    else{
      console.log('Who do we Appreciate!?');
    }
  }

// Interrupting cow
// Copy and paste the following array into your JavaScript file:
var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
// Write a loop that builds sentenceArray into a real sentence, except every fourth word should be "MOOOOOO". Hint: look up the modulus operator.
// Run your sentence to the terminal.
    let cowSentence = " "




for (let i = 0; i < sentenceArray.length; i++){
if((i+ 1
 ) % 3 === 0)
 {cowSentence = cowSentence + ` ${sentenceArray[i]} Mooooooo`}
else{
    cowSentence = cowSentence +  ` ${sentenceArray[i]}`}


}
console.log(cowSentence)





// the cow danced MOOOOOOOO through the trees 
// MOOOOOOOO in the light MOOOOOOOO of the moon



// The Beatles






const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ],
    
    
}

// variable for each different members of the beatles
let George1 = beatles.members[0].name   
let George2 = beatles.members[0].birth
let George3 = beatles.members[0].death 
    
let Paul1 = beatles.members[1].name
let Paul2 = beatles.members[1].birth
let Paul3 = beatles.members[1].death


let John1 = beatles.members[2].name
let John2 = beatles.members[2].birth
let John3 = beatles.members[2].death

let Ringo1 = beatles.members[3].name
let Ringo2 = beatles.members[3].birth
let Ringo3 = beatles.members[3].death






// Output the following values to the terminal.

// 
console.log(`${George1} was in the Beatles from 
 ${beatles.history.formed} to ${beatles.history.disbanded}. 
He was born in ${George2}. 
He contributed heavily to the ${beatles.albums} Album.`)

console.log(`${Paul1} was in the Beatles from 
 ${beatles.history.formed} to ${beatles.history.disbanded}. 
He was born in ${Paul2}. 
He contributed heavily to the ${beatles.albums} Album.`)


console.log(`${John1} was in the Beatles from 
 ${beatles.history.formed} to ${beatles.history.disbanded}. 
He was born in ${John2}. 
He contributed heavily to the ${beatles.albums} Album.`)



console.log(`${Ringo1} was in the Beatles from 
 ${beatles.history.formed} to ${beatles.history.disbanded}. 
He was born in ${Ringo2}. 
He contributed heavily to the ${beatles.albums} Album.`)



