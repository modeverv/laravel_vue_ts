import Vue from 'vue';
import bootstrap from './bootstrap';
import Router from 'vue-router'
import AppComponent from './components/App.vue';
import Top from './components/Top.vue';
import Route from './Route.vue';

bootstrap();

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/App',
      component: AppComponent
    },
    {
      path: '/',
      component: Top
    }
  ],
})


const app = new Vue({
  el: '#app',
  router,
  components: { AppComponent, Top, Route},
  render: h => h(Route)
});
