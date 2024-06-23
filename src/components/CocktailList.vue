<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Cocktail Menu</h1>
      <input
        type="text"
        placeholder="Search cocktails..."
        v-model="searchTerm"
        class="w-full p-2 mb-4 border rounded"
      />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CocktailCard
          v-for="cocktail in filteredCocktails"
          :key="cocktail.id"
          :cocktail="cocktail"
          :add-to-cart="addToCart"
        />
      </div>
      <div class="fixed bottom-4 right-4 bg-gray-900 bg-opacity-90 p-4 rounded-lg shadow-xl flex items-center space-x-4">
        <span class="text-gray-300">{{ cart.length }} productos en el carrito</span>
        <button @click="goToCart" class="bg-neonPink text-gray-900 px-4 py-2 rounded-lg hover:bg-neonPinkDark">Ir al carrito</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import CocktailCard from './CocktailCard.vue';
  import cocteles from '../../cocktails.json'
  
  export default {
    components: {
      CocktailCard,
    },
    data() {
      return {
        cocktails: [],
        searchTerm: '',
        cart: [],
      };
    },
    computed: {
      filteredCocktails() {
        const searchTermLower = this.searchTerm.toLowerCase();
        return this.cocktails.filter(cocktail =>
          cocktail.name.toLowerCase().includes(searchTermLower) ||
          cocktail.description.toLowerCase().includes(searchTermLower)
        );
      },
    },
    async mounted() {
      try {
        const response = await axios.get('http://localhost:3000/cocteles')
        this.cocktails = response.data;

        if (typeof window !== 'undefined') {
          const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
          this.cart = Array.isArray(savedCart) ? savedCart : [];
        }
      } catch (error) {
        console.log(response.data)
        console.error('Error fetching cocteles:', error);
      }
    },
    methods: {
      addToCart(cocktail) {
        this.cart.push(cocktail);
        if (typeof window !== 'undefined') {
          localStorage.setItem('cart', JSON.stringify(this.cart));
        }
      },
      goToCart() {
        alert('Redirigiendo al carrito');
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  .bg-neonPink {
    background-color: #ff6f61;
  }
  .bg-neonPinkDark {
    background-color: #ff3d2e;
  }
  .text-neonPink {
    color: #ff6f61;
  }
  .text-neonPinkDark {
    color: #ff3d2e;
  }
  </style>
  