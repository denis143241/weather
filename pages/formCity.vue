<template>
    <form @submit.prevent="submit">
        <div class="wrapper-form">
            <div class="form-title">Сменить город</div>
            <input type="text" class="input-text" placeholder="Введите город/страну" v-model="city" required :disabled="geo">
            <div class="checkbox">
                <label for="api">По местоположению</label>
                <input type="checkbox" v-model="geo" class="checkbox">
            </div>
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
                // загрузка данных по геолокации
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
                    $nuxt.$store.dispatch('fetchLocal', [lan, lon])
                }
                function error(err) {
                    console.warn(`ERROR(${err.code}): ${err.message}`);
                }
                navigator.geolocation.getCurrentPosition(success, error, options);
                this.fetchLocal()
            }
            else {
                this.$store.dispatch('fetch', this.city)
            }
            this.$router.push('/')
            this.$store.commit('day/changeFlag', true)
        }
    }
}
</script>

<style scoped>
    form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .form-title {
        font-size: 25px;
        font-weight: 500;
        text-align: center;
        margin-bottom: 50px;
    }
    .flex-box {
        display: flex;
        flex-grow: 2;
        margin-bottom: 10px;
    }
    .geo {
        padding: 20px;
    }
    button {
        margin: 50px 0 20px;
        width: 100%;
        background-color: blue;
        box-shadow: 0 0 7px rgba(97, 97, 252, .5);
        border: none;
        padding: 10px 15px;
        border-radius: 10px;
        color: #fff;
        transition: .2s;
    }
    button:hover {
        cursor: pointer;
        box-shadow: none;
    }
    .wrapper-form {
        text-align: left;
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .input-text {
        padding: 15px 15px;
        margin: 10px 0;
        border-radius: 10px;
        border:none;
        box-shadow: 0 0 5px rgba(0, 0, 0, .1);
        transition: .2s;
    }
    .input-text:focus {
        box-shadow: 0 0 1px rgba(0, 0, 0, .1);;
    }
    input {
        margin: 10px 0;
    }
    .checkbox {
        vertical-align: middle;
        margin: 0 8px;
    }
</style>