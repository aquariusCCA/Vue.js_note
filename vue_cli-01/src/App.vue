<!-- 這是 App 的結構。 -->
<template>
  <div id="app">
    <!-- assets: 都是放靜態資源的文件夾。 -->
    <img alt="Vue logo" src="./assets/logo.png">

    <School></School>
    <Student></Student>
  </div>
</template>

<!-- 這是 App 的交互 -->
<script>
// 引入組件
import School from './components/School.vue';
import Student from './components/Student.vue';

export default {
  name: 'App',
  components: {
    School,
    Student
  }
}
</script>

<!-- 這是 App 的樣式 -->
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
