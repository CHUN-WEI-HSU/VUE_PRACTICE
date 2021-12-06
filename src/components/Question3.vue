
<template>
  <div id="que3-wrapper">
    <h4>說明:vue.store寫在main.js內。以下以計數器為例</h4>
    <h1 class="counter_number">
    {{ $store.state.counter.counter_num }}
    </h1>
    <button v-on:click="increment()">Increment</button> 
    <button v-on:click="clear()">Clear</button>
  </div>
</template>

<script>
export default {
  name: 'Question2',
  props: {
  },
  methods: {
    increment: function(){
      this.$store.commit('incrementCounter')
    },
    clear: function(){
      this.$store.commit('clearCounter')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
