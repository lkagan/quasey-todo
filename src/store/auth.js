import { LocalStorage } from 'quasar';
import {firebaseApp as firebase} from "boot/firebase";

export default {
    namespaced: true,

    state: {},

    mutations: {},

    actions: {
        handleAuthStateChanged({ commit }) {
            firebase.onAuthStateChanged( user => {
                if (user) {
                    commit('setLoggedIn', true)
                    LocalStorage.set('loggedIn', true)
                    this.$router.push('/')
                } else {
                    commit('setLoggedIn', false)
                    LocalStorage.set('loggedIn', false)
                    this.$router.push('/auth')
                }
            })
        }
    },

    getters: {},
}

