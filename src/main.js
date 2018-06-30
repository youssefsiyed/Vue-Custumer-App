// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';
import About from './components/About.vue';
import Custumers from './components/Custumers.vue';
import CustumersDetails from './components/CustumersDetails.vue';
import CustumersAdd from './components/CustumersAdd.vue';
import CustumersUpdate from './components/CustumersUpdate.vue';
import Vue2Filters from 'vue2-filters';

Vue.config.productionTip = false;
Vue.use(vueResource);
Vue.use(VueRouter);
Vue.use(Vue2Filters);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Custumers },
    { path: '/add', component: CustumersAdd },
    { path: '/update/:id', component: CustumersUpdate },
    { path: '/custumers/:id', component: CustumersDetails },
    { path: '/about', component: About }
  ]
});
/* eslint-disable no-new */
new Vue({
  // el: '#app',
  // components: { App },
  // template: '<App/>'
  router,
  template: `
    <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Manager Custumers</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Custumers</a>
      </li>
      <li class="nav-item">
        <router-link to="/about">About</router-link>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="/add">Add Custumer</a>
      </li>
      </ul>
  </div>
</nav>

    <router-view></router-view>
    </div>
  `
}).$mount('#app');
