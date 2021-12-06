<template>
  <div id="que5-wrapper">
    <v-chart  :option="chartOption"/>
  </div>
</template>

<script>
export default {
  name: 'Question5',
  props: {
  },
  data: () => ({
      chartOption: {
       
        title: {
          text: "圓餅圖",
          left: "center"
        },
        legend: {
          orient: "vertical",
          left: "right",
          data: [
            "Direct",
            "Email",
            "Ad Networks",
            "Video Ads",
            "Search Engines"
          ]
        },
        series: [
          {
            name: "collection",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 50, name: "A" },
              { value: 100, name: "B" },
              { value: 150, name: "C" },
              { value: 200, name: "D" },
            ],
         
          }
        ]
      }
  }),
  created: function(){

  },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #que5-wrapper{
    height: 100%;
  }
</style>
