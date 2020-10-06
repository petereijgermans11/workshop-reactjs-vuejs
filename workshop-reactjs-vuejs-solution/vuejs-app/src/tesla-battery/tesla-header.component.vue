<template>
        <header class="header">
            <img :src="logo" :title=greeting>
        </header>
</template>

<script>
import logo from './../assets/logo.svg';

export default {
  name: 'tesla-header',
  props: {
    greeting: {
      type: String,
      required: true,
    }
  },
  data: () => ({
     logo
  })
};
</script>