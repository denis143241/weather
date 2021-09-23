<template>
    <form @submit.prevent="submit">
        <div class="inputCity">
            <h4>Сменить город</h4>
            <input type="text" placeholder="Введите город" v-model="city" required :disabled="geo">
        </div>
        <div class="geo">
            <label for="api">По местоположению</label>
            <input type="checkbox" v-model="geo">
        </div>
        <button type="submit">Сохранить</button>
    </form>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data() {
        return {
            city: '',
            geo: this.$store.state.geo,
            lat: 0,
            lon: 0
        }
    },
    layout: 'month',
    methods: {
        ...mapActions(['fetchLocal']),
        submit() {
            if (this.geo) {
                var options = {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                }

                function success(pos) {
                    var crd = pos.coords;
                    console.log(crd)
                    let lan = crd.latitude
                    let lon = crd.longitude
                    console.log(lan, lon)
                    $nuxt.$store.dispatch('fetchLocal', [lan, lon])
                }
                function error(err) {
                    console.warn(`ERROR(${err.code}): ${err.message}`);
                }
                navigator.geolocation.getCurrentPosition(success, error, options);
                console.log(this.lat, this.lon)
            }
            else {
                this.$store.dispatch('fetch', this.city)
            }
            this.$router.push('/')
            this.$refs.mainbg.style.background = `url(${this.$store.state.data.list[0].weather[0].main}.jpg)`
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
    }
</style>