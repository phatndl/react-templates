import thunk from 'redux-thunk';

var middleware = [thunk];

(function() {
  if (process.env.NODE_ENV !== 'production') {
    // logger def
    const logger = store => {
      return next => {
        return action => {
          console.log('[Middleware]', action);
          next(action);
          console.log('[Middleware] next state', store.getState());
        };
      };
    };
    // add logger for debug
    middleware = [...middleware, logger];
  }
})();

export default middleware;
