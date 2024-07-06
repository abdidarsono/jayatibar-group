<template>
  <footer class="jfooter">
    <div class="jfooter__top">
      <img src="../assets/logo-jtg-third.png" alt="jtg-logo">
      <p class="jfooter__label">Are you interested in becoming a distributing green life on district?</p>
    </div>
    <div class="jfooter__bottom">
      <div class="jfooter__left-wrapper">
        <h1 class="jfooter__subtitle">Let's <div class="jfooter__cursor-interaction-footer"><svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960" width="45px" fill="#28323b"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></div></h1>
        <h1 class="jfooter__subtitle">Work Together</h1>
        <JFooterMail />
      </div>
      <div class="jfooter__right-wrapper">
        <div class="jfooter__quick-link">
          <div class="jfooter__label-wrapper" v-for="(link, index) in links" :key="index">
            <div class="jfooter__label">{{ link.label }}</div>
            <router-link v-for="(child, cIndex) in link.children" :key="cIndex" class="jfooter__link-item" :to="child.href">{{ child.name }}</router-link>
          </div>
        </div>
      </div>
      <div class="jfooter__bottom-social">
        <a class="jfooter__icon-link" href=""><svg height="100%" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M501.303,132.765c-5.887,-22.03 -23.235,-39.377 -45.265,-45.265c-39.932,-10.7 -200.038,-10.7 -200.038,-10.7c0,0 -160.107,0 -200.039,10.7c-22.026,5.888 -39.377,23.235 -45.264,45.265c-10.697,39.928 -10.697,123.238 -10.697,123.238c0,0 0,83.308 10.697,123.232c5.887,22.03 23.238,39.382 45.264,45.269c39.932,10.696 200.039,10.696 200.039,10.696c0,0 160.106,0 200.038,-10.696c22.03,-5.887 39.378,-23.239 45.265,-45.269c10.696,-39.924 10.696,-123.232 10.696,-123.232c0,0 0,-83.31 -10.696,-123.238Zm-296.506,200.039l0,-153.603l133.019,76.802l-133.019,76.801Z" style="fill:#fff;"/></svg></a>
        <a class="jfooter__icon-link" href=""><svg height="100%" style="fill:#ffff;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M256,0.003c-144.225,0 -256,105.645 -256,248.325c0,74.637 30.596,139.126 80.406,183.682c4.172,3.76 6.696,8.962 6.902,14.577l1.391,45.534c0.463,14.525 15.452,23.951 28.742,18.131l50.788,-22.407c4.326,-1.905 9.117,-2.266 13.649,-1.03c23.334,6.439 48.213,9.839 74.122,9.839c144.225,0 256,-105.646 256,-248.326c0,-142.68 -111.775,-248.325 -256,-248.325Zm-153.703,320.953l75.203,-119.295c11.95,-18.955 37.602,-23.694 55.527,-10.25l59.802,44.864c5.511,4.121 13.032,4.069 18.492,-0.051l80.766,-61.296c10.765,-8.19 24.879,4.739 17.616,16.174l-75.152,119.243c-11.95,18.956 -37.601,23.694 -55.526,10.251l-59.802,-44.865c-5.512,-4.121 -13.032,-4.069 -18.492,0.052l-80.818,61.347c-10.765,8.19 -24.879,-4.739 -17.616,-16.174Z" id="Bubble_Solid_3_"/></svg></a>
        <a class="jfooter__icon-link" href=""><svg height="100%" style="fill:#FFFF;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M373.295,307.064c-6.37,-3.188 -37.687,-18.596 -43.526,-20.724c-5.838,-2.126 -10.084,-3.187 -14.331,3.188c-4.246,6.376 -16.454,20.725 -20.17,24.976c-3.715,4.251 -7.431,4.785 -13.8,1.594c-6.37,-3.187 -26.895,-9.913 -51.225,-31.616c-18.935,-16.89 -31.72,-37.749 -35.435,-44.126c-3.716,-6.377 -0.397,-9.824 2.792,-13c2.867,-2.854 6.371,-7.44 9.555,-11.16c3.186,-3.718 4.247,-6.377 6.37,-10.626c2.123,-4.252 1.062,-7.971 -0.532,-11.159c-1.591,-3.188 -14.33,-34.542 -19.638,-47.298c-5.171,-12.419 -10.422,-10.737 -14.332,-10.934c-3.711,-0.184 -7.963,-0.223 -12.208,-0.223c-4.246,0 -11.148,1.594 -16.987,7.969c-5.838,6.377 -22.293,21.789 -22.293,53.14c0,31.355 22.824,61.642 26.009,65.894c3.185,4.252 44.916,68.59 108.816,96.181c15.196,6.564 27.062,10.483 36.312,13.418c15.259,4.849 29.145,4.165 40.121,2.524c12.238,-1.827 37.686,-15.408 42.995,-30.286c5.307,-14.882 5.307,-27.635 3.715,-30.292c-1.592,-2.657 -5.838,-4.251 -12.208,-7.44m-116.224,158.693l-0.086,0c-38.022,-0.015 -75.313,-10.23 -107.845,-29.535l-7.738,-4.592l-80.194,21.037l21.405,-78.19l-5.037,-8.017c-21.211,-33.735 -32.414,-72.726 -32.397,-112.763c0.047,-116.825 95.1,-211.87 211.976,-211.87c56.595,0.019 109.795,22.088 149.801,62.139c40.005,40.05 62.023,93.286 62.001,149.902c-0.048,116.834 -95.1,211.889 -211.886,211.889m180.332,-392.224c-48.131,-48.186 -112.138,-74.735 -180.335,-74.763c-140.514,0 -254.875,114.354 -254.932,254.911c-0.018,44.932 11.72,88.786 34.03,127.448l-36.166,132.102l135.141,-35.45c37.236,20.31 79.159,31.015 121.826,31.029l0.105,0c140.499,0 254.87,-114.366 254.928,-254.925c0.026,-68.117 -26.467,-132.166 -74.597,-180.352" id="WhatsApp-Logo"/></svg></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "JFooter",
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.jfooter {
  display: flex;
  flex-direction: column;
  gap: 16px;
  &__top {
    display: flex;
    flex-direction: column;
    gap: 16px;
    img { 
      width: 50px;
      border-radius: 8px;
    }
  }
  &__label {
    text-transform: uppercase;
    color: darkcyan;
    font: 14px;
    font-weight: 300px;
    margin: 0px;
    padding: 0px;
  }
  &__subtitle {
    display: flex;
    align-items: center;
    margin: 0;
    font-weight: 500;
    font-size: 42px;
    text-transform: uppercase;
    color: #28323b;
    gap: 20px;
  }
  &__cursor-interaction-footer {
    display: flex;
    padding: 4px 80px;
    border-radius: 14px;
    border: .5px solid darkcyan;
    svg {
      transform: rotate(330deg);
    }
  }
  &__bottom {
    display: flex;
    margin: 24px 0px;
  }
  &__quick-link {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .jfooter__label {
      margin-bottom: 4px;
    }
  }
  &__label-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    flex-direction: column;
    align-self: flex-start;
  }
  &__link-item {
    text-decoration: none;
    color: #DA4132;
    &:hover {
      text-decoration: underline;
    }
  }
  &__left-wrapper,
  &__right-wrapper {
    flex: 1;
  }
  &__left-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__email-input {
    margin: 16px 0px;
    width: 330px;
    padding: 15px 10px;
    border: .5px solid #9a3a31;
    border-radius: 4px;
    font-size: 16px;
    &:focus-visible {
      background-color: transparent;
      outline: .5px solid #9a3a31;
      transition: 0.5s linear 0s;
    }
  }
  &__bottom-social {
    display: flex;
    align-self: flex-start;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border-radius: 4px;
    margin: 0px 0px;
    background-color: #DA4132;
    gap: 12px;
    width: fit-content;
    margin: 24px 0px;
  }
  &__icon-link {
    svg {
      width: 24px;
    }
  }
}
@media (max-width: 768px) {
  .jfooter {
    padding: 0px 16px;
    gap: 4px;
    &__top {
      align-items: center;
    }
    &__bottom {
      flex-direction: row;
      margin: 12px 0px;
    }
    &__quick-link {
      flex-direction: row;
      align-items: flex-start;
    }
    &__left-wrapper {
      flex: 1;
      gap: 4px;
      display: none;
    }
    &__label {
      text-align: center;
    }
    &__label-wrapper {
      align-items: center;
    }
    &__right-wrapper {
      flex: 2;
    }
    &__bottom-social {
      margin: 20px 0px;
      align-self: center;
      gap: 50px;
    }
  }
}

@media (max-width: 767px) {
  .jfooter {
    &__bottom {
      flex-direction: column;
    }
    &__quick-link {
      align-items: flex-start;
    }
  }
}
</style>
