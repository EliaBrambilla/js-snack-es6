// Snack 1
// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.
// esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4


const myArray = ['Michele',  'Fabio',  'Roberto',  'Giovanni',  'Simone',  'Chiara' , 'Roberta' , 'Alessandra'];
const myArrayFiltered = [];

let min = prompt('min');
let max = prompt ('max (massimo 7)');



// forEach

myArray.forEach ((element, index) => {

    if (index >=min && index <= max) {
        myArrayFiltered.push(element);
    }

    return myArrayFiltered;
});

console.log ("versione forEach " + myArrayFiltered);
document.writeln ("<h1>versione forEach </h1>" + '<h4>' +  myArrayFiltered + '</h4>');

// Filter

const filteredItems = myArray.filter((element, index) => {

    if (index >= min && index <= max) {
        return true
    }

    return false;
    
    });

    console.log ("versione filter " +  filteredItems);
    document.writeln ("<h1>versione Filter</h1> " +  '<h4>' + filteredItems + '</h4>');