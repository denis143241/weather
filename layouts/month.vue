<template>
    <div class="container">
        <Navigation />
        <div class="weather-layout montly-card">
            <div class="weather-card">
                <div class="flex-wrapper">
                    <nuxt />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from '@/components/navigation.vue'
export default {
    components: {Navigation},
    methods: {
        showToday() {
            this.$router.push('/')
            this.$store.commit('day/changeFlag', true)
        },
        showTomorrow() {
            if (this.$store.state.tomorrow.speeds.length === 0) this.$store.commit('writeTomorrowData')
            this.$router.push('/tomorrow')
            this.$store.commit('day/changeFlag', false)
        },
    }
}
</script>

<style>
    .container {
        font-family: "Roboto", sans-serif;
    }
    .flex-wrapper {
        display: flex;
    }
    .weather-layout {
        height: 100%;
        min-height: 400px;
        padding: 10px 0;
    }
    .weather-card {
        border: none;
    }
</style>