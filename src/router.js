import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: { name: 'waterStorage' }
        },
        {
            path: '/questionsandanswers',
            name: 'QuestionsAndAnswers',
            component: () =>
                    import('@/views/QuestionsAndAnswers.vue')
        },
        {
            path: '/water-storage',
            name: 'waterStorage',
            component: () =>
                    import('@/views/waterStorage/WaterStorage.vue')
        },
        {
            path: '/water-storage/questions-answers',
            name: 'WaterStorageQA',
            component: () =>
                    import('@/views/waterStorage/WaterStorageQA.vue')
        },
        {
            path: '/water-use',
            name: 'waterUse',
            component: () =>
                    import('@/views/waterUse/WaterUse.vue')
        },
        {
            path: '/water-use/questions-answers',
            name: 'WaterUseQA',
            component: () =>
                    import('@/views/waterUse/WaterUseQA.vue')
        },
        {
            path: '/water-temperature',
            name: 'waterTemperature',
            component: () =>
                    import('@/views/waterTemperature/WaterTemperature.vue')
        },
        {
            path: '/water-temperature/questions-answers',
            name: 'WaterTemperatureQA',
            component: () =>
                    import('@/views/waterTemperature/WaterTemperatureQA.vue')
        },
        {
            path: '/404',
            name: 'error404',
            component: () =>
                    import('@/views/Error404.vue')
        },
        {
            path: '*',
            redirect: { name: 'error404' }
        }
    ]
});
