<template>
<div>
  <h1>Упс... Мы не смогли найти эту страницу:(</h1>
  <router-link :to="{name: 'main'}">Перейти в каталог</router-link>
</div>
</template>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
