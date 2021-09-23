<template>
    <div>
        <div class="city">{{$store.getters['getCity']}}</div>
        <div class="content-card">
            <div class="today">
                <div class="date">{{dateNow}}</div>
                <div class="temp-img-description">
                    <div class="temp">{{formatTemp($store.state.tomorrow.temp)}}</div>
                    <img :src="setPicture" alt="" class="pad">
                    <p class="description-weather pad">{{$store.state.tomorrow.description}}</p>
                </div>
                <more-info :feelsLike="formatTemp($store.state.tomorrow.feels_like)"
                            :windSpeed="$store.state.tomorrow.wind"
                            :windDeg="formatWind($store.state.tomorrow.deg)"
                            :pressure="$store.state.tomorrow.pressure"
                            :humidity="$store.state.tomorrow.humidity"
                            :rain="$store.state.tomorrow.rain" 
                />
                </div>
            <div class="temp_wind">
                <div class="hour-forecast-top">
                    <temps-and-winds v-for="index in 5" :key="index" 
                        :date="formatDate($store.state.tomorrow.dates[index - 1])"
                        :temp="formatTemp($store.state.tomorrow.temps[index - 1])" 
                        :img="setForecastPicture(index)"
                    />
                </div>
                <div class="wind-title">Скорость ветра, м/с</div>
                <div class="wind_speed">
                    <div class="speed-block" id="parallelogram" v-for="(speed, index) in $store.state.tomorrow.speeds" :key="index">{{speed}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moreInfo from '@/components/moreInfo.vue'
import tempsAndWinds from '@/components/tempsAndWinds.vue'
export default {
    middleware: 'loaded',
    components: {moreInfo, tempsAndWinds},
    methods: {
        showDescriptions() {
            this.showMore = !this.showMore
        },
        formatTemp(value) {
            if (value > 0) return `+${value}`
            else if (value === 0) return value
            else return `-${value}`
        },
        formatWind(deg) {
            let cell = Math.round(deg / 45)
            if (cell >= 8) cell = 0
            return this.$store.state.degree.degrees[cell]
        },
        formatDate(date) {
            return date.split(' ')[1].split(':').splice(0, 2).join(':')
        },
        setForecastPicture(index) {
            return `${this.$store.state.data.list[index].weather[0].main}.png`
        }
    },
    computed: {
        setPicture() {
            return `${this.$store.state.data.list[8].weather[0].main}.png`
        },
        dateNow() {
            var options = {
                month: 'long',
                day: 'numeric',
                weekday: 'short',
                timezone: 'UTC',
                hour: 'numeric',
                minute: 'numeric',
            };
            let date = new Date()
            date.setDate(date.getDate() + 1)
            return new Date(date).toLocaleString('ru', options)
      }
    }
}
</script>