import Vue from 'vue'
import Router from 'vue-router'
import add from './components/AddBlog';
import show from "./components/ShowBlog";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/add'
    },
    {
      path: '/add',
      component: add
    },
    {
      path: '/show',
      component: show
    }
  ]
})