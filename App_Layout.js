import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';


export default function App_Layout() {
    const Header = () => {
        return(
            <View style={styles.header}>
                <Text>Header App</Text>
            </View>
        )
    }
    const Boxes = () => {
        return(
            <View style={styles.boxContainer}>
                <View style={styles.box}>
                <View style={styles.boxtwo}>
                    </View>
                     <View style={styles.inner}>
                     <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        width: '50%',
                        height: '90',
                        backgroundColor:'#FF0000',
                    }}>
                        <Text>box1</Text>
                    </View>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text>box2</Text>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text>box3</Text>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text>box4</Text>
                    </View>
                </View>

            </View>
        )
    }
  return <SafeAreaView style={styles.container}>
            <Header/>
            <Boxes/>
        </SafeAreaView>;
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      header: {
          width: '100%',
          height: '15%',
          backgroundColor: '#CCFF33',
          alignItems: 'center',
          justifyContent: 'center',
      },
      boxContainer: {
        width: '100%',
        height: '85%',
        backgroundColor: '#00FF00',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      box: {
          width: '50%',
          height: '50%',
          padding: 5,
         backgroundColor: '#000000',
      },
      inner: {
          flex: 1,
          backgroundColor: '#FFD708',
          alignItems: 'center',
          justifyContent: 'center'
      }
  });