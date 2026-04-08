import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Flexbox</Text>
      <Text style={styles.text}> ➡️➡️ </Text>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#63edd6',
    alignItems: 'center',
    flexWrap: "wrap",
    justifyContent: 'center',
    borderColor: "#f0f772",
    borderWidth: 12,
    borderRadius: 50,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "#fbf989",
    padding: 15,
    borderRadius: 50, 
    marginBottom: 10,
  }
});
