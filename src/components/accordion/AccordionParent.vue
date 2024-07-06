<template>
  <div class="accordion-parent">
    <AccordionItem v-for="(item, index) in items" :key="index" :title="item.title">
      <template #content>
        {{ item.content }}
      </template>
    </AccordionItem>
  </div>
</template>

<script>
import AccordionItem from './AccordionItem.vue';

export default {
  components: {
    AccordionItem
  },
  data() {
    return {
      items: [
        { title: 'Item 1', content: 'Content for item 1' },
        { title: 'Item 2', content: 'Content for item 2' },
        { title: 'Item 3', content: 'Content for item 3' }
      ]
    };
  }
};
</script>

<style lang="scss">
.accordion-parent {
  width: 100%;
}
</style>
