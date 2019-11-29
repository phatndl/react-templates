export const ACTION_TYPES = {
  SET_TOKEN: 'SET_TOKEN',
};
export const setTokenToStore = token => dispatch => {
  console.log('hereeee');
  dispatch({
    type: ACTION_TYPES.SET_TOKEN,
    token,
  });
  window.localStorage.setItem('backup', token);
};
