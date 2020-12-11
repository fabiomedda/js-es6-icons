$(document).ready(function () {
  // Qui le icone che abbiamo definito nella milestone 1

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

  // definiamo dei colori per le icone (blue, orange, purple)

  const blue = "blue";
  const orange = "orange";
  const purple = "purple";

  //aggiungiamo dei colori usando una funzione

  const newIcons = icons.map(icon => {
    const name = icon.name;
    const prefix = icon.prefix;
    const type = icon.type;
    const family = icon.family;
    return {
      name,
      prefix,
      type,
      family,
      color: (icon.family === "animals") ? blue : (icon.family === "vegetable") ? orange : purple,      
    }
  });
  console.log(newIcons);

  const divClass = $(".icons");

  //inseriamo le icone colorate nel container

  printType(newIcons, divClass);

  function printType(array, box) {
    array.forEach(icon => {
    
      let markup = `
        <div>
          <i class="${icon.prefix} ${icon.type}" style="color: ${icon.color}"></i>
          <div class="title" style="text-transform: uppercase">${icon.name}</div>
        </div>
      `;

      box.append(markup);

    });
  }

});


/* ---- FUNCTIONS ----*/
//1. Funzione milestone 1


//2. funzione per assegnare un colore ad un icona
// tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map 


//3. funzione per ottenere da un array
// tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.
