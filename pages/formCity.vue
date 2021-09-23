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
export default {
    data() {
        return {
            city: '',
            geo: this.$store.state.geo
        }
    },
    layout: 'month',
    methods: {
        submit() {
            this.geo ? this.$store.dispatch('fetchLocal') : this.$store.dispatch('fetch', this.city)
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