<template>
  <div class="tooltip" @mouseover="showTooltip" @mouseleave="hideTooltip">
    <slot></slot>
    <span class="tooltiptext" :class="{ visible: isVisible }">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'TooltipAls',
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    showTooltip() {
      this.isVisible = true;
    },
    hideTooltip() {
      this.isVisible = false;
    }
  }
};
</script>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltiptext {
  visibility: hidden;
  opacity: 0;
  width: 150px;
  background-color: #8d372f;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  font-size: 16px;
  transition: opacity 0.3s, transform 0.3s;
  bottom: 100%;
  left: 50%;
  transform: translateY(10px);
  margin-left: -60px;
}

.tooltiptext.visible {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}
</style>
