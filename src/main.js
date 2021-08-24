import Vue from 'vue'
import App from './App.vue'
// import wrap from '@vue/web-component-wrapper';
// import navBar from "./components/navBar";
import less from 'less'
Vue.use(less);
Vue.config.productionTip = false

// const customElement = wrap(Vue, navBar);
// window.customElements.define('asf-navbar', customElement);
import wrap from '@vue/web-component-wrapper';
import VueWebComponent from './components/navBar';

const CustomElement = wrap(Vue, VueWebComponent);

window.customElements.define('ASF-navbar', CustomElement);
new Vue({
    render: h => h(App),
}).$mount('#app')