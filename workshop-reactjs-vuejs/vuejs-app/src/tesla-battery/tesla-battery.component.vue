<template>
  <form class="tesla-battery">
    <h1>{{ title }}</h1>
    <tesla-car :wheelsize="wheels" :speed="tesla.speed" />
    <tesla-stats :stats="stats" />
    <div class="tesla-controls cf">
      <tesla-counter title="Speed" unit="kmh" :step="5" :min="45" :max="70" v-model="tesla.speed" />
      <div class="tesla-climate cf">
        <tesla-counter title="Outside Temperature" unit="°" :step="10" :min="-10" :max="40" v-model="tesla.temperature" />
        <tesla-climate :limit="tesla.temperature > 20" :value="tesla.climate" :onClick="changeClimate" />
      </div>
      <tesla-wheels v-model="wheels" />
    </div>
    <div class="tesla-battery__notice">
      <p>
        The actual amount of range that you experience will vary based on your particular use conditions. See how particular use conditions may affect your range in our simulation model.
      </p>
      <p>
        Vehicle range may vary depending on the vehicle configuration, battery age and condition, driving style and operating, environmental and climate conditions.
      </p>
    </div>
  </form>
</template>

<script>
import TeslaCar from './components/tesla-car.component';
import TeslaClimate from './components/tesla-climate.component';
import TeslaCounter from './components/tesla-counter.component';
import TeslaStats from './components/tesla-stats.component';
import TeslaWheels from './components/tesla-wheels.component';

import teslaService from './tesla-battery.service';

export default {
  name: 'tesla-battery',
  components: {
    TeslaCar,
    TeslaClimate,
    TeslaCounter,
    TeslaStats,
    TeslaWheels,
  },
  data() {
    return {
      title: 'Ranger Per Charge',
      tesla_models: ['60', '60D', '75', '75D', '90D', 'P100D'],
      tesla: {
        speed: 55,
        temperature: 20,
        climate: true,
        wheels: 19,
      },
    };
  },
  computed: {
    models() {
      return teslaService.getModelData();
    },
      stats() {
      return this.tesla_models.map(model => {
        const {speed, temperature, climate, wheels} = this.tesla;
        const miles = this.models[model][wheels][climate ? 'on' : 'off'].speed[
          speed
        ][temperature];
        return {
          model,
          miles,
        };
      });
    },
  },
  methods: {
    changeClimate() {
      this.tesla.climate = !this.tesla.climate;
    },
  },
};
</script>
