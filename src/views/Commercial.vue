<template>
  <div class="jcommercialview">
    <header class="jcommercialview__jumbotron">
      <h1 class="jcommercialview__title">Coming Soon</h1>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'CommercialView',
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const jumbotron = document.querySelector('.jcommercialview__jumbotron');
        const scrollPosition = window.scrollY;
        jumbotron.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    }
  }
</script>

<style scoped lang="scss">
  .jcommercialview {
    &__jumbotron {
      height: 500px; /* Adjust as needed */
      background-color: lightgray;
      background-size: cover;
      background-attachment: fixed;
      background-repeat: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
    }
    &__title {
      font-size: 3rem;
      margin: 0;
      padding: 0;
      &-red {
        color: #DA4132;
        display: flex;
        justify-content: center;
      }
    }
    @media (max-width: 768px) {
      &__text-body {
        font-size: .9rem;
        line-height: 23px;
        text-align: center;
      }
      &__text-body-3 {
        font-size: .85rem;
        margin: 0px;
      }
      &__subtitle {
        font-size: 1.5rem;
        text-align: center;
        margin: 0;
        padding: 0;
      }
      &__title {
        text-align: center;
        font-size: 2rem;
      }
      &__contact-wrapper {
        width: 85%;
        padding: 0px 16px;
        flex-direction: column;
      }
    }
  }
</style>
