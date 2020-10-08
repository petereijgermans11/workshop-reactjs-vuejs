
<template>
    <div id="app">
        <header class="header">
            <img :src="logo" :title=greeting>
        </header>
        <div class="wrapper">
            <tesla-battery></tesla-battery>
        </div>
    </div>
</template>

<script>
    import TeslaBattery from './tesla-battery/tesla-battery.component';

    import logo from './assets/logo.svg';

    export default {
        name: 'app',
        components: {
            TeslaBattery,
        },
       data: () => ({
            logo,
            greeting: "Hello TESLA !!!"
        })
    };
</script>

<style lang="scss">
    @import 'tesla-style.scss';
</style>

