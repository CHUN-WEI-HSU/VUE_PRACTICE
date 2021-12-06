<template>
  <div id="que4-wrapper">
  Param is from App.vue：{{ param1 }}<br>
  <button v-on:click="callParent()">Call Parent</button>
  </div>
</template>

<script>
export default {
  name: 'Question4',
  props: {
    param1: String
  },
  methods: {
    callParent(){
      this.$parent.question5Parent()
    }
  }
 
}
</script>

<style scoped lang="scss">
  #que4-wrapper{
    height: 100%;
  }
</style>
