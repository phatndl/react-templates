export const ACTION_TYPES = {
  TOGGLE: 'TOGGLE'
}

const toggleLoader = (val) => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.TOGGLE,
    val
  })
}

export default {
  toggleLoader
};
