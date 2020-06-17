export function tasks(state) {
  return state.tasks;
}

export function tasksFiltered(state) {
  const tasks = [];

  if (state.search) {
    Object.keys(state.tasks).forEach(key => {
      if (state.tasks[key].name.toLowerCase().includes(state.search.toLowerCase())) {
        tasks[key] = state.tasks[key];
      }
    });

    return tasks;
  }

  return state.tasks;
}

export function tasksTodo(state, getters) {
  const tasksFiltered = getters.tasksFiltered;
  let tasks = {};
  Object.keys(tasksFiltered).forEach(key => {
    if (!tasksFiltered[key].complete) {
      tasks[key] = tasksFiltered[key];
    }
  });

  return tasks;
}

export function tasksCompleted(state, getters) {
  const tasksFiltered = getters.tasksFiltered;
  let tasks = {};
  Object.keys(tasksFiltered).forEach(key => {
    if (tasksFiltered[key].complete) {
      tasks[key] = tasksFiltered[key];
    }
  });

  return tasks;
}

export function hasTasksTodo(state, getters) {
  return !! Object.keys(getters.tasksTodo).length;
}

export function hasTasksCompleted(state, getters) {
  return !! Object.keys(getters.tasksCompleted).length;
}
