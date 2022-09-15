<template>
  <li class="cart__order">
    <h3>{{ item.product.title +'&nbsp;'+ item.amount + '&nbsp;шт.'}}</h3>
    <b>{{ (item.amount * item.product.price) | formatNumber }} ₽</b>
    <span>Артикул: {{ item.product.id }}</span>
  </li>
</template>

<script>
import formatNumber from '@/helpers/formatNumber';

export default {
  filters: { formatNumber },
  props: ['item'],
};
</script>
