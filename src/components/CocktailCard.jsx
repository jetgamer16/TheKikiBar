import React, { useContext } from 'react';
import { CocktailContext } from '../context/CocktailContext';

const CocktailCard = ({ coctel }) => {
  const { addToCart } = useContext(CocktailContext);

  const handleAddToCart = () => {
    addToCart(coctel);
  };

  return (
    <div className="cocktail-card">
      <h3>{coctel.name}</h3>
      <p>{coctel.description}</p>
      <p>Price: {coctel.price}€</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default CocktailCard;
