import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LineUpsScreen() {
  return (
    <View style={styles.viewlineups}>
      <Text>LineUpsScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    viewlineups:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})