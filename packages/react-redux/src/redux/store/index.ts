import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import counterSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancer = compose(applyMiddleware(...middlewares));
const store = createStore(reducer, enhancer);
sagaMiddleware.run(counterSaga);

export default store;
