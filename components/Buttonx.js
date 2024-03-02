import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Buttonx(props) {
    const {onpress, text, color, backgroundcolor, fontsize} = props
  return (
    <TouchableOpacity style={{...styles.btnx, backgroundColor : backgroundcolor}} onPress={onpress} >
      <Text style={{...styles.txtbtnx, color: color, fontSize:fontsize}}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btnx:{
        borderRadius:20,
        paddingVertical:10,
        borderWidth:1,
        marginTop:20
    },
    txtbtnx:{
        textAlign:"center",
        fontWeight:"700"
    }
})