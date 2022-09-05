<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<template>
  <li class="catalog__item">
    <router-link class="catalog__pic" :to="{name: 'product', params: {id: product.id}}">
      <img :src="product.image" :alt="product.title">
    </router-link>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>

    <span class="catalog__price">
      {{ product.price | formatNumber }} ₽
    </span>

    <ul class="colors colors--black">
      <ColorItem v-for="(color, index) in product.colors" :key="index" :color="color" />
    </ul>
  </li>
</template>

<script>
import ColorItem from '@/components/ColorItem.vue';
import formatNumber from '@/helpers/formatNumber';

export default {
  data() {
    return {
      color: '#73B6EA',
    };
  },
  filters: {
    formatNumber,
  },
  props: ['product'],
  components: { ColorItem },
};
</script>
