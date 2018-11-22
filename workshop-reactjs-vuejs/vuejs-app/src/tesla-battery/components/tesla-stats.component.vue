<template>
  <div class="tesla-stats">
    <ul>
      <li v-for="stat in stats" :key="model">
        <div :class="'tesla-stats-icon tesla-stats-icon--'+stat.model |  lowercase"></div>
        <p>{{ stat.miles }}
          <span>MI</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tesla-stats',
  props: {
    stats: {
      type: Array,
      required: true,
    },
  },
  filters: {
    lowercase(value) {
      return !value ? '' : value.toLowerCase();
    },
  },
};
</script>
