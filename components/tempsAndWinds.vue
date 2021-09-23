<template>
    <div class="time_img_temp">
        <div class="time">{{date}}</div>
        <img :src="img" class="pad">
        <div class="temp forecast-temp first">{{temp}}</div>
    </div>
</template>

<script>
export default {
    props: ["date", "temp", "img"]
}
</script>

