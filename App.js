import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={[styles.rover,{flex:.75}]}
        source={require('./assets/spirit.jpg')}>
      </Image>
      <Text style = {{flex:.25}}>  Le Rover Opportunity</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
    /* ,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', */
  },
  rover: {
   width: '75%'
  }
});
