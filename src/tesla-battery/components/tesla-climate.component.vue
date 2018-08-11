<template>
  <div>
    <label class="tesla-climate__item" :class="{'tesla-heat' :!limit, 'tesla-climate__item--active': value, 'tesla-climate__item--focused': focused === value}">
      <p class="heat">{{ (limit ? 'ac' : 'heat') }} {{ value ? 'on' : 'off' }}</p>
      <i class="tesla-climate__icon"></i>
      <input type="checkbox" name="climate" :checked="value" @click="onClick" @blur="onBlur" @focus="onFocus">
    </label>
  </div>
</template>

<script>
export default {
  name: 'tesla-climate',
  props: {
    limit: {
      type: Boolean,
      required: true,
    },
    value: {
      type: Boolean,
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      focused: false,
    };
  },
  methods: {
    onBlur() {
      this.focused = false;
    },
    onFocus() {
      this.focused = true;
    },
  },
};
</script>
