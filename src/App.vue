<template>
  <div id="app">
    <!-- <router-view/> -->
    <MyChat></MyChat>
  </div>
</template>

<script>
import MyChat from './components/MyChat.vue';

export default {
  name: "App",
  components: {
    MyChat
  }
}
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

#app {
  text-align: center;
  background: linear-gradient(45deg, #13547a, #80d0c7);
  height: 100vh;
}

body {
  // background: linear-gradient(45deg, #13547a, #80d0c7);
  background-size: cover;
  font-family: "Gill Sans", sans-serif;
  font-size: 12px;
}
</style>
