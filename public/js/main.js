// # Les conditions - introduction
//     1. ### Via un console.log() vérifie l'egalité entre 1 et "1"

console.log(`1 == "1" = ${1 == '1'}`);
console.log(`1 == "1" = ${1 == 1}`);
//     2. ### Via un console.log() vérifie l'egalité STRICTE entre 1 et "1"

console.log(`1 === "1" = ${1 === '1'}`);
console.log(`1 === "1" = ${1 === 1}`);

//     3. ### Créer un programme qui demande le prénom d'une personne, si le prénom de la personne comporte moins de 5 caractères, affichée une alerte avec comme message " Ton nom est trop court "

let prenom = prompt('Entrez votre prenom');
if (prenom.length < 5) {
    alert('Ton nom est trop court')
}
else {
    alert('Ton prénom est ok')
}

//     4. ### Affiche une addition a l'utilisateur et demande lui de résoudre l'addition, si il répond juste, félicitez le, sinon dite lui que c'est incorrect.

let add = parseInt(prompt('additionne 5 + 10'));

if (add === 15) {
    alert('bonne réponse')
}
else {
    alert('mauvaise réponse')
}

//     5. ### Affiche une multiplication à l'utilisateur et demande lui de la résoudre, si il répond juste félicitez le "la réponse était bien xx" sinon dite lui, à combien d'unité il était de la réponse exemple si la réponse etait 35 et qu'il répont 40 renvoyez lui une alerte avec "C'est dommage, tu n'étais qu'a 5 unité de la bonne réponse"

let mult = parseInt(prompt('multiplie 5 * 10'));
let rep = 50;

if (mult === rep) {
    alert('bonne réponse')
} 
else if (rep) {
    alert(`C'est dommage, tu n'étais qu'a ${Math.abs(rep - mult)} unité de la bonne réponse`)
}
//     6. ### Créer un programme qui permet d'ajouter des elements dans un tableau via des prompts quand le tableau contient 3 éléments, renvoyez une alerte avec le contenu du tableau

let tableau = []
let quest;

if (tableau.length == 3) {
    alert(tableau)
}
else {
    quest = prompt(`Entrez un élément`)
    tableau.push(quest)
}

if (tableau.length == 3) {
    alert(tableau)
}
else {
    quest = prompt(`Entrez un deuxième élément`)
    tableau.push(quest)
}

if (tableau.length == 3) {
    alert(tableau)
}
else {
    quest = prompt(`Entrez un troisième élément`)
    tableau.push(quest)
}

if (tableau.length == 3) {
    alert(tableau)
}
else {
    quest = prompt(`Entrez un élément`)
    tableau.push(quest)
}

//     7. ### Créer un programme qui permet a l'utilisateur de mettre des chiffres dans des bacs, si le chiffre est plus grand ou égal à 12 il va dans le bac "grandNombres" si il est plus petit que 12 il va dans le bac "petitNombres" affiche ensuite une seule alerte avec le contenu des deux bacs

let grandNb = [];
let petitNb = [];

let nbr1 = prompt("Entrez un nombre?");
let nbr2 = prompt("Entrez un nombre?");
let nbr3 = prompt("Entrez un nombre?");

if (nbr1 >= 12) {
    grandNb.push(nbr1)
} else {
    petitNb.push(nbr1)
}

if (nbr2 >= 12) {
    grandNb.push(nbr2)
} else {
    petitNb.push(nbr2)
}

if (nbr3 >= 12) {
    grandNb.push(nbr3)
} else {
    petitNb.push(nbr3)
}
alert(`${grandNb} : plus grand ou égal à 12, ${petitNb} : plus petit que 12`)

// console.log(`${grandNb} : plus grand ou égal à 12`);
// console.log(`${petitNb} : plus petit que 12`);

//     8. ### Invente un exercice avec ce que tu as appris en Javascript jusqu'a maintenant en incluent des conditions
// Créer un programme qui permet aux étudiants de MolenGeek de savoir leurs jours d'e-learning et les jours en présentielle.
let jourSem = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
// Via un prompt, demandez à l'étudiant le jour en question(lundi, mardi, mercredi, jeudi, vendredi).
let quest2 = prompt('Jour de la semaine');

// Si l'étudiant répond lundi ou mardi ou mercredi, le programme lui répond via une console.log qu'il est en e-learning.
if (quest2 == 'lundi' || quest2 == 'mardi' || quest2 == 'mercredi') {
    console.log('vous êtes en e-learning')
}

// S'il répond jeudi et vendredi, le programme lui répond via une console.log qu'ils sont en présentielle.
else if (quest2 == 'jeudi' || quest2 == 'vendredi') {
    console.log('vous êtes en présentielle');
}

// S'il répond autre chose que ces 5 propositions, le programme lui répond que sa demande est érronée.
else {
    console.log('tu as raté ta vie')
}

