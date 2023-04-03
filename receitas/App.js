import {View,Text, StyleSheet} from 'react-native'

export default function App(){
  return(
    <View  style={styles.container}>
      <Text style={styles.title}>Meu primeiro App</Text>
      <Nome />
      <Nome />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    
    height:400
  },
  title:{
    fontSize: 24,
    marginTop: 100
  }
})

function Nome() {
  return(
    <Text>Olá Danilo!</Text>
  )
}