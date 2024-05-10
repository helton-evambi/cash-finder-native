import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LoginForm from './screens/Loginform';

const App = () => {
  return (
    <View style={styles.container}>
      <LoginForm></LoginForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#D9D9D9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;