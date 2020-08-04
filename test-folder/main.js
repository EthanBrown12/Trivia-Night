

$.ajax({
  url: "http://www.songsterr.com/a/ra/songs/byartists.json?artists=Beatles",
  method: "GET",
  success: createEle,

  error: function (err) {
    console.log(err);
  }
})

function createEle(data) {
  console.log(data)
  }

$.ajax({
  url: "https://api.lyrics.ovh/v1/the-beatles/yellow-submarine",
  method: "GET",
  success: createLyric,

  error: function (err) {
    console.log(err);
  }
})

function createLyric(data) {
  console.log(data)
}



$.ajax({
  url: "https://opentdb.com/api.php?amount=10",
  method: "GET",
  success: createTrivia,

  error: function (err) {
    console.log(err);
  }
})

function createTrivia(data) {
  console.log(data)
}

https://www.thecocktaildb.com/api/json/v1/1/random.php

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
