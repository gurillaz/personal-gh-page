import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

//AOS animation library
//https://github.com/michalsnik/aos
import AOS from "aos";
import "aos/dist/aos.css";

// Vue scroll animations https://github.com/rigor789/vue-scrollTo
import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo);


Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init({
      once: false
    });
  },
  vuetify,
  render: h => h(App)
}).$mount('#app')
