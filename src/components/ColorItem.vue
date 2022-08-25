<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <li class="colors__item">
    <label class="colors__label">
      <input class="colors__radio sr-only" type="radio" name="color" :value="color"
        v-on:input="$emit('input', $event.target.value)">
      <span class="colors__value" :style="{ backgroundColor: color }">
      </span>
    </label>
  </li>

</template>

<script>

export default {
  props: ['color'],
};
</script>
