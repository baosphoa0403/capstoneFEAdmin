import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'features/counter/counterSlice';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { albumsReducer } from './modules/albums/albumsSlice';
import rootSaga from './root/RootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    album: albumsReducer
  },
  middleware: getDefaultMiddleware =>
    process.env.NODE_ENV === 'development'
      ? getDefaultMiddleware({ thunk: false }).concat(logger, sagaMiddleware)
      : getDefaultMiddleware({ thunk: false })
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
