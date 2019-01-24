<template>
  <div id="app">
    <!-- <router-link to="/Login"></router-link>
    <router-link to="/Regist"></router-link> -->
    <router-link to="/Read"></router-link>
    <router-link to="/Collection"></router-link>
    <!-- <Login msg="Welcome to Your" v-bind:name="{ name: 'Veronica', company: 'Veridian Dynamics' }"/> -->
    <transition name="slide-fade">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import Login from './components/login'
export default {
  name: 'app',
  components: {
    // Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}
*{ padding:0; margin:0; border:0; border:none; list-style:none; text-decoration:none; font-family:Helvetica; outline: none}
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to  {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
