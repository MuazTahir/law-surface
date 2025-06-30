'use client';
import { hardLoading } from '@/store/auth';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

export default function AxiosInterceptor() {
  const dispatch = useDispatch();

  const loadingStatus = useSelector((item) => {
    return item.authSlice.hardLoading;
  });

  axios.interceptors.request.use(
    (config) => {
      dispatch(hardLoading(true));
      return config;
    },
    (error) => {
      dispatch(hardLoading(false));
      return Promise.reject(error);
    }
  );

  // Add response interceptor (hides loading)
  axios.interceptors.response.use(
    (response) => {
      dispatch(hardLoading(false));
      return response;
    },
    (error) => {
      dispatch(hardLoading(false));
      return Promise.reject(error);
    }
  );

  return (
    <>
      {loadingStatus && (
        <div id="loading-bar">
          <div>
            <img src="/images/loading-update.gif" />
            <div>Loading...</div>
          </div>
        </div>
      )}
    </>
  );
}
