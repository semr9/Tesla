import React from 'react';
import {  Text, View, Pressable } from 'react-native';
import styles from './style'

const StyleButton = (props) => {
    const type = props.type;
    console.warn(type);
    return (
      <View style={styles.container}>
        <Pressable 
            style ={styles.button} 
            onPress = { () => {
                console.warn({data: 'Hey there'})
            }}
        >
        <Text style={styles.text}> Custom Order </Text>    
        </Pressable>
      </View>
  );
}

export default StyleButton;