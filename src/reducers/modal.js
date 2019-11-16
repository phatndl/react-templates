import { ACTION_TYPES } from 'actions/modal';

const INIT_STATE = {
  nameModal: ''
};

const modalReducer = (state = INIT_STATE, action) => {

  let obj = {...state};

  switch(action.type){
    case ACTION_TYPES.SET_ACTIVE_MODAL:
      if (action.name === state.nameModal){
        if (typeof val === 'boolean' && !action.val){
          obj =  {...state, nameModal: null}
        }
      }
      else{
        if (typeof val === 'boolean' && action.val){
          obj =  {...state, nameModal: action.name}
        }
      }
      return obj;
    default:
      return state;
  }
};

export default modalReducer;
