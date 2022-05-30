import axios from 'axios';
import { DataTypeResponse } from 'config/baseEntity';
// import { restAPI } from 'config/axios';
import { Albums } from 'redux/modules/albums/albumsSlice';

export const fetchAlbums = async (): Promise<DataTypeResponse<Albums[]>> => {
  return await axios.get('https://jsonplaceholder.typicode.com/albums');
};
