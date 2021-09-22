<template>
    <form @submit="submit">
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
            this.$store.dispatch('fetch', this.сity)
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
    form {
        margin-top: 50px;
    }
</style>