import { Provider } from 'react-redux';
import store from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaView } from 'react-native';
import AndroidSafeArea from './styles/AndroidSafeArea';
import tw from 'twrnc';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return(
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={[tw`pl-5`, AndroidSafeArea]}>
          <HomeScreen />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App;
