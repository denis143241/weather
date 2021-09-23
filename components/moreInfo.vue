<template>
    <div class="moreInfo">
        <div class="row">
          <div class="description info-margin">По ощущению</div>
          <div class="description-value info-margin">{{feelsLike}}</div>
        </div>
        <div class="row">
          <div class="description info-margin">Ветер</div>
          <div class="description-value info-margin">{{windSpeed}} м/с, {{windDeg}}</div>
        </div>
        <div class="row">
          <div class="description info-margin">Давление</div>
          <div class="description-value info-margin">{{pressure}} мм рт. ст.</div>
        </div>
        <div class="row">
          <div class="description info-margin">Влажность</div>
          <div class="description-value info-margin">{{humidity}}%</div>
        </div>
        <div class="row rain">
          <div class="description info-margin rain">Дождь в ближайшие 3 часа</div>
          <div class="description-value info-margin">{{rain}}</div>
        </div>
        <div class="row">
          <div class="description info-margin">Температура воды</div>
          <div class="description-value info-margin">+12,8</div>
        </div>
      </div>
</template>

<script>
export default {
    props: ["feelsLike", "windSpeed", "windDeg", "pressure", "humidity", "rain"],
    data() {
        return {
            degrees: ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ'],
        }
    },
    methods: {
        formatWind() {
            let cell = Math.round(deg / 45)
            if (cell >= 8) cell = 0
            return this.degrees[cell]
        },
        formatTemp(value) {
            if (value > 0) return `+${value}`
            else if (value === 0) return value
            else return `-${value}`
        },
    }
}
</script>