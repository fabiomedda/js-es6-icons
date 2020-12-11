$(document).ready(function () {
  // icone come da milestone 1

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

  // colori come da milestone 2

  const blue = "blue";
  const orange = "orange";
  const purple = "purple";

  //aggiungiamo dei colori come da milestone 2

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

  //inseriamo le icone nel container come da milestone 2

  printType(newIcons, divClass);

  function printType(array, box) {
    array.forEach(icon => {
    
      const markup = `
        <div>
          <i class="${icon.prefix} ${icon.type}" style="color: ${icon.color}"></i>
          <div class="title" style="text-transform: uppercase">${icon.name}</div>
        </div>
      `;

      box.append(markup);

    });
  }

  //estrapoliamo i tipi di icone

  const iconsAnimals = newIcons.filter(function (iconParam) { 
    return iconParam.family === "animals";
  });
  console.log(iconsAnimals);

  const iconsVegetable = newIcons.filter(function (iconParam) { 
    return iconParam.family === "vegetable";
  });
  console.log(iconsVegetable);

  const iconsUser = newIcons.filter(function (iconParam) { 
    return iconParam.family === "user";
  });
  console.log(iconsUser);

  //aggiungiamo i tipi alla select

  let selectType = document.querySelector("#type");
  console.log(selectType);
  

  const markupSelect = `
    <option value="animals">Animals</option>
    <option value="vegetable">Vegetable</option>
    <option value="user">User</option>
  `;

  selectType.insertAdjacentHTML("beforeend", markupSelect);

  //al change mostriamo solo le icone filtrate
  //mostriamo come passare un parametro a change e contemporaneamente destrutturiamo

  let selectTypeValue = selectType.value;
  console.log(selectTypeValue);

  selectType.addEventListener("click", function () { 
    let ciao = this.value;
    change(ciao);
  });

  function change(value) { 
    console.log(value); 

    if (value === "animals") {
      divClass.outerHTML = "";
      console.log(divClass);
      printType(iconsAnimals, divClass);
    }
  };

  change(selectTypeValue);


/* ---- FUNCTIONS ----*/

});