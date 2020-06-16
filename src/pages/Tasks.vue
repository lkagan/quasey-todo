<template>
    <q-page class="flex">
        <div class="q-pa-md full-width">
            <Search class="q-mb-md"></Search>
            <NoTasks v-if="Object.keys(tasksTodo).length === 0"></NoTasks>
            <tasks-todo :tasks="tasksTodo" v-else></tasks-todo>
            <tasks-completd :tasks="tasksCompleted" v-if="Object.keys(tasksCompleted).length"></tasks-completd>
            <div class="absolute-bottom text-center q-mb-md">
                <q-btn size="24" round color="primary" icon="add" @click="showAddTaskForm = true"></q-btn>
            </div>
        </div>

        <q-dialog v-model="showAddTaskForm">
            <AddTask @close="showAddTaskForm = false"></AddTask>
        </q-dialog>

    </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import Task from "components/Task";
import AddTask from "components/AddTask";
import TasksTodo from "components/TasksTodo";
import TasksCompletd from "components/TasksCompleted";
import NoTasks from "components/NoTasks";
import Search from "components/Tools/Search";

export default {
    name: 'Tasks',

    components: { NoTasks, TasksCompletd, TasksTodo, AddTask, Task, Search },

    data() {
        return {
            showAddTaskForm: false,
        }
    },

    computed: {
        ...mapGetters('tasks', ['tasksCompleted', 'tasksTodo']),
    },

    mounted() {
        this.$root.$on('showAddTask', () => {
            this.showAddTaskForm = true;
        });
    },
}
</script>
