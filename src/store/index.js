import reducers from '../reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

export default function initStore() {
  const enhancer = compose(
    applyMiddleware(
      loggerMiddleware
    )
  )

  const store = createStore( reducers, enhancer );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store;
}