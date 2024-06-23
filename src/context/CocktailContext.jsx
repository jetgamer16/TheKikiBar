import React, { createContext, useState, useEffect } from 'react';

export const CocktailContext = createContext();

export const CocktailProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCocktails = async () => {
      const response = await fetch('/data/cocktails.json');
      const data = await response.json();
      setCocktails(data.cocteles);
    };

    fetchCocktails();
  }, []);

  const addToCart = (cocktail) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === cocktail.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === cocktail.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...cocktail, quantity: 1 }];
      }
    });
  };

  const filteredCocktails = cocktails.filter(cocktail =>
    cocktail.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cocktail.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cocktail.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <CocktailContext.Provider value={{ cocktails, filteredCocktails, addToCart, setSearchQuery }}>
      {children}
    </CocktailContext.Provider>
  );
};
