import Vue from 'vue';
import App from './app.vue';

const vm = new Vue({
    render: h => h(App),
});

vm.$mount("#app")

