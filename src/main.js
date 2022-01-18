import Vue from 'vue'
import App from './App.vue'
import VueParticlesBg from "particles-bg-vue";

Vue.use(VueParticlesBg);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
