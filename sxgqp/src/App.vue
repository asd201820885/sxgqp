<template>
  <div id="app">
    <br>
    <v-header></v-header>
    <br>
    <br>


  </div>
</template>

<script>
  import home from "./components/home";
  import Header1 from "./components/Header";

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },components:{
      'v-header':Header1,
        'v-home':home,

    },methods:{
      show(){
          console.log('11111')
      }
    }
}
</script>

<style>

</style>
