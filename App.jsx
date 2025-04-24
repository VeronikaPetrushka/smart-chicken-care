import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MusicProvider } from './App/sourceConstants/AppMusicInitializer';

import AppAnimationRoute from './App/sourceRoutes/AppAnimationRoute';

import ChickenBookRoute from './App/sourceRoutes/ChickenBookRoute';
import ChickenBookReadRoute from './App/sourceRoutes/ChickenBookReadRoute';
import ChickenBookSavedRoute from './App/sourceRoutes/ChickenBookSavedRoute';
import ChickenBrandReadRoute from './App/sourceRoutes/ChickenBrandReadRoute';
import ChickenBrandsRoute from './App/sourceRoutes/ChickenBrandsRoute';
import ChickenComparisonRoute from './App/sourceRoutes/ChickenComparisonRoute';
import ChickenExpensesRoute from './App/sourceRoutes/ChickenExpensesRoute';
import ChickenGameRoute from './App/sourceRoutes/ChickenGameRoute';
import AppPreviewRoute from './App/sourceRoutes/AppPreviewRoute';
import AppSettingsRoute from './App/sourceRoutes/AppSettingsRoute';
import AddChickenExpensesRoute from './App/sourceRoutes/AddChickenExpensesRoute';

enableScreens();

const Stack = createStackNavigator();

const App = () => {

  return (
      <MusicProvider>
            <NavigationContainer>
                  <Stack.Navigator initialRouteName={"AppAnimationRoute" }>    
                        <Stack.Screen 
                              name="AppAnimationRoute" 
                              component={AppAnimationRoute} 
                              options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                              name="ChickenBookRoute" 
                              component={ChickenBookRoute} 
                              options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                              name="ChickenBookReadRoute" 
                              component={ChickenBookReadRoute} 
                              options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                              name="ChickenBookSavedRoute" 
                              component={ChickenBookSavedRoute} 
                              options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                              name="ChickenBrandReadRoute" 
                              component={ChickenBrandReadRoute} 
                              options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                              name="ChickenBrandsRoute" 
                              component={ChickenBrandsRoute} 
                              options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                              name="ChickenComparisonRoute" 
                              component={ChickenComparisonRoute} 
                              options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                              name="ChickenExpensesRoute" 
                              component={ChickenExpensesRoute} 
                              options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                              name="ChickenGameRoute" 
                              component={ChickenGameRoute} 
                              options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                              name="AppPreviewRoute" 
                              component={AppPreviewRoute} 
                              options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                              name="AppSettingsRoute" 
                              component={AppSettingsRoute} 
                              options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                              name="AddChickenExpensesRoute" 
                              component={AddChickenExpensesRoute} 
                              options={{ headerShown: false }} 
                        />
                  </Stack.Navigator>
            </NavigationContainer>
      </MusicProvider>
    );
};

export default App;
