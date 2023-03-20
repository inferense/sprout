import {Image, StyleSheet, Text, View} from 'react-native';
import * as Progress from 'react-native-progress';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={require('../../assets/sprout.png')} />
      <Text style={styles.titleText}>sprout</Text>
      <Text style={styles.baseText}>Hargasova 21</Text>
      {/* TODO connected state */}
      <Text style={styles.baseText}>connected</Text>
      <View style={styles.progress}>
        {/* TODO use state from API */}
        <Progress.Circle // TODO fix the black background
          progress={0.1}
          thickness={5}
          showsText={true}
          size={200}
          animated={false}
          unfilledColor="#fff"
        />
      </View>
      <Text style={styles.version}>version: 0.0.1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'System',
    paddingBottom: 50,
  },
  baseText: {
    paddingTop: 10,
    fontSize: 15,
    fontFamily: 'System',
  },
  icon: {
    width: 70,
    height: 70,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 60,
    margin: 60,
  },
  version: {
    fontSize: 12,
    fontFamily: 'System',
    paddingBottom: 30,
    paddingTop: 80,
  },
  progress: {
    paddingBottom: 20,
    paddingTop: 70,
  },
});

export default Home;
