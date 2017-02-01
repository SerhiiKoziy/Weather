import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import {DataReduser} from '../reducers';
import createLogger from 'redux-logger';
import { INITIAL_STATE } from '../constants/InitialState';


const reducer = combineReducers({
   data: DataReduser,
})


export default function configureStore(initialState = INITIAL_STATE) {

  const logger = createLogger();
  const middleware = applyMiddleware( thunk, logger);

  const store = createStore(reducer, initialState, compose(
      middleware,
      window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  if (module.hot) {
    module.hot.accept('../reducers', () =>
          store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}
