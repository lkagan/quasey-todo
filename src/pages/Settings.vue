<template>
    <q-page padding>
        <q-list bordered padding class="q-mb-md">
            <q-item-label header>Settings</q-item-label>

            <q-item tag="label" v-ripple>
                <q-item-section>
                    <q-item-label>Show tasks in one list</q-item-label>
                </q-item-section>
                <q-item-section side top>
                    <q-toggle color="blue" v-model="showTasksInOneList" val="battery"/>
                </q-item-section>
            </q-item>
        </q-list>

        <q-list bordered padding>
            <q-item-label header>More</q-item-label>

            <q-item tag="label" v-ripple to="/settings/help">
                <q-item-section>
                    <q-item-label>Help</q-item-label>
                </q-item-section>
                <q-item-section side top>
                    <q-icon name="chevron_right"></q-icon>
                </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple @click="visitWebsite">
                <q-item-section>
                    <q-item-label>Visit out website</q-item-label>
                </q-item-section>
                <q-item-section side top>
                    <q-icon name="chevron_right"></q-icon>
                </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple @click="emailUs">
                <q-item-section>
                    <q-item-label>Email Us</q-item-label>
                </q-item-section>
                <q-item-section side top>
                    <q-icon name="chevron_right"></q-icon>
                </q-item-section>
            </q-item>
        </q-list>
    </q-page>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import {openURL} from 'quasar'

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

            visitWebsite() {
                openURL('http://www.google.com');
            },

            emailUs() {
                window.location.href="mailto:hello@example.com?subject=Tasks Feedback";
            }
        }
    }
</script>
