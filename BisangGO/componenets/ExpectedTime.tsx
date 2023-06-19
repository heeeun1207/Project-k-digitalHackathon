import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: 'black',
  },
  text2: {
    color: 'gray',
  },
  leftContainer: {
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'row',
  },
  rightContainer: {
    width: '80%',
    display: 'flex',
    // alignItems: 'center',
    // flexDirection: 'row',
  },
});

const ExpectedTime = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.leftContainer}>
        <Image source={require('../img/Group1.png')} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text2}>예상 출동 시간</Text>
        <Text style={styles.text}>5min</Text>
      </View>
    </View>
  );
};

export default ExpectedTime;
