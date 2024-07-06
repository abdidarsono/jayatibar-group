<template>
  <div class="jhomeview">
    <div class="jhomeview__jumbotron">
      <h1 class="jhomeview__title">
        Find a Perfect Property to Suit <br>Your Lifestyle
        <span class="jhomeview__img-jumbotron"><img src="../assets/house1.jpg" alt=""></span>
      </h1>
      <p class="jhomeview__text-body">
        Seamlessy blend life and living. Discover a property that complemnts your rhythm. <br>
        turning every
      </p>
    </div>
    <div class="jhomeview__jumbotron-img">
      <img src="../assets/house2.jpg" alt="">
      <a href="" class="jhomview__text-body">
        Scroll down to explore
      </a>
      <div class="jhomeview__shape"></div>
    </div>
    <div class="jhomeview__second-content">
      <div class="jhomeview__content-left">
        <div class="jhomeview__content-left-top">
          <h3 class="jhomeview__subtitle">
            Take a big step into <br> the future of living
          </h3>
          <div class="jhomeview__text-body">
            Our approach goes beyond transaction through transparent dealings, ethical practices, and a genuine commitment to client satisfaction.
            Jayatibar has emerged as a trusted partner in real estate venturs. With rich legacy of excellence, we have consistently surpassed industry standard to redefine the art of property
            acquisition and sales
          </div>
        </div>
        <router-link class="jhomeview__router-link" to="..">
          Learn More
        </router-link>
      </div>
      <div class="jhomeview__content-right">
        <div class="jhomeview__content-grid-second">
          <div class="jhomeview__simple-card">
            <div class="jhomeview__card-content">
              <h3 class="jhomeview__subtitle">
                10+
              </h3>
              <p class="jhomeview__text-body">
                Happy Customer
              </p>
            </div>
          </div>
          <div class="jhomeview__simple-card jhomeview__simple-card-red">
            <div class="jhomeview__card-content">
              <h3 class="jhomeview__subtitle">
                1+
              </h3>
              <p class="jhomeview__text-body">
                Years Experience
              </p>
            </div>
          </div>
          <div class="jhomeview__simple-card">
            <div class="jhomeview__card-content">
              <h3 class="jhomeview__subtitle">
                1+
              </h3>
              <p class="jhomeview__text-body">
                Property Ready
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="jhomeview__gallery-grow">
      <div class="jhomeview__content">
        <div class="jhomeview__col jhomeview__col1">
          <h1>Foo!</h1>
        </div>
        <div class="jhomeview__col jhomeview__col2">
          <h1>Bar!</h1>
        </div>
        <div class="jhomeview__col jhomeview__col3">
          <h1>Brovinkel!</h1>
        </div>
      </div>
    </div>
    <div class="jhomeview__content-grid-third">
      <JCard
        image="https://via.placeholder.com/600"
        title="Timotius Eliezer Karundeng"
        description="Direktur Utama"/>
      <JCard
        image="https://via.placeholder.com/600"
        title="Timotius Eliezer Karundeng"
        description="Direktur Utama"/>
      <JCard
        image="https://via.placeholder.com/600"
        title="Timotius Eliezer Karundeng"
        description="Direktur Utama"/>
    </div>
    <div class="jhomeview__content-usp">
      <div class="jhomeview__content-usp-top">
        <h1 class="jhomeview__title">
          What are Our Differentiation ?
        </h1>
        <p class="jhomeview__text-body">
          Our properties has been designed with attention to every detail. both technically and visually.
        </p>
      </div>
      <div class="jhomeview__content-usp-bottom">
        <div class="jhomeview__content-grid-third">
          <div class="jhomeview__simple-card-variant">
            <h3 class="jhomeview__subtitle">  
              <div class="jhomeview__simple-card-variant-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#DA4132">
                  <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                </svg>
              </div>
            </h3>
            <p class="jhomeview__text-body">
              Our experienced advisors provide personalized insight, making you real estate journey seamless
            </p>
          </div>
          <div class="jhomeview__simple-card-variant">
            <h3 class="jhomeview__subtitle">  
              <div class="jhomeview__simple-card-variant-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#DA4132">
                  <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                </svg>
              </div>
            </h3>
            <p class="jhomeview__text-body">
              Our experienced advisors provide personalized insight, making you real estate journey seamless
            </p>
          </div>
          <div class="jhomeview__simple-card-variant">
            <h3 class="jhomeview__subtitle">  
              <div class="jhomeview__simple-card-variant-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#DA4132">
                  <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                </svg>
              </div>
            </h3>
            <p class="jhomeview__text-body">
              Our experienced advisors provide personalized insight, making you real estate journey seamless
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="jhomeview__services">
      <h1 class="jhomeview__title">
        Find a Perfect Property to Suit <br>Your Lifestyle
        <span class="jhomeview__img-jumbotron"><img src="../assets/house1.jpg" alt=""></span>
      </h1>
      <JAccordion></JAccordion>
    </div>
    <div class="jhomeview__second-content">
      <div class="jhomeview__content-left jhomeview__content-left-2">
        <h1 class="jhomeview__title">
          Ready to Start Your Project?
        </h1>
        <p class="jhomeview__text-body">
          Embark on Your Dream Home Journey Today, Your Project, Your Vision, Our Expertise. Let's Begin!
        </p>
      </div>
      <div class="jhomeview__content-right">
        <button>arrow</button>
      </div>
    </div>
  </div>
