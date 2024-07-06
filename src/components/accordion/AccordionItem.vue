<template>
  <div class="accordion-container">
    <div class="accordion" @click="toggle">
      <span :class="{'arrow-icon': true, 'open': isOpen}">&#9656;</span>
      {{ title }}
    </div>
    <transition name="accordion">
      <div class="accordion-content" v-if="isOpen">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style lang="scss">
.accordion-container {
  width: 100%;
}

.accordion {
  border: none;
  background: none;
  width: 100%;
  cursor: pointer;
  text-align: left;
  outline: none;
  transition: background-color 0.4s ease;
  display: flex;
  align-items: center;
  padding: 10px 0;

  .arrow-icon {
    margin-right: 10px;
    transition: transform 0.4s ease;
  }

  .arrow-icon.open {
    transform: rotate(90deg);
  }
}

.accordion-content {
  overflow: hidden;
  transition: max-height 0.4s ease;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.4s ease;
}

.accordion-enter, .accordion-leave-to /* .accordion-leave-active in <2.1.8 */ {
  max-height: 0;
}

@media (max-width: 768px) {
  .accordion {
    padding: 8px 0;
  }
}

@media (max-width: 480px) {
  .accordion {
    padding: 6px 0;
  }
}
</style>
