export function tasks(state) {
  return state.tasks;
}

export function tasksTodo(state) {
  let tasks = {};
  Object.keys(state.tasks).forEach(key => {
    if (!state.tasks[key].complete) {
      tasks[key] = state.tasks[key];
    }
  });

  return tasks;
}

export function tasksCompleted(state) {
  let tasks = {};
  Object.keys(state.tasks).forEach(key => {
    if (state.tasks[key].complete) {
      tasks[key] = state.tasks[key];
    }
  });

  return tasks;
}
