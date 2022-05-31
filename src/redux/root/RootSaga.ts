import { all, AllEffect, ForkEffect } from 'redux-saga/effects';
import watchAlbum from 'redux/modules/albums/watcher';
import DemoSaga from 'redux/saga/demoSaga';

// eslint-disable-next-line require-yield
function* helloSaga(): Generator<void> {
  // eslint-disable-next-line no-console
  console.log('hello saga');
}
export default function* rootSaga(): Generator<
  AllEffect<Generator<void, any, unknown> | Generator<ForkEffect<never>, void, unknown>>,
  void,
  unknown
> {
  yield all([helloSaga(), watchAlbum(), DemoSaga()]);
}
