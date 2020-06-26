<template>
    <transition
        appear
        enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut absolute-top"
    >
        <div>
            <ListHeader bgColor="bg-blue" v-if="!settings.showTasksInOneList">To Do</ListHeader>
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
        name: "TasksTodo",

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
