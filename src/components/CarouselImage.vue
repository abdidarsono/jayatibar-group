<template>
  <div class="carousel">
    <div class="carousel-images" :style="carouselStyle">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="carousel-image"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>
    </div>
    <button @click="prev" class="carousel-control prev">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#DA4132">
        <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
      </svg>
    </button>
    <button @click="next" class="carousel-control next">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#DA4132">
        <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "CarouselComponent",
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
      windowWidth: window.innerWidth
    };
  },
  computed: {
    carouselStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
        height: this.windowWidth <= 768 ? 'auto' : '400px' // Adjusted height for mobile screens
      };
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  width: 100%; /* Adjusted to full width for responsiveness */
  max-width: 700px; /* Added max-width for large screens */
  margin: 0 auto; /* Center align on large screens */
  overflow: hidden;
  border-radius: 8px;
  &:hover {
    .carousel-control {
      opacity: 1;
    }
  }

  .carousel-images {
    display: flex;
    transition: transform 0.5s ease;
  }

  .carousel-image {
    min-width: 100%;
    height: 400px;
    background-size: cover;
    background-position: center;
  }

  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    border: none;
    width: 50px;
    opacity: 0;
    height: 50px;
    color: #DA4132;
    cursor: pointer;
    background-color: whitesmoke;
    border-radius: 50%;
    transition: .5s all ease-in-out;
    &:hover {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    &.prev {
      left: 10px;
    }

    &.next {
      right: 10px;
    }
  }

  @media (max-width: 768px) {
    .carousel-image {
      height: 250px; /* Adjusted height for mobile screens */
    }
  }
}
</style>
