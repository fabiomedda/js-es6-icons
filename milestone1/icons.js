$(document).ready(function () {

  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family 

  class icon {
    constructor (name, prefix, type, family){
      this.name = name;
      this.prefix = prefix;
      this.type = type;
      this.family = family;
    }
  };

  const icons = [
    new icon("cat", "fas", "fa-cat", "animals"),
    new icon("crow", "fas", "fa-crow", "animals"),
    new icon("dog", "fas", "fa-dog", "animals"),
    new icon("dove", "fas", "fa-dove", "animals"),
    new icon("dragon", "fas", "fa-dragon", "animals"),
    new icon("horse", "fas", "fa-horse", "animals"),
    new icon("hippo", "fas", "fa-hippo", "animals"),
    new icon("fish", "fas", "fa-fish", "animals"),
    new icon("carrot", "fas", "fa-carrot", "vegetable"),
    new icon("apple-alt", "fas", "fa-apple-alt", "vegetable"),
    new icon("lemon", "fas", "fa-lemon", "vegetable"),
    new icon("pepper-hot", "fas", "fa-pepper-hot", "vegetable"),
    new icon("user-astronaut", "fas", "fa-user-astronaut", "user"),
    new icon("user-graduate", "fas", "fa-user-graduate", "user"),
    new icon("user-ninja", "fas", "fa-user-ninja", "user"),
    new icon("user-secret", "fas", "fa-user-secret", "user"),
  ];

  // Selezioniamo il container icons

  const divClass = $(".icons");

  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)

  printType(icons, divClass);

  // Creiamo una funzione per iterare nell'array e che appenda al container le icone.

  function printType(array, box) {
    array.forEach(icon => {
    
    let markup = `
      <div>
        <i class="${icon.prefix} ${icon.type}"></i>
        <div class="title" style="text-transform: uppercase">${icon.name}</div>
      </div>
    `;

    box.append(markup);

    });
  }

});


/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup

