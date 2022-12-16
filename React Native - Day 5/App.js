import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Platform } from 'react-native';
import Appearencee from './Appearencee';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View>
        <Text>OS</Text>
        <Text style={styles.value}>{Platform.OS}</Text>
        <Text>OS Version</Text>
        <Text style={styles.value}>{Platform.Version}</Text>
        <Text>IsTv</Text>
        <Text style={styles.value}>{Platform.isTV.toString()}</Text>

        <Text>Constants</Text>
        <Text style={styles.value}>
          {JSON.stringify(Platform.constants,null,2)}
        </Text>
        <Appearencee/>
        
      </View>
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
