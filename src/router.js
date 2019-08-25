import Vue from 'vue';
import Router from 'vue-router';
import empower from './views/empower'
import about from './views/about'
import home from './views/home'
import news from './views/news'
import subscribe from './views/subscribe'
Vue.use(Router);


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: "/", // path 设置为 “/” ，默认显示该页面
            name: "home",
            component: home,
        },
        {
            path: '/empower',
            name: 'empower',
            component: empower,
        },
        {
            path: '/about',
            name: 'about',
            component: about,

        },
        {
            path: '/news',
            name: 'news',
            component: news,
        },
        {
            path: '/subscribe',
            name: 'subscribe',
            component: subscribe,
        }
    ],
});