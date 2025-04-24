import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, Dimensions } from 'react-native';
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

const appLoaders = [
    require('./App/sourceAssets/appLoaders/chickenLoader1.png'),
    require('./App/sourceAssets/appLoaders/chickenLoader2.png')
]

const App = () => {
      const [currentLoader, setCurrentLoader] = useState(0);
      const slideAnimation1 = useRef(new Animated.Value(0)).current;
      const slideAnimation2 = useRef(new Animated.Value(Dimensions.get('window').width)).current;

      useEffect(() => {
            const animationTimeout = setTimeout(() => {
            slideToNextLoader();
      }, 1500);

      const navigation = setTimeout(() => {
            navigateToMenu();
            }, 4000);

            return () => {
                  clearTimeout(animationTimeout);
                  clearTimeout(navigation);
            };
      }, []);

      const slideToNextLoader = () => {
            Animated.parallel([
            Animated.timing(slideAnimation1, {
                  toValue: -Dimensions.get('window').width,
                  duration: 1500,
                  useNativeDriver: true,
            }),
            Animated.timing(slideAnimation2, {
                  toValue: 0,
                  duration: 1500,
                  useNativeDriver: true,
                  }),
            ]).start(() => {
                  setCurrentLoader(1);
            });
      };

      const navigateToMenu = () => {
            setCurrentLoader(2);
      };  

  return (
      <MusicProvider>
            <NavigationContainer>
                  <Stack.Navigator
                        screenOptions={{
                        headerShown: false,
                        animation: 'fade',
                        animationDuration: 1000,
                  }}>
                        {currentLoader < 2 ? (
                              <Stack.Screen name="Welcome" options={{ headerShown: false }}>
                              {() => (
                              <View style={{ flex: 1, backgroundColor: '#000' }}>
                                    <Animated.Image
                                          source={appLoaders[0]}
                                          style={[
                                          { 
                                                width: '100%', 
                                                height: '100%', 
                                                position: 'absolute',
                                          },
                                          { 
                                                transform: [{ translateX: slideAnimation1 }],
                                          },
                                          ]}
                                    />
                                    <Animated.Image
                                          source={appLoaders[1]}
                                          style={[
                                          { 
                                                width: '100%', 
                                                height: '100%', 
                                                position: 'absolute',
                                          },
                                          { 
                                                transform: [{ translateX: slideAnimation2 }],
                                          },
                                          ]}
                                    />
                              </View>
                              )}
                              </Stack.Screen>
                        ) : (
                              <Stack.Screen 
                                    name="AppAnimationRoute" 
                                    component={AppAnimationRoute} 
                                    options={{ headerShown: false }} 
                              />
                        )}         
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
