<template>
  <div class="tesla-counter">
    <p class="tesla-counter__title" v-once>{{ title }}</p>
    <div class="tesla-counter__container cf">
      <div class="tesla-counter__item" tabindex="0" @blur.stop.prevent="onBlur" @keydown.stop.prevent="onKeyUp" @focus.stop.prevent="onFocus">
        <p class="tesla-counter__number">
          {{ kmhOrMph }}
          <span>{{ unit }}</span>
        </p>
        <div class="tesla-counter__controls" tabindex="-1">
          <button tabindex="-1" type="button" @click="increment" :disabled="modelValue === max"></button>
          <button tabindex="-1" type="button" @click="decrement" :disabled="modelValue === min"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tesla-counter',
  
  props: {
    step: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Number,
      required: false,
    },
  },
  data: () => ({
    focused: false,
  }),
  computed: {
    kmhOrMph() {
      return this.unit === 'kmh'
        ? Math.floor(this.modelValue * 1.609344)
        : this.modelValue;
    },
  },
  methods: {
    increment() {
      if (this.modelValue < this.max) {
        this.$emit('update:modelValue', this.modelValue + this.step);
      }
    },
    decrement() {
      if (this.modelValue > this.min) {
        this.$emit('update:modelValue', this.modelValue - this.step);
      }
    },
    onFocus() {
      this.focused = false;
    },
    onBlur() {
      this.focused = true;
    },
    onKeyUp(event) {
      let handlers = {
        ArrowDown: () => this.decrement(),
        ArrowUp: () => this.increment(),
      };

      if (handlers[event.code]) {
        handlers[event.code]();
      }
    },
  },
};
</script>
