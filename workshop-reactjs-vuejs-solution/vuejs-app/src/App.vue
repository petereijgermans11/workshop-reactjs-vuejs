<template>
    <div id="app">
        <tesla-header :greeting = "greetings" />
        <div class="wrapper">
            <tesla-battery></tesla-battery>
        </div>
    </div>
</template>

<script>
    import TeslaBattery from './tesla-battery/tesla-battery.component';
    import TeslaHeader from './tesla-battery/tesla-header.component';

    export default {
        name: 'app',
        components: {
            TeslaBattery,
            TeslaHeader
        },
        data: () => ({
            greetings: "Hello TESLA !!!"
        })
    };
</script>

<style lang="scss">
    @import 'tesla-style.scss';
</style>
