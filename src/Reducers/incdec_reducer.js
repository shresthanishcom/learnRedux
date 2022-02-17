export const incdecReducer = (State = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return State + parseInt(action.payload);
      break;

    case "DECREMENT":
      return State - parseInt(action.payload);
    default:
      return State;
  }
};
