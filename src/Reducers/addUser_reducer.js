export const addUserReducer = (State = { users: [] }, action) => {
  switch (action.type) {
    case "ADDUSER":
      return { users: [...action.payload] };

    case "ADDMOREUSER":
      return { users: [...State.users, action.payload] };

    case "REMOVEUSER":
      return {
        users: [
          ...State.users.filter((user) => {
            if (user._id !== action.payload) {
              return user;
            } else {
              return null;
            }
          }),
        ],
      };
    default:
      return State;
  }
};