</template>

<script>
//import Tooltip from '../components/Tooltip.vue'
//import InfiniteScroll from '../components/InfiniteScroll.vue'
import JCard from '../components/Card.vue'
import JAccordion from '../components/accordion/AccordionParent.vue'

export default {
  name: 'HomeView',
  components: {
    //Tooltip,
    //InfiniteScroll,
    JCard,
    JAccordion
  }
}
</script>

<style scoped lang="scss">
  .jhomeview {
    height: 200px;
    &__services {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    // hover card
    $jhomeview-bg-color: #fbb;
    $jhomeview-border-color: #f00;
    $jhomeview-padding: 10px;
    $jhomeview-height: 800px;
    $jhomeview-text-color: #fff;

    $jhomeview-col-border-color: #0f0;
    $jhomeview-col-padding: 10px;
    $jhomeview-col-transition-time: .3s;
    $jhomeview-col1-bg: url('../assets/house1.jpg');
    $jhomeview-col2-bg: url('../assets/house2.jpg');
    $jhomeview-col3-bg: url('../assets/house3.jpg');
    .jhomeview__content {
      display: flex;
      border: 1px solid $jhomeview-border-color;
      background: $jhomeview-bg-color;
      padding: $jhomeview-padding;
      height: $jhomeview-height;
      color: $jhomeview-text-color;
    }
    .jhomeview__col {
      flex-grow: 1;
      flex-basis: 0;
      transition: flex-grow $jhomeview-col-transition-time;
      -webkit-transition: flex-grow $jhomeview-col-transition-time;
      border: 1px solid $jhomeview-col-border-color;
      padding: $jhomeview-col-padding;
      &:hover {
        flex-grow: 5;
        transition: flex-grow $jhomeview-col-transition-time;
        -webkit-transition: flex-grow $jhomeview-col-transition-time;
      }
      &.jhomeview__col1 {
        background: $jhomeview-col1-bg;
        background-attachment: fixed;
      }
      &.jhomeview__col2 {
        background: $jhomeview-col2-bg;
        background-attachment: fixed;
      }
      &.jhomeview__col3 {
        background: $jhomeview-col3-bg;
        background-attachment: fixed;
      }
    }

    &__simple-card {
      display: flex;
      justify-content: space-between;
      height: 100px;
      gap: 30px;
    }
    &__card-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &__content-grid-second {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      flex-wrap: wrap;
      gap: 10px;
    }
    &__content-grid-third {
      display: grid;
      grid-template-columns: repeat(3, 1fr) !important;
      flex-wrap: wrap;
      gap: 10px;
    }
    &__second-content {
      display: flex;
      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
    &__content-left {
      flex: 1;
      &-2 {
        flex: 2;
      }
    }
    &__content-right {
      flex: 1;
    }
    &__content-left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 20px;
    }
    &__router-link {
      text-decoration: none;
      text-transform: none;
    }
    &__subtitle {
      font-size: 1.5rem;
      margin: 0;
      padding: 0;
    }
    &__title {
      font-size: 3rem;
      margin: 0;
      padding: 0;
      flex-wrap: wrap;
      &-red {
        color: #DA4132;
        display: flex;
        justify-content: center;
      }
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
    &__text-body {
      font-size: 1.1rem;
      line-height: 28px;
      color: darkcyan;
      text-decoration: none;
      &-1 {
        font-size: 1.4rem;
        color: #232222;
        font-weight: 600;
        padding: 0px;
        margin: 0px;
      }
      &-3 {
        font-size: 1rem;
        color: #232222;
        text-align: center;
      }
      @media (max-width: 768px) {
        &__text-body {
          font-size: .9rem;
          line-height: 23px;
          text-align: center;
        }
      }
    }
  }

  // .jhomeview {
  //   position: relative;
  //   overflow: hidden;
  //   &__jumbotron-image-house {
  //     height: 700px;
  //     overflow: hidden;
  //     background-size: cover;
  //   }
  //   &__shape {
  //     position: absolute;
  //     clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  //     z-index: 2;
  //     color: #DA4132;
  //     background-color: #DA4132;
  //     height: 400px;
  //     width: 700px;
  //     bottom: -70px;
  //     right: -350px;
  //   }
  //   &__section-2 {
  //     background: url('../assets/pattern2-background-2.png');
  //     background-size: cover;
  //   }
  //   &__section-2-content {
  //     max-width: 1200px;
  //     margin: auto;
  //     display: flex;
  //     height: 70vh;
  //     color: whitesmoke;
  //     padding: 80px 0px;
  //   }
  //   &__section-left {
  //     flex: 2;
  //     align-self: center;
  //   }
  //   &__section-right {
  //     flex: 3;
  //     display: flex;
  //     align-self: center;
  //     gap: 20px;
  //   }
  //   &__section-right-first {
  //     display: flex;
  //     flex-direction: column;
  //     gap: 12px;
  //   }
  //   &__span {
  //     color: rgb(171, 169, 169);
  //   }
  //   &__label {
  //     padding: 0;
  //     margin: 0;
  //     font-size: 24px;
  //   }
  //   &__text-body-3 {
  //     padding: 0;
  //     margin: 0;
  //     font-weight: 300;
  //     font-size: 16px;
  //   }
  //   &__title {
  //     font-size: 40px;
  //     font-weight: 600;
  //     color: whitesmoke;
  //   }
  //   &__subtitle {
  //     font-size: 35px;
  //     font-weight: 200px;
  //     color: whitesmoke;
  //     padding: 0px;
  //     margin: 0px;
  //   }
  //   &__section-right-second {
  //     display: flex;
  //     flex-direction: column;
  //     align-items: center;
  //     justify-content: center;
  //     img { height: 160px; }
  //   }
  //   &__button-style-2 {
  //     padding: 12px 24px;
  //     border: 1px solid #DA4132;
  //     border-radius: 8px;
  //     font-weight: 400;
  //     width: 150px;
  //     transition: .5s all ease;
  //     text-decoration: none;
  //     background-color: whitesmoke;
  //     color: #DA4132;
  //     display: flex;
  //     font-size: 16px;
  //     align-items: center;
  //     justify-content: center;
  //     gap: 8px;
  //   }
  //   &__section-4 {
  //     background: linear-gradient(
  //       to bottom,
  //       #DA4132 0%,
  //       #DA4132 50%,
  //       #8d372f 50%,
  //       #8d372f 100%
  //     );
  //     padding: 80px 0px;
  //     display: flex;
  //     flex-direction: column;
  //     align-items: center;
  //   }
  //   &__section-4-content {
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     position: relative;
  //     width: 1000px;
  //     img { 
  //       border-radius: 8px;
  //       box-shadow: 0 2px 12px 0 #00000033;
  //       width: 800px;
  //     }
  //   }
  //   &__title-section-4 {
  //     color: whitesmoke;
  //     font-size: 50px;
  //     font-weight: 100;
  //     text-transform: uppercase;
  //   }
  //   &__tooltip {
  //     position: absolute;
  //     &-1 {
  //       left: 300px;
  //       top: 178px;
  //     }
  //     &-2 {
  //       left: 630px;
  //       top: 150px;
  //     }
  //     &-3 {
  //       top: 150px;
  //       left: 455px;
  //     }
  //     &-4 {
  //       top: 150px;
  //       right: 432px;
  //     }
  //     &-5 {
  //       bottom: 200px;
  //       right: 373px;
  //     }
  //     &-6 {
  //       bottom: 230px;
  //       right: 430px;
  //     }
  //     &-7 {
  //       bottom: 250px;
  //       left: 395px;
  //     } 
  //   }
  //   &__tooltip-dot {
  //     width: 20px;
  //     height: 20px;
  //     background-color: #DA4132;
  //     border-radius: 50%;
  //     position: relative;
  //     animation: pulse 2s infinite;
  //     border: 2px solid lightgray;
  //   }
  //   &__section-5 {
  //     background: url('../assets/pattern1-background-1.png');
  //   }
  //   &__content-5-section {
  //     max-width: 1200px;
  //     margin: auto;
  //     padding: 80px 0px;
  //   }
  //   &__gallery-content {
  //     display: flex;
  //     flex-direction: column;
  //     gap: 16px;
  //   }
  //   &__gallery-header {
  //     display: flex;
  //     align-items: center;
  //     justify-content: space-between;
  //     margin: 40px 0px;
  //   }
  //   &__gallery-list-second {
  //     display: grid;
  //     grid-template-columns: repeat(2, 1fr);
  //     flex-wrap: w;
  //     gap: 16px;
  //   }
  //   &__gallery-list-third {
  //     display: grid;
  //     grid-template-columns: repeat(3, 1fr);
  //     gap: 16px;
  //   }
  //   &__gallery-img {
  //     width: 100%;
  //     border-radius: 8px;
  //     img {
  //       width: 100%;
  //       border-radius: 4px;
  //     }
  //   }
  //   &__section-6 {
  //     background-color: #DA4132;
  //   }
  //   &__content-6-section {
  //     max-width: 1200px;
  //     margin: auto;
  //   }
  // }
  // @keyframes pulse {
  //   0% {
  //       transform: scale(1);
  //       opacity: 1;
  //   }
  //   50% {
  //       transform: scale(1.5);
  //       opacity: 0.5;
  //   }
  //   100% {
  //       transform: scale(1);
  //       opacity: 1;
  //   }
  // }
</style>
