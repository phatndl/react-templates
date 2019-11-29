import { ACTION_TYPES } from 'actions/user';

const INIT_STATE = {
  token: '',
};

const MOD = process.env.MOD;
console.log('MODE: ', MOD);

const userReducer = (state = INIT_STATE, action) => {
  const { type, token } = action;

  switch (type) {
    case 'SET_TOKEN':
      return { ...state, token };
    default:
      return state;
  }
};

export default userReducer;
