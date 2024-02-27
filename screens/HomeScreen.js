import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EventCard from '../components/EventCard'

export default function HomeScreen() {
  return (
    <View style={styles.viewhome}>
      <Text style={styles.text}>Elegir Evento</Text>
      
      <EventCard />
    </View>
  )
}

const styles = StyleSheet.create({
    viewhome:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:25,
        fontWeight:"700"
      }
})