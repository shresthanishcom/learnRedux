export const multiplierReducer = (State = 1, action) => {
  switch (action.type) {
    case "MULTIPLY":
      return State * 2;
    default:
      return State;
  }
};
