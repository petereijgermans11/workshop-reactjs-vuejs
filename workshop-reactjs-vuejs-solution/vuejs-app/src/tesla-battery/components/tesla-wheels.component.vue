<template>
  <div class="tesla-wheels">
    <p class="tesla-wheels__title">Wheels</p>
    <div class="tesla-wheels__container cf">
      <label v-for="size in sizes" :key="size" :class="[{'tesla-wheels__item--active' : (modelValue === size), 'tesla-wheels__item--focused': (focused === size),'tesla-wheels__item': true}, `tesla-wheels__item--${size}`]">
        <input type="radio" name="wheelsize" :modelValue="size" @blur="onBlur" @click="$emit('update:modelValue', size)" @focus="onFocus(size)" :checked="teslaWheels === size">
        <p>
          {{ size }}"
        </p>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tesla-wheels',
  props: ['modelValue'],
  data: () => ({
      sizes: [19, 21],
      focused: null,
  }),
  methods: {
    onBlur() {
      this.focused = '';
    },
    onFocus(size) {
      this.focused = size;
    },
  },
};
</script>
