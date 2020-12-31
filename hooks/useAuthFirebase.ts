import { useState, useEffect } from 'react';
import app from 'firebase/app';

const useGetUserData = () => {
  const [userData, setUser] = useState<any>({});

  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged((user: any) => {
      if (user) {
        console.log(user);
        setUser(user);
      }
    });

    return () => unsubscribe();
  }, [userData]);

  return { userData };
};

export default useGetUserData;
