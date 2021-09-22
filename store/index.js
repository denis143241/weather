export const state = () => ({
    data: [],
    tomorrow: {
        dates: [],
        temps: [],
        speeds: []
    }
})

export const mutations = {
    setData(state, payload) {
        state.data = payload
    },
    writeTomorrowData(state) {
        state.tomorrow.temp = Math.round(state.data.list[1].main.temp - 273.15)
        state.tomorrow.description = state.data.list[1].weather[0].description
        state.tomorrow.feels_like = Math.round(state.data.list[1].main.feels_like - 273.15)
        state.tomorrow.wind = Math.round(state.data.list[1].wind.speed)
        state.tomorrow.deg = state.data.list[1].wind.deg
        state.tomorrow.pressure = Math.floor(state.data.list[1].main.pressure / 1.333)
        state.tomorrow.humidity = state.data.list[1].main.humidity
        state.tomorrow.rain = state.data.list[1].rain ? `${state.data.list[0].rain['3h'] * 100}` : 'не ожидается'
        for (let i = 2; i < 7; i++) {
            state.tomorrow.dates.push(state.data.list[i].dt_txt)
            state.tomorrow.temps.push(Math.round(state.data.list[i].main.temp - 273.15))
            state.tomorrow.speeds.push(Math.round(state.data.list[i].wind.speed))
        }
    }
}

export const actions = {
    async fetch({commit}, city="Vladimir") {
        // const data = await this.$axios.$get(`https://api.openweathermap.org/data/2.5/weather?q=${сity}&lang=ru&appid=b14f3c358e9c09d365937537521eeffa`)
        const data = await this.$axios.$get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&appid=b14f3c358e9c09d365937537521eeffa`)
        commit('setData', data)
    },
}

export const getters = {
    getWeatherDescriptions: s => {
        return s.data.list[0].weather[0].description
    },
    getCity: s => {
        return s.data.city.name
    },
    nowTemp: s => {
        let temp = Math.round(s.data.list[0].main.temp - 273.15)
        return temp
    },
    maxTemp: s => {
        let temp = Math.round(s.data.list[0].main.temp_max - 273.15)
        return temp
    },
    minTemp: s => {
        let temp = Math.round(s.data.list[0].main.temp_min - 273.15)
        return temp
    },
    feelsLike: s => {
        let temp = Math.round(s.data.list[0].main.feels_like - 273.15)
        return temp
    },
    speeds: s => {
        let speeds = []
        for (let i = 1; i < 6; i++) {
            speeds.push(Math.round(s.data.list[i].wind.speed))
        }
        return speeds
    },
    forecastData: s => {
        let forecast = {
            speeds: [],
            dates: [],
            temps: []
        }
        for (let i = 1; i < 6; i++) {
            forecast.speeds.push(Math.round(s.data.list[i].wind.speed))
            forecast.temps.push(Math.round(s.data.list[i].main.temp - 273.15))
            forecast.dates.push(s.data.list[i].dt_txt)
        }
        return forecast
    },
    temps: s => {
        let temps = []
        for (let i = 1; i < 6; i++) {
            temps.push(Math.round(s.data.list[i].main.temp - 273.15))
        }
        return temps
    },
    windSpeed: s => {
        return `${Math.round(s.data.list[0].wind.speed)} м/с`
    },
    humidity: s => {
        return `${s.data.list[0].main.humidity} %`
    },
    pressure: s => {
        return `${Math.floor(s.data.list[0].main.pressure / 1.333)} мм рт.с`
    },
    windDeg: s => {
        return s.data.list[0].wind.deg
    },
    rain: s => {
        return s.data.list[0].rain ? `${s.data.list[0].rain['3h'] * 100}%` : 'не ожидается'
    }
}