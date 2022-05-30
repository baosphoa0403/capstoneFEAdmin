import { DataTypeResponse } from 'config/baseEntity';
import { call, CallEffect, put, PutEffect, SagaReturnType } from 'redux-saga/effects';
import { fetchAlbums } from 'services/api/albums/fetchAlbums';
import { action_fail_fetch_albums, action_success_fetch_albums, Albums } from '../albumsSlice';

type FetchAlbumsResponse = SagaReturnType<typeof fetchAlbums>;

export function* fetchAlbumsAction(): Generator<
  | CallEffect<DataTypeResponse<Albums[]>>
  | PutEffect<{
      type: string;
      payload: unknown;
    }>,
  void,
  DataTypeResponse<Albums[]>
> {
  try {
    console.warn('run');
    const response: FetchAlbumsResponse = yield call(fetchAlbums);
    yield put(action_success_fetch_albums(response.data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    yield put(action_fail_fetch_albums());
  }
}
