import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <>
      <View style={styles.View}>
        <Text style={styles.Text}>Init Project</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  View: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {

  },
});

export default App;
