
<template>
  <div id="que2-wrapper">
    <h4>說明:點擊以下按鈕，並看f12 Network。程式碼位於src/components/Question2.vue 和 src/services/api.service.js，透過interceptors進行攔截</h4>
    <button v-on:click="request()">Request</button>
  </div>
</template>

<script>
export default {
  name: 'Question2',
  props: {
  },
  methods: {
    request: async function(){
      try{
        //src/services/api.service.js
        await this.$api.find(1)
      }catch(e){
        alert('發生錯誤：' + e.message)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
