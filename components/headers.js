import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Headers=(props)=>{
    return(
        <View>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles=StyleSheet.create(
    {
        text:{
            fontSize:30,
            backgroundColor:'darkslateblue',
            color:'white',
            justifyContent:'center',
            textAlign:'center',
            padding:10
        }
    }
)

export default Headers