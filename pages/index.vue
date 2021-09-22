<template>
  <div>
<!-- <div class="weather-layout">
  <div class="weather-card"> -->
    <div class="city">{{getCity}}</div>
    <div class="content-card">
      <div class="today">
        <div class="date">Ср, 15 сентября, 16:27</div>
        <div class="temp-img-description">
          <div class="temp">{{formatTemp(nowTemp)}}</div>
          <img src="sun.png" alt="" class="pad">
          <p class="description-weather pad">{{getWeatherDescriptions}}</p>
        </div>
        <more-info :feelsLike="formatTemp(feelsLike)" 
                  :windSpeed="windSpeed" 
                  :windDeg="formatWind(windDeg)" 
                  :pressure="pressure" 
                  :humidity="humidity"
                  :rain="rain"
                  
        /> 
      </div>
    <div class="temp_wind">
        <div class="hour-forecast-top">
            <temps-and-winds v-for="index in 5" :key="index" 
                  :date="formatDate(forecastDates[index-1])" 
                  :temp="formatTemp(forecastTemps[index-1])"  
            />
        </div>
        <div class="wind-title">Скорость ветра, м/с</div>
        <div class="wind_speed">
          <div class="speed-block" id="parallelogram" v-for="(speed, index) in forecastSpeeds" :key="index">{{speed}}</div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import formCity from '@/components/formCity.vue'
import moreInfo from '@/components/moreInfo.vue'
import tempsAndWinds from '@/components/tempsAndWinds.vue'
export default {
  components: {formCity, moreInfo, tempsAndWinds},
  async fetch({store}) {
    if (store.state.data.length === 0) {
      await store.dispatch('fetch')
    }
  },
  data() {
    return {
      degrees: ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ'],
      showMore: false
    }
  },
  methods: {
    // showToday() {
    //   this.$router.push('/')
    //   this.$store.commit('day/changeFlag', true)
    // },
    // showTomorrow() {
    //   this.$router.push('/tomorrow')
    //   this.$store.commit('day/changeFlag', false)
    // },
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
      return this.degrees[cell]
    },
    formatDate(date) {
      return date.split(' ')[1].split(':').splice(0, 2).join(':')
    },
  },
  computed: {
    ...mapGetters([
      'getCity', 'getWeatherDescriptions', 'nowTemp', 'minTemp', 'maxTemp',
      'feelsLike', 'windSpeed', 'windDeg', 'humidity', 'pressure', 'forecastData',
      'rain'
      ]),
      forecastTemps() {
        return this.forecastData.temps
      },
      forecastDates() {
        return this.forecastData.dates
      },
      forecastSpeeds() {
        return this.forecastData.speeds
      }
  }
  
}
</script>
