

async function sendApiRequest() {
  let response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
  console.log(response);
  let data = await response.json();
  console.log(data);
  createDrink(data);
}

function createDrink(data) {
  let getDrinkName = document.getElementById('drink-name');
  let drinkName = document.createElement('h2');
  drinkName.textContent = data.drinks[0].strDrink;
  getDrinkName.appendChild(drinkName);
  let img = document.createElement('img');
  img.src = data.drinks[0].strDrinkThumb;
  getDrinkName.appendChild(img);
  for(let i=1; i < 16; i++) {
    if (data.drinks[0][`strIngredient${i}`] == null){
      break;
    }
    let ingredient = document.createElement('li');
    ingredient.textContent = data.drinks[0][`strMeasure${i}`] + `  ` +data.drinks[0][`strIngredient${i}`]
    getDrinkName.appendChild(ingredient);
    }
    let instruction = document.createElement('h4');
    instruction.textContent = data.drinks[0].strInstructions;
    getDrinkName.appendChild(instruction);


 }
sendApiRequest();
