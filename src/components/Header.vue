<template>
  <nav class="jheader">
    <div class="jheader__content-wrapper">
      <div v-if="!isMobile" class="box jheader__router-wrapper">
        <div class="jheader__router-item-wrapper" v-for="(link, index) in links" :key="index">
          <router-link class="jheader__router-item" :to="link.href">
            {{ link.name }}
          </router-link>
          <div class="jheader__submenu-wrapper">
            <svg v-if="link.children && link.children.length" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#DA4132"><path d="M480-360 280-560h400L480-360Z"/></svg>
            <div v-if="link.children && link.children.length" class="jheader__submenu">
              <router-link v-for="(child, cIndex) in link.children" :key="cIndex" class="jheader__submenu-item" :to="child.href">
                {{ child.name }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="box jheader__hamburger" @click="toggleMobileMenu">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#DA4132"><path d="M0-480v-60h960v60H0Zm0 300v-60h960v60H0Zm0-600v-60h960v60H0Z"/></svg>
      </div>
      <div class="box jheader__logo">
        <img src="@/assets/logo-jtg-second.png" alt="logo">
      </div>
      <div class="box jheader__contact">
        <router-link type="button" to="/contact" class="jheader__button">
          Get Contact
        </router-link>
      </div>
    </div>
    <div v-if="isMobile && isMobileMenuOpen" class="jheader__mobile-menu">
      <div class="jheader__router-item-wrapper" v-for="(link, index) in links" :key="index">
        <router-link class="jheader__router-item" :to="link.href">
          {{ link.name }}
        </router-link>
        <div v-if="link.children && link.children.length" class="jheader__mobile-submenu">
          <router-link v-for="(child, cIndex) in link.children" :key="cIndex" class="jheader__mobile-submenu-item" :to="child.href">
            {{ child.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "JHeader",
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isMobileMenuOpen: false,
      isMobile: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
    }
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize); 
  }
}
</script>

<style lang="scss">
  .jheader {
    display: flex;
    align-items: center;
    padding: 12px 0px;
    background-color: white;
    z-index: 99;
    &__content-wrapper {
      width: 1200px;
      margin: auto;
      display: flex;
      align-items: center;
    }
    &__router-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }
    &__router-item-wrapper {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      &:hover .jheader__submenu {
        max-height: 200px;
        opacity: 1;
        background-color: #DA4132;
      }
    }
    &__router-item {
      text-decoration: none;
      transition: .5s all ease;
      font-size: 16px;
      font-weight: 500;
      color: #DA4132;
      &:hover { color: #a92b1f; }
    }
    &__submenu-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }
    &__submenu {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #DA4132;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      border-radius: 4px;
      padding: 8px 0;
      z-index: 10;
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
    }
    &__submenu-item {
      display: block;
      padding: 8px 16px;
      white-space: nowrap;
      font-weight: 500;
      text-decoration: none;
      transition: .5s all ease;
      color: whitesmoke;
      background-color: #DA4132;
      &:hover { 
        color: whitesmoke;
        background-color: #a92b1f;
      }
    }
    &__logo {
      img {
        width: 100px;
      }
    }
    &__button {
      border: 1px solid #DA4132;
      background-color: #DA4132;
      text-decoration: none;
      color: whitesmoke; 
      border-radius: 4px;
      border: none;
      text-align: center;
      padding: 16px;
      width: 150px;
      font-weight: 400;
      transition: all 0.5s;
      cursor: pointer;
      display: inline-block;
      position: relative;
      transition: 0.5s;
      &:hover { 
        background-color:#a92b1f;
        padding-right: 24px;
        padding-left: 8px;
        &::after {
          opacity: 1;
          right: 10px;
        }
      }
      &::after {
        content: '»';
        position: absolute;
        opacity: 0;  
        top: 14px;
        right: -20px;
        transition: 0.5s;
      }
    }
    &__hamburger {
      display: none;
      cursor: pointer;
      svg {
        width: 24px;
        height: 24px;
        fill: #DA4132;
      }
    }
    &__mobile-menu {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 55px;
      left: 0;
      width: 100%;
      background-color: white;
      padding: 16px 0;
      z-index: 10;
    }
    &__mobile-submenu {
      display: flex;
      flex-direction: column;
      padding: 8px 16px;
    }
    &__mobile-submenu-item {
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      color: #DA4132;
      padding: 8px 0;
      &:hover {
        color: #a92b1f;
      }
    }
  }
  .box {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .box:first-child { 
    margin-right: auto; 
    justify-content: flex-start;
  }
  .box:last-child  { 
    margin-left: auto;  
    align-self: center;
    justify-content: flex-end;
  }

  @media (max-width: 768px) {
    .jheader__content-wrapper {
      width: 100%;
      padding: 0 16px;
    }
    .jheader__router-item,
    .jheader__mobile-submenu-item {
      font-size: .9rem;
    }
    .jheader__router-wrapper {
      display: none;
    }
    .jheader__router-item-wrapper {
      display: flex;
      gap: 8px;
      flex-direction: column;
      align-items: flex-start;
    }
    .jheader__hamburger {
      display: flex;
    }
    .jheader__mobile-menu {
      display: flex;
      padding: 16px;
      box-shadow: none;
      gap: 8px;
    }
    .jheader__mobile-submenu {
      padding: 0px;
    }
    .jheader__mobile-submenu-item {
      padding: 0px;
      font-weight: 500;
      color: #DA4132;
    }
    .jheader__button {
      width: auto;
      font-size: .79rem;
      padding: 12px;
    }
  }
</style>
