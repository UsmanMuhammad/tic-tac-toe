import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';
import { useFonts } from 'expo-font';
/**
 * 
 * This is the entry point of our application.
 * Currently, we are loading custom font just for styling.
 * This can be handled separately, but at the moment it exists here.
 * 
 */
export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  });

  if ( !fontsLoaded ) return null

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#f4f1de" barStyle="dark-content" />
      <MainNavigation />
    </NavigationContainer>
  );
}
