<template>
  <div id="app">
    <div id="tabset">
      <ul>
        <li v-for="comp in comps" :key="comp" v-on:click="setActiveComponent(comp)" :class="{ 'active': activeComp === comp }">{{ comp }}</li>
      </ul>
    </div>
    <div id="question_comp">
      <Question1 v-if="activeComp == 'que1'" />
      <Question2 v-if="activeComp == 'que2'" />
      <Question3 v-if="activeComp == 'que3'" />
      <Question4 param1="p1" v-if="activeComp == 'que4'" />
      <Question5 v-if="activeComp == 'que5'" />
      <Question6 v-if="activeComp == 'que6'" />
      <Question7 v-if="activeComp == 'que7'" />
    </div>
  </div>
</template>

<script>
import Question1 from './components/Question1.vue'
import Question2 from './components/Question2.vue'
import Question3 from './components/Question3.vue'
import Question4 from './components/Question4.vue'
import Question5 from './components/Question5.vue'
import Question6 from './components/Question6.vue'
import Question7 from './components/Question7.vue'

export default {
  name: 'App',
  data: () => ({
    comps: ['que1','que2','que3','que4','que5','que6','que7'],
    activeComp: 'que1'
  }),
  components: {
    Question1,
    Question2,
    Question3,
    Question4,
    Question5,
    Question6,
    Question7,
  },
  methods: {
    setActiveComponent: function(comp) {
      this.activeComp = comp
    },
    question5Parent: function(){
      alert("I am in App.vue. I was called from Question4.vue")
    }
  }

}
</script>

<style lang="scss">
body,html{
  width: 100%;
  height: 100%;
}

h1{
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;

  #tabset{
    background: #333; 
    ul{
      list-style: none;
      margin: 0;

      li{
        display: inline-block;
        padding: 10px 20px;
        cursor: pointer;
        color: #FFF;

        &.active{
          background: #666;

        }
      }
    }
  }

  #question_comp{
    flex: 1;
    min-height: 1px;
  }
}
</style>
