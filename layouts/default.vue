<template>
    <div class="container">
        <Navigation />
        <div class="weather-layout" ref="mainbg">
            <div class="weather-card">
                <nuxt />
                <div class="choose-day">
                    <div @click="showToday" :class="{'activeTab': $store.state.day.today}" class="day-link former contentIn-center">Сегодня</div>
                    <div @click="showTomorrow" :class="{'activeTab': !$store.state.day.today}" class="day-link latter contentIn-center">Завтра</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from '@/components/navigation.vue'
export default {
    components: {Navigation},
    // mounted() {
    //     this.$refs.mainbg.style.background = `url(${this.$store.state.data.list[0].weather[0].main}.jpg)`
    //     console.log(this.$refs.mainbg)
    //     console.log(`url(${this.$store.state.data.list[0].weather[0].main}.jpg)`)
    // },
    methods: {
        showToday() {
            this.$router.push('/')
            this.$store.commit('day/changeFlag', true)
        },
        showTomorrow() {
            this.$store.commit('writeTomorrowData')
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
</style>