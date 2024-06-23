import React from 'react';

const MakeYourCocktailCard = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const baseLiquor = formData.get('baseLiquor');
    const selectedIngredients = formData.getAll('ingredient');

    console.log('Base Liquor:', baseLiquor);
    console.log('Selected Ingredients:', selectedIngredients);
  };

  const uniqueIngredients = ["Tequila", "Jugo de limón", "Triple sec", "Ron", "Azúcar", "Limón", "Soda", "Menta", "Crema de coco", "Jugo de piña"];

  return (
    <div className="make-cocktail-card">
      <h3>Make Your Cocktail</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="baseLiquor">Base Liquor:</label>
          <select name="baseLiquor" required>
            <option value="">Select a base liquor</option>
            {['Vodka', 'Rum', 'Tequila', 'Whiskey', 'Gin', 'Cachaça', 'Pisco', 'Bourbon'].map(liquor => (
              <option key={liquor} value={liquor}>{liquor}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Ingredients (choose up to 3):</label>
          {uniqueIngredients.map(ingredient => (
            <div key={ingredient}>
              <input type="checkbox" name="ingredient" value={ingredient} />
              <label>{ingredient}</label>
            </div>
          ))}
        </div>
        <button type="submit">Create Cocktail</button>
      </form>
    </div>
  );
};

export default MakeYourCocktailCard;
