<template>
  <div class="jhome__header-container">
    <JHeader class="jhome__header" :links="navLinks" />
  </div>
  <!-- <section class="header-container">
    <section class="jhome">
      <section class="jhome__jumbotron">
        <div v-if="isHomeRoute" class="jhome__jumbotron-content">
          <div class="jhome__title-wrapper">
            <h1 class="jhome__title title-first">Welcome To <div class="jhome__cursor-interaction"><svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960" width="45px" fill="#FFFF"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></div><br></h1>
          </div>
          <div class="jhome__title-wrapper"><h1 class="jhome__title title-second">District 1 <br></h1></div>
          <div class="jhome__title-wrapper"><h1 class="jhome__title title-third">Modular <br></h1></div>
          <div class="jhome__title-wrapper"><h1 class="jhome__title title-fourth">® Living Unit</h1></div>
        </div>
      </section>
    </section>
  </section> -->
  <router-view />
  <div class="jhome__footer-app">
    <JFooter class="container" :links="footerLinks "/>
  </div>
  <!-- <JEmailForm /> -->
</template>

<script>
import JHeader from '@/components/Header.vue'
import JFooter from '@/components/Footer.vue'

export default {
  name: "App",
  components: {
    JHeader,
    JFooter
  },
  data() {
    return {
      navLinks: [
        { name: 'Home', href: '/' },
        { name: 'Housing', href: '/housing-type/district1',
          children: [ 
            { name: 'District 1', href: '/housing-type/district1' }
          ]
        },
        { name: 'Commercial', href: '/commercial-type' },
        { name: 'About Developer', href: '/about-developer' }
      ],
      footerLinks: [
        { 
          label: 'More', 
          children: [
            {
              name: 'Help Center', 
              href: '/abc' 
            },
            {
              name: 'Become Member', 
              href: '/abc' 
            },
            {
              name: 'Events', 
              href: '/abc' 
            },
            {
              name: 'Terms & Condition', 
              href: '/abc' 
            }
          ]
        },
        { 
          label: 'Help', 
          children: [
            {
              name: 'FAQs', 
              href: '/abc' 
            },
            {
              name: 'Contact Us', 
              href: '/abc' 
            }
          ]
        },
      ]
    }
  },
  computed: {
    isHomeRoute() {
      return this.$route.path === '/';
    }
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  body {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
  }

  #app {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
  }

  .container {
    max-width: 1200px;
    margin: 30px auto;
  }

  // .header-container { background-image: url('./assets/pattern1-background-2.png'); }

  .jhome {
    &__header-container {
      width: 1200px;
      margin: auto;
      background-color: white;
    }
    &__header {
      margin: auto;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
    }
    // &__jumbotron-content {
    //   display: flex;
    //   flex-direction: column;
    //   justify-content: center;
    //   align-items: center;
    //   padding: 40px 0px;
    // }
    // &__title {
    //   margin: 0;
    //   font-size: 46px;
    //   font-weight: 650;
    //   display: flex;
    //   gap: 20px;
    //   text-transform: uppercase;
    // }
    // .title-first { 
    //   justify-content: center;
    //   margin-right: 40px;
    // }
    // .title-second { justify-content: flex-start; }
    // .title-third { 
    //   justify-content: flex-end; 
    //   color: whitesmoke;
    // }
    // .title-fourth { 
    //   justify-content: center; 
    //   color: whitesmoke;
    // }
    // &__title-wrapper {
    //   width: 600px;
    // }
    // &__cursor-interaction {
    //   display: flex;
    //   padding: 4px 40px;
    //   border-radius: 14px;
    //   border: 1px solid darkcyan;
    //   svg { transform: rotate(330deg); }
    // }
    // &__footer-app {
    //   background: url('./assets/pattern1-background-1.png');
    // }
  }

  @mixin mobile {
    @media screen and (max-width: (768px - 1px)) {
      @content;
    }
  }
</style>
