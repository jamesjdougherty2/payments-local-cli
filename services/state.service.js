const stateStack = [];

module.exports = {
  hasStuffToDo: () => {
    return stateStack.length > 0;
  },

  currentState: () => {
    return stateStack[stateStack.length - 1];
  },

  next: (state) => {
    stateStack.push(state);
  },

  complete: () => {
    stateStack.pop();
  }
};
