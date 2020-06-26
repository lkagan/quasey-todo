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
        }
    },

    actions: {
        setShowTasksInOneList({commit}, value) {
            commit('setShowTasksInOneList', value);
        }
    },

    getters: {
        settings: (state) => {
            return state.settings;
        },
    },

}

