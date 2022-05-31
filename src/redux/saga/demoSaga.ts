import {
  ForkEffect,
  put,
  takeLatest
  // call declare here
} from 'redux-saga/effects';
import { demoActionSuccessAction, demoActionErrorAction } from '../modules/albums/action/demoAct/action';
import actionTypes from '../modules/albums/action/demoAct/action-type';
export function* demoMain({ data, callbackSuccess, callbackError }: any): any {
  try {
    const responseData = data; // responseData check below
    // const responseData = yield call(); -> Temporarily turn off to avoid errors. Open it and declare if you have information below
    // **************** NOTE *************
    // custom base API and call here
    // need to create folder Apis include demo1API(api.ts, endpoint.ts)
    //api.ts --> class extend baseAPI (get,post,put,patch,delete...)
    // endpoint.ts --> url (constant)
    yield put(demoActionSuccessAction(responseData));
    // more yield put like notify ..v.v
    yield callbackSuccess(responseData);
  } catch (error) {
    yield put(demoActionErrorAction(error));
    // more yield put like notify ..v.v
    yield callbackError();
  }
}

export default function* DemoSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(actionTypes.DEMO_ACTION_START, demoMain);
}
