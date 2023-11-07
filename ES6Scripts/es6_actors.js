"use strict"

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
];

const hasId187 = academyMembers.find(m => m.memID == 187);
console.log("Who is the Academy Member whose ID is 187?");
console.log(`  ${hasId187.name}`);

const with3Films = academyMembers.filter(m => m.films.length >= 3);
console.log("Who has been in at least 3 films?");
with3Films.forEach(m => console.log(`  ${m.name}`));

const nameStartsBob = academyMembers.filter(m => m.name.indexOf("Bob") != -1);
console.log("Who has a name that starts with \"Bob\"?");
nameStartsBob.forEach(m => console.log(`  ${m.name}`));

const filmStartsWithLetterA = academyMembers.filter(m => {
    let isTrue = m.films.filter(f => f.indexOf("A") != -1);
    if(isTrue.length != 0) return m.name;
})
console.log("Which Academy Members have been in a film that starts with \"A\"?");
console.table(filmStartsWithLetterA);
