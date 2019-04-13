import Vue from 'vue';
import bootstrap from './bootstrap';
import AppComponent from './components/App.vue';

bootstrap();

const app = new Vue({
  el: '#app',
  render: h => h(AppComponent)
});
