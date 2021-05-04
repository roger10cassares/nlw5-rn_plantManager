import React from 'react';
import { 
  SafeAreaView, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet,
  Dimensions,
  View
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Welcome(){

// SafaAreaView not allows padding

  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Easy Manage {'\n'}
          Your Beautiful Plants
        </Text> 

        <Image 
          source={wateringImg} 
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>
          Do not forget to wet your plants. 
          We care about remind you always that is needed.
        </Text>

        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.7 }
        > 
          <Feather 
            name="chevron-right"
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  )

}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around', // not touch the borders of the screen
    paddingHorizontal: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 48,
    fontFamily: fonts.heading,
    lineHeight: 34
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20, 
    color: colors.heading,
    fontFamily: fonts.text
  },

  image: {
    height: Dimensions.get('window').width * 0.7
  },
  button: { 
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
    paddingHorizontal: 10
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 32,
  },
})