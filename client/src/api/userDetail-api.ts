import { useQuery } from '@tanstack/react-query';
import { defaultInstance } from '.';
import { IUserDetail } from '@/types/dto';
import useGetLoginStatus from '@/hooks/useGetLoginStatus';

export const GetUserDetailApi = async () => {
  const { data } = await defaultInstance.get('/user/detail');

  return data;
};

export const useGetUserDetailQuery = () => {
  const { isLogin } = useGetLoginStatus();
  const {
    isLoading,
    error,
    data: backendData,
  } = useQuery(['userDetail', isLogin], () => GetUserDetailApi());

  const data: IUserDetail = backendData;

  return { isLoading, error, data };
};
