import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ActivityIndicator, ListView } from 'react-native';

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        </View>
        <View>
        <Button
            
            title="OK!"
            color="#841584"
          />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
