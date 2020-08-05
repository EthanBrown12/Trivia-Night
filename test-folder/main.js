

$.ajax({
  url: "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple",
  method: "GET",
  success: createTrivia,

  error: function (err) {
    console.log(err);
  }
})

function createTrivia(data) {
  console.log(data)
}



$.ajax({
  url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
  method: "GET",
  success: createDrink,

  error: function (err) {
    console.log(err);
  }
})

function createDrink(data) {
  console.log(data)
}
