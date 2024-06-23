<template>
    <div class="cocktail-card">
      <h2 class="cocktail-name">{{ cocktail.name }}</h2>
      <p class="cocktail-description">{{ cocktail.description }}</p>
      <p class="cocktail-price">{{ cocktail.price }}</p>
      <button @click="addToCart(cocktail)" class="add-to-cart-btn">Add to Cart</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      cocktail: {
        type: Object,
        required: true
      },
      addToCart: {
        type: Function,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .cocktail-card {
    background: rgba(255, 255, 255, 0.1);
    color: #e0e0e0;
    border: 2px solid #1e90ff;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .cocktail-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.8);
  }
  .cocktail-name {
    margin-top: 0;
    color: #1e90ff;
  }
  .cocktail-description {
    margin-bottom: 10px;
  }
  .cocktail-price {
    font-weight: bold;
  }
  .add-to-cart-btn {
    background: #1e90ff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  .add-to-cart-btn:hover {
    background: #1c86ee;
  }
  </style>
  