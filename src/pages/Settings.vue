<template>
    <q-page padding>
        <q-list bordered padding>
            <q-item-label header>Settings</q-item-label>

            <q-item tag="label" v-ripple>
                <q-item-section side top>
                    <q-toggle color="blue" v-model="showTasksInOneList" val="battery"/>
                </q-item-section>
                <q-item-section>
                    <q-item-label>Show tasks in one list</q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
    </q-page>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        computed: {
            ...mapGetters('settings', ['settings']),

            showTasksInOneList: {
                get() {
                    return this.settings.showTasksInOneList;
                },

                set(value) {
                    this.setShowTasksInOneList(value);
                }
            }
        },

        methods: {
            ...mapActions('settings', ['setShowTasksInOneList']),
        }
    }
</script>
