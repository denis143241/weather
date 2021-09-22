export const state = () => ({
    data: []
})

export const mutations = {
    setData(state, payload) {
        state.data = payload
    }
}

export const actions = {
    async fetch({commit}, city="Madrid") {
        // const data = await this.$axios.$get(`https://api.openweathermap.org/data/2.5/weather?q=${сity}&lang=ru&appid=b14f3c358e9c09d365937537521eeffa`)
        const data = await this.$axios.$get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&appid=b14f3c358e9c09d365937537521eeffa`)
        commit('setData', data)
    }
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
        return s.data.list[0].rain['3h'] * 100
    }
}