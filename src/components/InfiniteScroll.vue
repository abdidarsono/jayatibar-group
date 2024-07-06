<template>
  <div class="jinfinite">
    <div class="jinfinite__content">
      <h1 class="jinfinite__text" v-for="index in 40" :key="index">{{description}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollInfinite',
  data() {
    return {
      description: "Interior Exterior Consultant Architecture Civil"
    }
  }
}
</script>


<style lang="scss" scoped>

.jinfinite {
  max-width: 100%;
  overflow: hidden;
  background-color: #8d372f;
  &__content {
    width: 100%;
    white-space: nowrap;
    display: inline-block;
    animation: leftflow 15s linear infinite;
  }
  &__text {
    margin: 0px 10px;
    padding: 40px 0px;
    display: inline-block;
    color: whitesmoke;
    font-size: 40px;
    font-weight: 600;
  }
}

@keyframes leftflow {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-150%, 0, 0); }
}
</style>
