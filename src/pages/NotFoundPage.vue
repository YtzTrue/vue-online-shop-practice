<template>
<div>
  <h1>Упс... Мы не смогли найти эту страницу:(</h1>
  <a href="#" @click.prevent="gotoPage('main')">Перейти в каталог</a>
</div>
</template>

<script>
import gotoPage from '@/helpers/gotoPage';

export default {
  methods: {
    gotoPage,
  },
};
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
