import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LoginForm from './screens/Loginform';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Content Centered</Text>
      <LoginForm></LoginForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;