import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface Albums {
  id: number;
  userId: number;
  title: string;
}
export interface ProductState {
  albums: Albums[];
  loading: boolean;
}

const initialState: ProductState = {
  albums: [],
  loading: false
};

export const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    action_pending_fetch_albums: state => {
      state.loading = true;
    },
    action_success_fetch_albums: (state, { payload }: PayloadAction<Albums[]>) => {
      console.warn(payload);
      state.albums = payload;
      state.loading = false;
    },
    action_fail_fetch_albums: state => {
      state.loading = false;
    }
  }
});

// Action creators are generated for each case reducer function
export const { action_pending_fetch_albums, action_success_fetch_albums, action_fail_fetch_albums } =
  albumsSlice.actions;

export const albumsReducer = albumsSlice.reducer;
