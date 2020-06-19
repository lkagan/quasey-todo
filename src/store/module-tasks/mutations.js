import Vue from 'vue';
import { uid } from 'quasar';

export function updateTask(state, payload) {
  state.tasks[payload.id] = { ...state.tasks[payload.id], ...payload.updates };
}

export function deleteTask(state, id) {
  Vue.delete(state.tasks, id);
}

export function addTask(state, task) {
  Vue.set(state.tasks, uid(), task);
}

export function setSearch(state, search) {
  state.search = search;
}

export function setSort(state, sort) {
  state.sort = sort;
}
