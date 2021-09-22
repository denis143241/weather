<template>
    <form @submit.prevent="submit">
        <h4>Сменить город</h4>
        <input type="text" placeholder="Введите город" v-model="city" required>
        <button type="submit">Сохранить</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            city: ''
        }
    },
    methods: {
        submit() {
            this.$store.dispatch('fetch', this.city)
            this.$router.push('/')
        }
    }
}
</script>