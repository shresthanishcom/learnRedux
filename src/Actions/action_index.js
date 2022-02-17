const initialPayload = 1;

export const incrementAction = (payload = initialPayload) => {
  return {
    type: "INCREMENT",
    payload,
  };
};

export const decrementAction = (payload = initialPayload) => {
  return {
    type: "DECREMENT",
    payload,
  };
};
export const multiplyAction = () => {
  return {
    type: "MULTIPLY",
  };
};

export const addUserAction = (payload) => {
  return {
    type: "ADDUSER",
    payload,
  };
};

export const addMoreUserAction = (payload) => {
  return {
    type: "ADDMOREUSER",
    payload,
  };
};

export const removeUserAction = (payload) => {
  return {
    type: "REMOVEUSER",
    payload,
  };
};
