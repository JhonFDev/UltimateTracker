import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SetupLineUps() {
  return (
    <View style={styles.viewcontainersetuplineups}>
      <Text>SetupLineUps</Text>
    </View>
  )
}

const styles = StyleSheet.create({ 
    viewcontainersetuplineups:{
        borderWidth:1,
        borderColor:"red"
    }
})