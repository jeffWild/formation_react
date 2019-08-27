// Some data we can work with
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];

const characters = [
  "Aeron, Greyjoy",
  "Alliser, Thorne",
  "Alton, Lannister",
  "Benjen, Stark",
  "Rickard, Stark",
  "Rickon, Stark",
  "Robb, Stark",
  "Robert, Baratheon",
  "Brynden, Tully",
  "Davos, Seaworth",
  "Elia, Martell",
  "Gregor, Clegane",
  "Jaime, Lannister",
  "Myrcella, Baratheon",
  "Rhaegar, Targaryen",
  "Robin, Arryn",
  "Rodrik, Cassel",
  "Roose, Bolton",
  "Roslin, Frey",
  "Ryger, Rivers",
  "Salladhor, Saan",
  "Samwell, Tarly",
  "Sandor, Clegane",
  "Sansa, Stark",
  "Selyse, Baratheon",
  "Shireen, Baratheon",
  "Smalljon, Umber",
  "Stannis, Baratheon",
  "Steelshanks, Walton",
  "Stevron, Frey",
  "Syrio, Forel",
  "Talisa, Maegyr",
  "Talla, Tarly",
  "Ternesio, Terys",
  "Tobho, Mott",
  "Tommen, Baratheon",
  "Tormund, Giantsbane",
  "Trystane, Martell",
  "Tycho, Nestoris",
  "Tyene, Sand",
  "Tyrion, Lannister",
  "Tywin, Lannister",
  "Vardis, Egen",
  "Viserys, Targaryen",
  "Walda, Bolton",
  "Walder, Frey",
  "Waymar, Royce",
  "Willem, Lannister"
];

// SPREAD OPERATOR
// Combiner les deux tableaux en un seul
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
// Ajouter un nouveau fruit au début du tableau
const fruits = ["Pomme", "Orange", "Banane"];
const fruits1 = ["raisin", ...fruits];
console.log(fruits1);
// Combiner les deux objets dans un nouvel objet puis modifier la valeur age
const obj1 = { id: 101, name: "John Doe" };
const obj2 = { age: 25, country: "USA" };
//const obj3 = { age:30,...obj1, ...obj2}; --> on ajoute age à 30 à l'objet sauf que obj2 va rajouter age à 26 et donc écraser le 30
const obj3 = { ...obj1, ...obj2, age: 30 };
//obj3.age = 24;
console.log(obj3);

// ARRAY.PROTOTYPE.FILTER()
// Fitrer les inventeurs pour afficher ceux nés dans au 16e siècle
const filtered = inventors.filter(inventor => {
  return inventor.year > 1500 && inventor.year <= 1600;
});
console.log(filtered);

// ARRAY.PROTOTYPE.MAP()
// Retourner un tableau des inventeurs contenant leurs noms et prénoms
const map = inventors.map(inventor => {
  return inventor.first + " " + inventor.last;
});
const map2 = inventors.map(({ first, last }) => {
  // on peut ne passer que les éléments utiles
  return first + " " + last;
});
const map3 = inventors.map(({ first, last }) => {
  return `${first} ${last}`; //--> utilisation des string litterals
});
console.log(map);
console.log(map2);
console.log(map3);

// ARRAY.PROTOTYPE.SORT()
// Trier les inventeurs selon leur date de naissance
const sort = inventors.sort((inventor1, inventor2) => {
  if (inventor1.year < inventor2.year) {
    return -1;
  } else if (inventor1.year > inventor2.year) {
    return 1;
  } else {
    return 0;
  }
});
console.log(sort);

// ARRAY.PROTOTYPE.REDUCE()
// Combien d'années cumulées tous les inventeurs ont vécus?
const reduce = inventors.reduce((total, inventor) => {
  return total + inventor.passed - inventor.year;
}, 0);
console.log(reduce);

// SORT
// Trier les inventeurs par le nombre d'années qu'ils ont vécu
const sort2 = inventors.sort((inventor1, inventor2) => {
  const nb1 = inventor1.passed - inventor1.year;
  const nb2 = inventor2.passed - inventor2.year;
  if (nb1 < nb2) {
    return -1;
  } else if (nb1 > nb2) {
    return 1;
  } else {
    return 0;
  }
});
console.log(sort2);
const inventors2 = inventors.map(inventor => {
  return { ...inventor, lifespan: inventor.passed - inventor.year };
});
const sort3 = inventors2.sort((inventor1, inventor2) => {
  if (inventor1.lifespan < inventor2.lifespan) {
    return -1;
  } else if (inventor1.lifespan > inventor2.lifespan) {
    return 1;
  } else {
    return 0;
  }
});
console.log(
  "Trier les inventeurs par le nombre d'années qu'ils ont vécu",
  sort3
);
// QuerySelector + MAP + FILTER + INCLUDES
// Créer une liste des Boulevards de Paris contenant 'de' n'importe où dans leur nom
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// Utiliser la console du navigateur depuis cette page :)

// SORT + SPLIT
// Trier le tableau des personnages sur leur nom
const split = characters.sort((character1, character2) => {
  const nom1 = character1.split(",")[0];
  const nom2 = character2.split(",")[0];
  if (nom1 < nom2) {
    return -1;
  } else if (nom1 > nom2) {
    return 1;
  } else {
    return 0;
  }
});
const split2 = characters.sort((character1, character2) => {
  const [nom1, prenom1] = character1.split(", ");
  const [nom2, prenom2] = character2.split(", ");
  if (nom1 < nom2) {
    return -1;
  } else if (nom1 > nom2) {
    return 1;
  } else {
    return 0;
  }
});
console.log("Trier le tableau des personnages sur leur nom", split);
console.log("Trier le tableau des personnages sur leur nom", split2);

// EVENT LISTENER
// Ajout d'un EventListener au clic sur le bouton qui affiche "test" dans la console
const button = document.querySelector(".btn"); //on chercher l'élément dont la classe est btn dans le html
button.addEventListener("click", () => {
  console.log("Vous avez cliqué sur le bouton");
});
