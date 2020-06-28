<template>
    <div class="components-page-header">
        <div class="logo-wrapper cursor-pointer" @click="$router.push('/')">
            <img src="../common/images/logo.png" alt="">
            <span>H5</span>
        </div>
        <slot></slot>
        <div class="pull-right">
            <userHeaderBar class="marginL30"></userHeaderBar>
        </div>
    </div>
</template>

<script>
// import userHeaderBar from './user-header-bar'
const userHeaderBar = () => import('./user-header-bar.vue')
import { mapState } from 'vuex'
export default {
    name: 'page-header',
    components: {
        userHeaderBar
    },
    data() {
        return {}
    },
    computed: {
        ...mapState({
            userData: state => state.user.userData,
            token: state => state.user.token
        })
    },
    methods: {
        logoutFn() {
            this.$router.push({ name: 'Login' })
        },
        goLogin() {
            // 保存用户进入的 url
            this.$Utils.Cookie.set('beforeLoginUrl', encodeURIComponent(this.$route.fullPath), 1 / 24 / 60, window.location.pathname.substring(0, window.location.pathname.length - 1))
            this.$router.push({ name: 'Login' })
        }
    }
}
</script>

<style>
</style>