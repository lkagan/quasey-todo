<template>
    <q-page>
        <div class="q-pa-md full-width absolute full-height column">
            <div class="row q-mb-md">
                <Search class="column"></Search>
                <Sort class="column"></Sort>
            </div>
            <p v-if="search && !hasTasksTodo">No Search Results</p>
            <q-scroll-area class="q-scroll-area-tasks">
                <NoTasks v-if="showNoTasksBanner"></NoTasks>
                <tasks-todo :tasks="tasksTodo" v-if="hasTasksTodo"></tasks-todo>
                <tasks-completd :tasks="tasksCompleted"
                                v-if="hasTasksCompleted"
                                class="q-mb-xl"></tasks-completd>
            </q-scroll-area>
            <div class="absolute-bottom text-center q-mb-md no-pointer-events">
                <q-btn size="24" round color="primary" icon="add"
                       @click="showAddTaskForm = true"
                       class="all-pointer-events"></q-btn>
            </div>
        </div>

        <q-dialog v-model="showAddTaskForm">
            <AddTask @close="showAddTaskForm = false"></AddTask>
        </q-dialog>

    </q-page>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Task from "components/Task";
    import AddTask from "components/AddTask";
    import TasksTodo from "components/TasksTodo";
    import TasksCompletd from "components/TasksCompleted";
    import NoTasks from "components/NoTasks";
    import Search from "components/Tools/Search";
    import Sort from "components/Tools/Sort";

    export default {
        name: 'Tasks',

        components: {
            Sort,
            NoTasks,
            TasksCompletd,
            TasksTodo,
            AddTask,
            Task,
            Search
        },

        data() {
            return {
                showAddTaskForm: false,
            }
        },

        computed: {
            ...mapGetters('tasks', [
                'tasksCompleted',
                'tasksTodo',
                'hasTasksTodo',
                'hasTasksCompleted',
            ]),

            ...mapGetters('settings', ['settings']),

            search() {
                return this.$store.state.tasks.search;
            },

            showNoTasksBanner() {
                return !this.hasTasksTodo && !this.search
                    && !this.settings.showTasksInOneList;
            },
        },

        mounted() {
            this.$root.$on('showAddTask', () => {
                this.showAddTaskForm = true;
            });
        },
    }
</script>

<style scoped>
    .q-scroll-area-tasks {
        display: flex;
        flex-grow: 1;
    }
</style>
