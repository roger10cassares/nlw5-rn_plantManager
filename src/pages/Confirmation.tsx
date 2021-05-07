import React from 'react';
import { 
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from 'react-native';

 import { Button } from '../components/Button';

 import colors from '../styles/colors';
 import fonts from '../styles/fonts';

 export function Confirmation() {
     return (
         <SafeAreaView style={styles.container}>
             <View style={styles.content} >
                 <Text style={styles.emoji}>
                    😊
                 </Text>

                 <Text style={styles.title}>
                    We are ready!
                 </Text>

                 <Text style={styles.subtitle}>
                     Now we will take care of your litlle plants with very much love!
                 </Text>

                <View style={styles.footer}>
                    <Button 
                        title="Start"
                    />
                </View>
             </View>
         </SafeAreaView>
     )
 }


 const styles = StyleSheet.create({
    container :{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 30,
        marginTop: 15
    },
    subtitle: {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        paddingVertical: 10,
        color: colors.heading
    },
    emoji: {
        fontSize: 78 
    },
    footer: {
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20
    }

 })