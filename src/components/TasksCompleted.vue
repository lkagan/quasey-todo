<template>
    <transition
        appear
        enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut"
    >
        <div :class="{'q-mt-lg' : !settings.showTasksInOneList}">
            <ListHeader bgColor="bg-grey-5" v-if="!settings.showTasksInOneList">Completed</ListHeader>
            <q-list separator>
                <Task v-for="(task, key) in tasks"
                      :key="key"
                      :task="task"
                      :id="key"></Task>
            </q-list>
        </div>
    </transition>
</template>

<script>
    import Task from "components/Task";
    import ListHeader from "components/Shared/ListHeader";
    import {mapGetters} from 'vuex';

    export default {
        name: "TasksCompletd",

        props: {
            tasks: {
                required: true,
                type: Object,
            }
        },

        components: {
            ListHeader,
            Task,
        },

        computed: {
            ...mapGetters('settings', ['settings']),
        }
    }
</script>

<style scoped>

</style>
