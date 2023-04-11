import { Provider } from 'react-redux';
import store from './store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { SafeAreaView } from 'react-native';
import AndroidSafeArea from './styles/AndroidSafeArea';
import tw from 'twrnc';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();

  return(
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <SafeAreaView style={[tw`pl-5`, AndroidSafeArea]}>
            <Stack.Navigator>
              <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}}/>
              <Stack.Screen name='MapScreen' component={MapScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
          </SafeAreaView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  )
}

export default App;
