import { Vue } from 'vue-property-decorator'

export class UserModel extends Vue {
  _logout() {
    this.$store.commit('UPDATE_OAUTH', {})
    sessionStorage.clear()
    this._linkToLogout()
  }
  _linkToLogout() {
    this.$router.push({ path: '/login' })
  }
}
