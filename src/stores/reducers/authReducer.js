const initualState = {
  authenticated: false,
  user: {
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
    id: '',
    name: '',
  },
};

export const authReducer = (state = initualState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'auth/unsetUser':
      return {
        ...initualState,
      };
    case 'auth/setUser':
      return {
        user: payload,
        authenticated: true,
      };
    default:
      return state;
  }
};
