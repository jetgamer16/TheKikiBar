import { defineStore } from 'pinia';
import { CocktailRepository } from '../repositories/cocktailRepository';

const cocktailRepo = new CocktailRepository();

export const useCocktailStore = defineStore('cocktail', {
  state: () => ({
    cocktails: [],
    cart: [],
    searchQuery: '',
  }),
  actions: {
    async fetchCocktails() {
      this.cocktails = await cocktailRepo.getAll();
    },
    addToCart(cocktail) {
      const existingItem = this.cart.find(item => item.id === cocktail.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cart.push({ ...cocktail, quantity: 1 });
      }
    },
    setSearchQuery(query) {
      this.searchQuery = query;
    },
  },
  getters: {
    filteredCocktails: (state) => {
      if (!state.searchQuery) return state.cocktails;
      const lowerCaseQuery = state.searchQuery.toLowerCase();
      return state.cocktails.filter(cocktail =>
        cocktail.name.toLowerCase().includes(lowerCaseQuery) ||
        cocktail.description.toLowerCase().includes(lowerCaseQuery) ||
        cocktail.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowerCaseQuery))
      );
    },
  },
});
