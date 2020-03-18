import Vue from 'vue';
import Router from 'vue-router';
import AppHeader from './layout/AppHeader';
import TopBar from './layout/TopBar';
import AppFoot from './layout/AppFoot';
import Components from './views/Components.vue';
import Index from './views/Index.vue';
import App from './views/App.vue';
import Questions from './views/Questions.vue';
import Result from './views/Result.vue';
import Profile from './views/Profile.vue';

import Auth from './views/Auth.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        header: AppHeader,
        default: Index
        // footer: AppFooter
      }
    },
    {
      path: '/auth',
      name: 'auth',
      components: {
        default: Auth
        // footer: AppFooter
      }
    },
    {
      path: '/app',
      name: 'app',
      components: {
        header: TopBar,
        default: App,
        footer: AppFoot
      }
    },
    {
      path: '/app/question',
      name: 'question',
      components: {
        header: TopBar,
        default: Questions,
        footer: AppFoot
      }
    },
    {
      path: '/app/result',
      name: 'result',
      components: {
        header: TopBar,
        default: Result,
        footer: AppFoot
      }
    },
    {
      path: '/app/profile',
      name: 'profile',
      components: {
        header: TopBar,
        default: Profile,
        footer: AppFoot
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
