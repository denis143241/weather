<template>
    <form @submit.prevent="submit">
        <div class="flex-box">
            <div class="inputCity">
                <h4>Сменить город</h4>
                <input type="text" class="input-text" placeholder="Введите город" v-model="city" required :disabled="geo">
            </div>
            <div class="geo">
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
    .input-text {
        padding: 10px 15px;
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
        flex-grow: 1;
        background-color: blue;
        border: none;
        padding: 8px 13px;
        border-radius: 10px;
        color: #fff;
    }
    button:hover {
        cursor: pointer;
    }
</style>