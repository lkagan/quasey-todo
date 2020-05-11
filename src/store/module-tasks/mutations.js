import Vue from 'vue';

export function updateTask(state, payload) {
  state.tasks[payload.id] = { ...state.tasks[payload.id], ...payload.updates };
}

export function deleteTask(state, id) {
  Vue.delete(state.tasks, id);
}
