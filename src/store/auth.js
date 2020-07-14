import {firebaseApp as firebase} from "boot/firebase";

export default {
    namespaced: true,

    state: {},

    mutations: {},

    actions: {
        registerUser({}, payload) {
            console.log(payload);
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(response => console.log(response))
                .catch(error => console.log(error.message));
        }
    },

    getters: {},
}

