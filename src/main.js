import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
//font awesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
//dom2img
import domtoimage from 'dom-to-image';
//echart
import ECharts from 'vue-echarts'
import { use } from "echarts/core";
import { PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
//custom services
import APIProvider from './services/api.service'

window.domtoimage = domtoimage

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.$api = APIProvider
Object.defineProperty(Vue.prototype, '$api', {
  get () {
    return APIProvider
  }
})

/** question3 計數器 vuex */
const moduleCounter = {
  state: {
    counter_num: 0
  },
  mutations: {
    incrementCounter (state) {
      state.counter_num++
    },
    clearCounter (state) {
      state.counter_num = 0
    }
  }
}

const store = new Vuex.Store({
  modules: {
    counter: moduleCounter,
  }
})

/** question5 chart */
Vue.component('v-chart', ECharts)
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent  
])

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
