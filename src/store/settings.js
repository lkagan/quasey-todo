import {LocalStorage} from 'quasar'

export default {
    namespaced: true,

    state: {
        settings: {
            showTasksInOneList: false,
        },
    },

    mutations: {
        setShowTasksInOneList(state, value) {
            state.settings.showTasksInOneList = value;
        },

        setSettings(state, settings) {
            state.settings = settings;
        }
    },

    actions: {
        setShowTasksInOneList({commit, dispatch}, value) {
            commit('setShowTasksInOneList', value);
            dispatch('saveSettings');
        },

        saveSettings({state}) {
            LocalStorage.set('settings', state.settings);
        },

        getSettings({commit}) {
            if (LocalStorage.has('settings')) {
                commit('setSettings', LocalStorage.getItem('settings'));
            }
        }
    },

    getters: {
        settings: (state) => {
            return state.settings;
        },
    },

}

