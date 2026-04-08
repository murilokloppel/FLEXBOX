import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function CaixaRed(){
  return <View style={{height:50, 
                      //flex:1,
                      //alignSelf:"flex-start",
                      width:"65%",
                      backgroundColor:"#ff0000"}}>

                       </View>
}
function CaixaBlue(){
  return <View style={{height:50,
                      //flex:1,
                      //alignSelf:"flex-end",
                       width:'100%',
                       backgroundColor:"#163cf7d9"}}>

                       </View>
}
function CaixaGreen(){
  return <View style={{height:50,
                      //flex:1,
                      //alignSelf:"flex-start",
                       width:"100%",
                       backgroundColor:"#3f9553"}}>

                      </View>
                  }
function CaixaYellow(){
  return <View style={{height:50,
                      //flex:1,
                      //alignSelf:"flex-end",
                       width:150,
                       backgroundColor:"#faf205fb"}}>

                       </View>
}
export default function App() {
  return (
    <View style={styles.container}>
      
      <CaixaYellow />
      <CaixaGreen />
      <CaixaRed />
      <CaixaYellow />
      <CaixaBlue />
      <CaixaGreen />  
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
    borderColor: "#f1ef54",
    borderWidth: 12,
    borderRadius: 50,
  },
});
