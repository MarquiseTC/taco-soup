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
var sentenceArray = ["the", "cow", "danced", "through", 
"the", "trees", "in", "the", "light", "of", "the", "moon"];
for(let i = 0; i < sentenceArray.length; i++);
var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let sentence = "";

for(let i = 0; i < sentenceArray.length; i++){
  
  if( (i % 3 == 0) 
     && (i != 0) //added so sentence doesn't start with a moo
    ){
    sentence = (sentence + ' MOOOOOO ' + sentenceArray[i]);
    
  }
  
  else{
    sentence = sentence + " " + sentenceArray[i] ;
  }
}
    
    console.log(sentence);









// The Beetles

// const beatles = {
//     albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
//     history: {
//         formed: 1960,
//         disbanded: 1970
//     },
//     members: [
//         {
//             name: "George Harrison",
//             birth: 1943,
//             death: 2001
//         },
//         {
//             name: "Paul McCartney",
//             birth: 1942,
//             death: null
//         },
//         {
//             name: "John Lennon",
//             birth: 1940,
//             death: 1980
//         },
//         {
//             name: "Ringo Starr",
//             birth: 1940,
//             death: null
//         }
//     ]
// }
// let albums = ''
// for(let i = 0; i < beatles.albums.length; i++){
//     if(i === beatles.albums.length - 1){
//         albums += `and ${beatles.albums[i]}`
//     }
    
//     else{
//     albums += `${beatles.albums[i]}, `
//     }
// }
// for(let i = 0; i < beatles.members.length; i++){
// console.log(
// `${beatles.members[i].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[i].birth} . He contributed heavily to the albums ${albums}.
// `)};
    
