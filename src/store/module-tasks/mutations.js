export function updateTask(state, payload) {
  state.tasks[payload.id] = { ...state.tasks[payload.id], ...payload.updates };
}
