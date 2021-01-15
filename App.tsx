import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import store from './state';

import { Text } from 'react-native'

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme()
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  if(isLoading) {
    return <Text>loading...</Text>
  }

  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);	
  }, []);


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
