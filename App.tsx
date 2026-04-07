import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function CaixaRed(){
  return <View style={{height:100, width:100, backgroundColor:"#ff0000"}}></View>
}

function CaixaBlue(){
  return <View style={{height:100, width:100, backgroundColor:"#163cf7d9"}}></View>
}

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "#6f00d1",
    borderWidth: 8,
  },
});
