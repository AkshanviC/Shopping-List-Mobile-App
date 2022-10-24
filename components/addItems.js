import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

const AddItem=({addData})=>{
    const [text,setText]=useState();
    const onChange=(textValue)=>setText(textValue);
    return(
        <View>
            <TextInput style={styles.textinput} placeholder="enter the name" onChangeText={onChange} />
            <TouchableOpacity onPress={()=>addData(text)}>
            <Text style={styles.text}><Icon size={20} color="white" name="plus"  /> Add Item</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create(
    {
        textinput:{
            borderColor:'darkslateblue',
            fontSize:20,
            padding:10
        },
        text:{
            backgroundColor:'darkslateblue',
            color:'white',
            textAlign:"center",
            padding:15,
            fontSize:20
        }
    }
)

export default AddItem