<template>
  <div id="app">
    <h3>{{ title }}</h3>
    <input type="text" ref="name" placeholder="Kullanıcı adı">
    <br><br>
    <input type="password" ref="password" placeholder="Şifre">
    <button @click="login">Giriş</button>
    <br><br>
    <p v-if="isLogin">Giriş başarılı</p>
    <p v-else>Giriş başarısız</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: "Login",
      name: "Hamza",
      password: "1234",
      isLogin: false
    };
  },
  methods: {
    login() {
      if (this.$refs.name.value === this.name && this.$refs.password.value === this.password) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
