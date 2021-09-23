<template>
    <div class="row-cards">
        <month-card v-for="index in 5" :key="index" />
    </div>
</template>

<script>
import monthCard from '@/components/monthCard.vue'
export default {
    layout: 'month',
    components: {monthCard}
}
</script>

<style scoped>
    .row-cards {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
</style>