import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import FavoriteContextProvider from './store/context/favorites-context';
import FavoriteScreen from './screens/FavoriteScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return <>
    <StatusBar style='dark' />
    <FavoriteContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='MealsCategories'>
          <Stack.Screen name='MealsCategories' component={CategoriesScreen} />
          <Stack.Screen name='MealsOverview' component={MealsOverViewScreen} />
          <Stack.Screen name='Favorite' component={FavoriteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoriteContextProvider>
  </>
}


