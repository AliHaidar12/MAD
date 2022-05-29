import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from 'firebase/app';
import "firebase/auth";
import "firebase/firestore"
const HomeScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        style={{height: 40}}
        placeholder="User Name"
        onChangeText={newText => setText(newText)}
      />
      <TextInput
        style={{height: 40}}
        placeholder="Passward"
        onChangeText={newText => setText(newText)}
        
      />
      <Button
      title="Login"
      onPress={() => navigation.navigate('Detail')
      }
    />
    </View>
    
  )
}

const Detail = ({navigation})=>{
  return(
    <View>
      <Text>Detail Screen</Text>
      
    </View>
    
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home'
      component={HomeScreen}
      options={{title: 'Login Page'}}/>
      <Stack.Screen name='Detail'
      component={Detail}
      options={{title: 'welcome New Screen'}}/>
    </Stack.Navigator>
  </NavigationContainer>



    // <View style={styles.container}>
    //   <Text>hello word</Text>
    //   <Button title="Click Me" onPress={()=>
    //      Alert.alert("Title","Select one Button") }/>
      
    //   <StatusBar style="auto" />
    // </View>
    
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Home'>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{ title: 'Welcome' }}
    //     />
    //     <Stack.Screen name="Detail"
    //     component={DrtailScreen}
    //     options={{title: "Welcom in Detail"}}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
  color: "red",
  }
});
