<template>
    <nav>
        <div class="row">
            <div class="col-md-3 tab">
                <div class="nav-title">Погода</div>
            </div>
            <div class="col-md-3 tab">
                <nuxt-link to="/" exact active-class="active">На день</nuxt-link>
            </div>
            <div class="col-md-3 tab">
                <nuxt-link to="/monthly" active-class="active">На месяц</nuxt-link>
            </div>
            <div class="col-md-3 tab">
                <nuxt-link to="/formCity" active-class="active">Выбрать город</nuxt-link>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    a {
        text-decoration: none;
        color: black;
    }
    a:hover {
        text-decoration: underline;
    }
    .active {
        background-color: #aeaeaa;
    }
</style>