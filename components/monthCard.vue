<template>
    <div class="card">
        <div class="date">{{formatDate_WDM(list.dt_txt)}}</div>
        <div class="temp-img-description">
            <img :src="picture" alt="" class="weather-img">
            <div class="temp card-temp">{{formatTemp(Math.round(list.main.temp - 273.15))}}</div>
        </div>
        <div class="description">{{list.weather[0].description}}</div>
    </div>
    
</template>

<script>
export default {
    props: ['formatDate_WDM', 'list', 'picture', 'formatTemp']
}
</script>

<style scoped>
    .date {
        text-align: center;
    }
    .card {
        border: 1px solid green;
        flex-grow: 1;
        padding: 8px;
    }
    .card-temp {
        margin-left: 5px;
    }
    .description {
        text-align: center;
    }
    .temp-img-description {
        justify-content: space-evenly;
    }
</style>