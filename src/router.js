import Vue from "vue";
import Router from "vue-router";
import MapBox from './components/MapBox.vue';
import QuestionsAndAnswers from './views/QuestionsAndAnswers.vue';
import Error404 from "./views/Error404";

Vue.use(Router);
function lazyLoad(view){
    return() => import(`@/views/${view}.vue`)
}

export default new Router({
    routes: [
        {
            path: '/',
            name: 'MapBox',
            component: MapBox
        },
        {
            path: '/questionsandanswers',
            name: 'QuestionsAndAnswers',
            component: lazyLoad('QuestionsAndAnswers')
        },
        {
            path: "/404",
            name: "Error404",
            component: lazyLoad('Error404')
        },
        {
            path: "*",
            redirect: { name: "Error404" }
        }
    ]
});


