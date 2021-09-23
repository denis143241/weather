<template>
    <div class="row-cards">
        <month-card v-for="index in 5" :key="index" 
                    :formatDate_WDM="formatDate_WDM" 
                    :setForecastPicture="setForecastPicture" 
                    :list="$store.state.data.list[(index - 1) * 8]"
                    :formatTemp="formatTemp"
                    :picture="setForecastPicture((index - 1) * 8)"
        />
    </div>
</template>

<script>
import monthCard from '@/components/monthCard.vue'
export default {
    layout: 'month',
    components: {monthCard},
    methods: {
        formatDate_WDM(date) {
            date = date.split(' ')
            var options = {
                month: 'long',
                day: 'numeric',
                weekday: 'short',
            };
            return new Date(date[0]).toLocaleString('ru', options)
        },
        setForecastPicture(index) {
            return `${this.$store.state.data.list[index].weather[0].main}.png`
        },
        formatTemp(value) {
            if (value > 0) return `+${value}`
            else if (value === 0) return value
            else return `-${value}`
        },
    }
}
</script>

<style scoped>
    .weather-card {
        height: 0;
    }
    .row-cards {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
</style>