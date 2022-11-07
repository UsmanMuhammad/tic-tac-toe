import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, VsComputer, Result } from '../screens';

const MainNavigationStack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
}

export default function MainNavigation() {
  
  return (
    <MainNavigationStack.Navigator>
      <MainNavigationStack.Screen
        name="Home"
        component={Home}
        options={screenOptions}
      />
      <MainNavigationStack.Screen
        name="VsComputer"
        component={VsComputer}
        options={screenOptions}
      />
      <MainNavigationStack.Screen
        name="Result"
        component={Result}
        options={screenOptions}
      />
    </MainNavigationStack.Navigator>
  );
}
