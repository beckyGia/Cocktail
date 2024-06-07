import Cocktail from "./Cocktail";

const { useState, useEffect } = React;

export default function App() {
  const [cocktailName, setCocktailName] = useState("");
  const [currentItem, setCurrentItem] = useState(0);
  const [drinks, setDrinks] = useState([]);
  const [clicked, setClicked] = useState(false);

  let currentDrink = {
    strDrinkThumb: "img/margarita.jpg",
    strDrink: "Margarita",
    strAlcoholic: "Alcoholic",
    strInstructions:
      "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
  };

  async function getDrink() {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
    );
    const data = await res.json();
    if (data.drinks) {
      setDrinks(data.drinks);
      setCurrentItem(0);
    }
  }

  useEffect(() => {
    if (clicked) {
      getDrink();
      setClicked(false);
    }
  }, [clicked]);

  function handleGetDrink() {
    setClicked(true); // Set clicked to true when the button is clicked
  }

  function handlePrev() {
    setCurrentItem((prev) => (prev > 0 ? prev - 1 : drinks.length - 1));
  }

  function handleNext() {
    setCurrentItem((prev) => (prev < drinks.length - 1 ? prev + 1 : 0));
  }

  function handleRandom() {
    if (drinks.length > 0) {
      const randomIndex = Math.floor(Math.random() * drinks.length);
      setCurrentItem(randomIndex);
    }
  }

  if (drinks.length > 0) {
    currentDrink = drinks[currentItem];
  }

  return (
    <section className="container">
      <div className="title">
        <h2>Choose Cocktail</h2>
        <div className="underline"></div>
      </div>
      <div className="input">
        <input
          type="text"
          value={cocktailName}
          id="input"
          onChange={(e) => {
            setCocktailName(e.target.value);
          }}
        />
        <button
          type="button"
          name="button"
          className="submit"
          onClick={handleGetDrink}
        >
          Get Cocktail
        </button>
      </div>
      <Cocktail
        {...currentDrink}
        onPrev={handlePrev}
        onNext={handleNext}
        onRandom={handleRandom}
      />
    </section>
  );
}
