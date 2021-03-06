import Vue from 'vue';
import Router from 'vue-router';
import Home from './src/components/Home.vue';
import About from './src/components/About.vue';
import Contact from './src/components/Contact.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/about',
      name: 'about',
      component: About
    }, {
      path: '/contact',
      name: 'contact',
      component: Contact
    }, {
      path: '*',
      component: Home
    }
  ]
})
