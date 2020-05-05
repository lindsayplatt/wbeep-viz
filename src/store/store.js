import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        activeFeatureTab: 'waterStorage'
    },
    getters: {
        activeFeatureTab: state => state.activeFeatureTab
    },
    mutations: {
        changeActiveFeatureTab(state, activeFeatureName) {
            state.activeFeatureTab = activeFeatureName
        }
    },
    actions: {
        changeActiveFeatureTab(context, activeFeatureName) {
            context.commit('changeActiveFeatureTab', activeFeatureName)
        }
    }
});
