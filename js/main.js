// select items
const img = document.getElementById("drink-img");
const drinkName = document.getElementById("name");
const job = document.getElementById("job");
const instructions = document.getElementById("instructions");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//show drink's information
document.querySelector(".submit").addEventListener("click", getDrink);

let currentItem = 0;

function getDrink() {
  let drink = document.querySelector("input").value;
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.drinks[currentItem]);
      drinkName.innerText = data.drinks[currentItem].strDrink;
      img.src = data.drinks[currentItem].strDrinkThumb;
      job.innerText = data.drinks[currentItem].strAlcoholic;
      instructions.innerText = data.drinks[currentItem].strInstructions;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

//show next drink
nextBtn.addEventListener("click", function () {
  let drink = document.querySelector("input").value;
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      currentItem++;
      console.log(data.drinks.length);
      if (currentItem > data.drinks.length - 1) {
        currentItem = 0;
      }
      getDrink(currentItem);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
});

// show previous drink
prevBtn.addEventListener("click", function () {
  let drink = document.querySelector("input").value;
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      currentItem--;
      console.log(data.drinks.length);
      if (currentItem < 0) {
        currentItem = data.drinks.length - 1;
      }
      getDrink(currentItem);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
});

// show random drink
randomBtn.addEventListener("click", function () {
  let drink = document.querySelector("input").value;
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      currentItem = Math.floor(Math.random() * data.drinks.length);
      console.log(currentItem);
      getDrink(currentItem);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
});
