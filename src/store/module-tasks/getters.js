export function tasks(state) {
  return state.tasks;
}

export function tasksFiltered(state, getters) {
  const tasks = [];
  const tasksSorted = getters.tasksSorted;

  if (state.search) {
    Object.keys(tasksSorted).forEach(key => {
      if (tasksSorted[key].name.toLowerCase().includes(state.search.toLowerCase())) {
        tasks[key] = tasksSorted[key];
      }
    });

    return tasks;
  }

  return tasksSorted;
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

export function tasksSorted(state) {
  const tasks = {};

  const keys = Object.keys(state.tasks).sort((a, b) => {
    const sortField = state.sort;
    const aName = state.tasks[a][sortField].toLowerCase();
    const bName = state.tasks[b][sortField].toLowerCase();

    if (aName > bName) {
      return 1;
    } else if (aName < bName) {
      return -1;
    }

    return 0;
  });

  keys.forEach(key => {tasks[key] = state.tasks[key]});
  return tasks;
}

export function hasTasksTodo(state, getters) {
  return !!Object.keys(getters.tasksTodo).length;
}

export function hasTasksCompleted(state, getters) {
  return !!Object.keys(getters.tasksCompleted).length;
}
