<template>
  <div class="jtabs">
    <div class="jtabs__items">
      <button
        v-for="(label, index) in tabLabels"
        :key="index"
        :class="['jtabs__item', { active: selectedTab === index }]"
        @click="selectTab(index)"
      >
        {{ label }}
      </button>
    </div>
    <div class="jtabs__content">
      <slot :name="`tab${selectedTab + 1}`"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "JtabsComponent",
  props: {
    tabLabels: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedTab: 0
    };
  },
  methods: {
    selectTab(index) {
      this.selectedTab = index;
    }
  }
}
</script>

<style scoped lang="scss">
.jtabs {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  &__items {
    display: flex;
    cursor: pointer;
    gap: 20px;
    width: 70%;
    align-self: center;
    flex-wrap: wrap;
    justify-content: center;
    button {
      outline: none;
      border: none;
      padding: 20px;
      font-size: 1.5rem;
      background-color: #DA4132;
      color: whitesmoke;
      transition: .2s all ease;
      border-radius: 4px;
      &:hover {
        background-color:#a92b1f;
      }
    }
  }
  &__item {
    flex: 1;
    padding: 10px;
    text-align: center;
    background-color: #f1f1f1;
    max-width: 100%;
  }
  .active {
    background-color: #fff;
    color: #DA4132;
  }
  &__content {
    background-color: #fff;
    padding: 20px;
  }

  @media (max-width: 767px) {
    padding: 0px 16px;
    &__items {
      gap: 10px;
      width: 90%;
      button {
        padding: 10px;
        font-size: 1.2rem;
      }
    }
    &__item {
      padding: 10px;
    }
    &__content {
      padding: 10px;
    }
  }
}
</style>
