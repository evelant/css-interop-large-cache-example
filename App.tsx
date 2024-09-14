import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import { Text, View } from 'react-native';
import './global.css';

export default function App() {
  return (
    <>
      <ScreenContent title="Home" path="App.tsx" />
      <View className="bg-red-500">
        <Text>foo</Text>
      </View>
      <StatusBar style="auto" />
    </>
  );
}
