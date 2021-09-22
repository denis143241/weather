<template>
    <div>
        <div class="city">{{$store.getters['getCity']}}</div>
        <div class="content-card">
            <div class="today">
                <div class="date">Ср, 15 сентября, 16:27</div>
                <div class="temp-img-description">
                    <div class="temp">{{$store.state.tomorrow.temp}}</div>
                    <img src="sun.png" alt="" class="pad">
                    <p class="description-weather pad">{{$store.state.tomorrow.description}}</p>
                </div>
                <more-info :feelsLike="$store.state.tomorrow.feels_like"
                            :windSpeed="$store.state.tomorrow.wind"
                            :windDeg="$store.state.tomorrow.deg"
                            :pressure="$store.state.tomorrow.pressure"
                            :humidity="$store.state.tomorrow.humidity"
                            :rain="$store.state.tomorrow.rain" 
                />
                </div>
            <div class="temp_wind">
                <div class="hour-forecast-top">
                    <temps-and-winds v-for="index in 5" :key="index" 
                        :date="$store.state.tomorrow.dates[index - 1]"
                        :temp="$store.state.tomorrow.temps[index - 1]" 
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
    components: {moreInfo, tempsAndWinds}
}
</script>