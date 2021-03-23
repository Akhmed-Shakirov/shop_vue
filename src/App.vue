<template>
  <div id="app">
    <v-header />
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import vHeader from './components/v-header'
export default {
  components: {
    vHeader
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.home, .catalog, .cart, .about, .admin{
  background: #434978;
  min-height: 100vh;
}
.h2 {
  font-size: 3em;
  color: #fff;
}
.p {
  font-size: 1em;
  color: #fff;
}
.btn {
  display: inline-block;
  background: #fff;
  color: #434978;
  padding: 8px 20px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 20px;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
  :hover {
    color: #fff;
    background: #434978;
    border: 1px solid #fff;
  }
}
.block {
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
