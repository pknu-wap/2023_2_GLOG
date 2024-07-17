import { useEffect, useState } from 'react';

const useGetLoginStatus = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setToken(localStorage.getItem('token'));
    }
  }, []);

  return { isLogin: !!token };
};

export default useGetLoginStatus;
