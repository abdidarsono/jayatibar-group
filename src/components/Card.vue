<template>
  <div class="product-card">
    <img :src="image" alt="Product Image" class="product-image">
    <div class="product-info">
      <h3 class="product-title">{{ title }}</h3>
      <p class="product-description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardaLS',
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.product-card {
  width: 100%;
  max-width: 300px;
  margin: auto;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  .product-image {
    width: 100%;
    height: auto;
    border: 1px solid #ddd;
  }

  .product-info {
    padding: 16px;

    .product-title {
      font-size: 1.5em;
      margin: 0;
    }

    .product-description {
      font-size: 1em;
      color: #555;
    }
  }

  // Responsive Styles
  @media (max-width: 600px) {
    max-width: 100%;
    padding: 10px;

    .product-info {
      .product-title {
        font-size: 1.2em;
      }

      .product-description {
        font-size: 0.9em;
      }
    }
  }
}
</style>
