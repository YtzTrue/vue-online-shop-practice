<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="form__counter">
    <button type="button" aria-label="Убрать один товар" @click="decrement">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>

    <input type="numder" v-bind:value="productAmount" v-on:input="$emit('value-change', $event.target.value)">

    <button type="button" aria-label="Добавить один товар" @click="increment">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-plus"></use>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productAmount: this.value,
    };
  },
  model: {
    prop: 'value',
    event: 'value-change',
  },
  props: ['value'],
  methods: {
    increment() {
      this.$emit('value-change', this.productAmount += 1);
    },
    decrement() {
      if (this.productAmount > 1) {
        this.$emit('value-change', this.productAmount -= 1);
      } else this.productAmount = 1;
    },
  },
};
</script>
