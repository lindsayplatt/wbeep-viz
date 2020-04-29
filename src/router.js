import Vue from "vue";
import Router from "vue-router";
import MapBox from '@/components/MapBox.vue';

Vue.use(Router);

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
            component: () =>
                    import('@/views/QuestionsAndAnswers.vue')
        },
        {
            path: '/water-storage',
            name: 'WaterStorage',
            component: () =>
                    import('@/views/waterStorage/WaterStorage.vue')
        },
        {
            path: '/water-storage/questions-answers',
            name: 'WSQuestionsAnswers',
            component: () =>
                    import('@/views/waterStorage/WSQuestionsAnswers.vue')
        },
        {
            path: '/water-use',
            name: 'WaterUse',
            component: () =>
                    import('@/views/waterUse/WaterUse.vue')
        },
        {
            path: '/water-use/questions-answers',
            name: 'WUQuestionAnswers',
            component: () =>
                    import('@/views/waterUse/WUQuestionAnswers.vue')
        },
        {
            path: '/water-temperature',
            name: 'WaterTemperature',
            component: () =>
                    import('@/views/waterTemperature/WaterTemperature.vue')
        },
        {
            path: '/water-temperature/questions-answers',
            name: 'WTQuestionsAnswers',
            component: () =>
                    import('@/views/waterTemperature/WTQuestionsAnswers.vue')
        },
        {
            path: "/404",
            name: "Error404",
            component: () =>
                    import('@/views/Error404.vue')
        },
        {
            path: "*",
            redirect: { name: "Error404" }
        }
    ]
});


