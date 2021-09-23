<template>
    <div class="card">
        <div class="date">15 сен</div>
        <div class="temp-img-description">
            <img src="sun.png" alt="" class="weather-img">
            <div class="temp card-temp">+11</div>
        </div>
        <div class="card-temp-min">мин +8</div>
    </div>
    
</template>

<style scoped>
    .card {
        border: 1px solid green;
        flex-grow: 1;
        padding: 8px;
    }
    .card-temp {
        margin-left: 5px;
    }
    .card-temp-min {
        float: right;
        padding-right: 10px;
    }
</style>