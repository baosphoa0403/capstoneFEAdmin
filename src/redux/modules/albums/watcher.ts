import { ForkEffect, takeLatest } from 'redux-saga/effects';
import { fetchAlbumsAction } from './action/albumsAction';
import { action_pending_fetch_albums } from './albumsSlice';
function* watchAlbum(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(action_pending_fetch_albums().type, fetchAlbumsAction);
}
export default watchAlbum;
