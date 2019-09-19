const initialState = {
  userName: '',
  phone: '',
  loading: false,
  error: '',
};

const loginReducer = (state = initialState, action) => {
  console.log('action: ', action);
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, loading: true };
    case 'LOGIN_FAIL':
      return { ...state, error: action.err, loading: false };
    case 'LOGIN_SUCCESS':
      const { msg } = action.data.data;
      if (msg === 'User authentication fail. Please recheck username and password') {
        return { ...state, data: action.data, loading: false, error: '' };
      }
      return { ...state, data: action.data, loading: false, error: '' };
    default:
      return state;
  }
};

export default loginReducer;
