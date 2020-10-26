
<template>
  <div class="tesla-stats">
    <ul>
      <li v-for="stat in stats" :key="stat.model">
        <div :class="'tesla-stats-icon tesla-stats-icon--'+ filters.lowerCase(stat.model) "></div>
        <p>{{ filters.km(stat.miles) }}</p>
      </li>
    </ul>
  </div>
</template>


<script>
import filters from './../filter/filters';
export default {
  name: 'tesla-stats',
  props: {
    stats: {
      type: Array,
      required: true,
    },
  },
  setup () {
    return {
      filters
    }
  }
};
</script>


