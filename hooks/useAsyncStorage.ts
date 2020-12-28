import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const { getItem, setItem } = useAsyncStorage('@kino_token');
export const useAuthentication = () => {
  const [token, setToken] = useState<string | any>('');

  async function getToken() {
    const item = await getItem();
    setToken(item);
  }

  async function saveToken(token: string) {
    await setItem(token);
  }

  return { token, getToken, saveToken };
};
