import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Image } from 'react-native';
import imgScorp from './assets/scorp.webp'


export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      //source={require('.asset/scorp.webp')}
      source={imgScorp}
      />

      <View
      onTouchStart={(event) =>  {Alert.alert("Clique Start" , "Clique Começou")}}
      onTouchMove={(event) =>  {Alert.alert("Clique End" , "Clique Terminou")}}
      > </View>
      
      <Text style={styles.text}>Flexbox</Text>
      <Text style={styles.text}> ➡️➡️ </Text>

      <Text
      onPress={() => console.log("texto pressionado")}
      onLongPress={() => console.log("long sendo utilizado")} 
      
          >     Frase para demonstração de eventos!!!</Text>
          <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
                <Text style={styles.text}>Hello</Text>
                <Text style={styles.text}>World</Text>
          </View>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: "column",
    backgroundColor: '#63edd6',
    alignItems: 'center',
    //flexWrap: "wrap",
    justifyContent: 'center',
    borderColor: "#f0f772",
    borderWidth: 12,
    borderRadius: 70,
  },
  text: {
    fontSize: 30,
    alignContent: "center",
    fontWeight: "bold",
    backgroundColor: "#fbf989",
    padding: 15,
    borderRadius: 50, 
    marginBottom: 10,
  }
});
