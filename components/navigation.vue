<template>
    <div class="header">
        <div class="title">Погода.ru</div>
        <ul>
            <li><nuxt-link to="/" exact active-class="activeA">На сегодня</nuxt-link></li>
            <li><nuxt-link to="/monthly" active-class="activeA">На 5 дней</nuxt-link></li>
            <li><nuxt-link to="/formCity" active-class="activeA">Сменить город</nuxt-link></li>
        </ul>
    </div>
</template>