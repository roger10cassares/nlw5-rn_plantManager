import React, { useState } from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { Button } from '../components/Button';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';


export function Welcome(){

  const [visible, setVisible] = useState(false);

  function handleVisibility(){
    setVisible(true)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Easy Manage {'\n'}
        Your Beautiful Plants
      </Text> 

        {
          visible && // if visible is true
          <Image source={wateringImg} style={styles.image}/>
        }

        <Text style={styles.subtitle}>
          Do not forget to wet your plants. 
          We care about remind you always that is needed.
        </Text>

        {/* <Button title="Image" onPress={handleVisibility}/> */}
        <Button title=">"/>
    </SafeAreaView>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 48
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading
  },

  image: {
    width: 292,
    height: 284 
  }
})