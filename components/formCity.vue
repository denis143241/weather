<template>
    <form @submit.prevent="submit">
        <h4>Сменить город</h4>
        <input type="text" placeholder="Введите город" v-model="sity" required>
        <button type="submit">Сохранить</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            sity: ''
        }
    },
    methods: {
        submit() {
            this.$store.dispatch('fetch', this.sity)
            this.sity = ''
        }
    }
}
</script>

<style scoped>
    h4 {
        margin-top: 50px;
    }
</style>