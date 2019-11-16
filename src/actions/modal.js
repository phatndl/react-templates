export const ACTION_TYPES = {
  SET_ACTIVE_MODAL: 'SET_ACTIVE_MODAL',
}

const toggleModal = (name, val) => {
  return {
    type: ACTION_TYPES.SET_ACTIVE_MODAL,
    name,
    val
  }
}

export default {
  toggleModal
}
