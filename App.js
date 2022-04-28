import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EntryStackScreen from './screens/EntryStackScreen';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      
        <EntryStackScreen/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
