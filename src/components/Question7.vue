


<template>
  <div id="que6-wrapper">
    <h4>說明:原理是將html dom轉為svg xml格式，並透過canvas轉為圖片</h4>
    <div id="dom1" style="border:1px solid #000;">
      <h3>測試</h3>
      <p>文字123</p>
    </div>
    <br>
    <div id="base64_result" style="width: 200px;">
    </div>
    <br>
    <button v-on:click="convert()">Convert</button>
  </div>
</template>

<script>
export default {
  name: 'Question6',
  props: {
  },
  methods: {
    convert(){
      window.domtoimage.toPng(document.getElementById('dom1')).then(function(img){
        document.getElementById('base64_result').innerHTML = `<img src="${img}" />`
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #que6-wrapper{
    padding-top: 10px;
  }
</style>
