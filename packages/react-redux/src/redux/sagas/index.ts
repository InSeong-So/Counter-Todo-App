import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  INCREMENT_REQUEST,
  INCREMENT_SUCCESS,
  INCREMENT_FAILURE,
  DECREMENT_REQUEST,
  DECREMENT_SUCCESS,
  DECREMENT_FAILURE,
  RESET_REQUEST,
  RESET_SUCCESS,
  RESET_FAILURE,
} from '../reducers';

const asyncAPI = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(''), 1000);
  });
};

function* incrementCounter() {
  try {
    yield call(asyncAPI);
    yield put({ type: INCREMENT_SUCCESS });
  } catch (error) {
    yield put({ type: INCREMENT_FAILURE, error });
  }
}

function* decrementCounter() {
  try {
    yield call(asyncAPI);
    yield put({ type: DECREMENT_SUCCESS });
  } catch (error) {
    yield put({ type: DECREMENT_FAILURE, error });
  }
}

function* resetCounter() {
  try {
    yield call(asyncAPI);
    yield put({ type: RESET_SUCCESS });
  } catch (error) {
    yield put({ type: RESET_FAILURE, error });
  }
}

function* watchIncrementCounter() {
  yield takeLatest(INCREMENT_REQUEST, incrementCounter);
}

function* watchDecrementCounter() {
  yield takeLatest(DECREMENT_REQUEST, decrementCounter);
}

function* watchResetCounter() {
  yield takeLatest(RESET_REQUEST, resetCounter);
}

export default function* counterSaga() {
  yield all([fork(watchIncrementCounter), fork(watchDecrementCounter), fork(watchResetCounter)]);
}
