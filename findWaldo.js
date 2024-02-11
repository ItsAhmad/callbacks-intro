let waldoIndex = []

const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found();   // execute callback
      let names[i] = waldoIndex;
    }
  }
}

const actionWhenFound = function() {
  console.log("Found him!");
  
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

