// scopes : global, local, block, always look for the closest scope first and then go up the chain

var fruit = "apple"; // global scope

function eat() {
  var fruit = "orange"; // local scope

  function wash() {
    console.log("Washing the " + fruit);
  }

  wash();
  console.log("Eating the " + fruit);
}

eat();
