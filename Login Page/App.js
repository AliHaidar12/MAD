import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text>Login Page </Text>
        <Text>Enter Name </Text>
        <TextInput 
        style={styles.input}
        placeholder="e.g Ali Haidar"/>
        <Text>Enter Name </Text>
        <TextInput 
        style={styles.input}
        placeholder="e.g Ali Haidar"/>
      </View>

      /* <View style={styles.container}>
        <View style={styles.box}>
          	<Text>Add </Text>
        </View>
        <StatusBar style="auto" />
      </View> */

  );
}

const styles = StyleSheet.create({
  
  // header: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   // justifyContent: 'center',
  // },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    padding: 8,
    margin:10,
    width: 200,
    borderWidth:2,
    borderColor:'#777',
  }
  // box: {
  //   borderColor: '#111',
  //   borderRadius: 2,
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
