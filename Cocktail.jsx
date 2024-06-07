export default function Cocktail({
  strDrink,
  strAlcoholic,
  strDrinkThumb,
  strInstructions,
  onPrev,
  onNext,
  onRandom,
}) {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={strDrinkThumb} id="drink-img" alt={strDrink} />
      </div>
      <h4 id="name">{strDrink}</h4>
      <p id="job">{strAlcoholic}</p>
      <p id="instructions">{strInstructions}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={onPrev}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="next-btn" onClick={onNext}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <button className="random-btn" onClick={onRandom}>
        suprise me
      </button>
    </article>
  );
}
