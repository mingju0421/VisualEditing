<template>
    <div id="app">
        <div class="page-header-wrapper">
            <PageHeader></PageHeader>
        </div>
        <router-view />
    </div>
</template>
<script>
import PageHeader from './components/page-header'
export default {
    components: {
        PageHeader
    }
}
</script>

<style>
html,
body {
    position: relative;
    height: 100%;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
