import { Text, SafeAreaView } from 'react-native';
import NavigationStack from './Application/navigation/RootNavigator'
import { gStyles } from './Application/styles/GlobalStyles'

export default function App() {
  return (
    <SafeAreaView style={gStyles.container}>
      <NavigationStack />
    </SafeAreaView>
  );
}
