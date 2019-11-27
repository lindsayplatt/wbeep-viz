import Vue from "vue";
import Router from "vue-router";
import MapBox from './components/MapBox.vue';
import About from './views/About.vue';
import Error404 from "./views/Error404";


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'MapBox',
            component: MapBox
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: "/404",
            name: "Error404",
            component: Error404
        },
        {
            path: "*",
            redirect: { name: "Error404" }
        }
    ]
});


