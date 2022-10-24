import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import  Icon  from "react-native-vector-icons/dist/FontAwesome";


const ListItem=(props)=>{
    return(
            <TouchableOpacity style={styles.list}>
                <View style={styles.listview}>
                    <Text style={styles.listText}>{props.item.text}</Text>
                    <Icon name="remove" color="firebrick" size={20} onPress={()=>props.deleteItem(props.item.id)} />
                </View>
            </TouchableOpacity>
    )
}

const styles= StyleSheet.create(
    {
        list:{
            backgroundColor:'#f8f8f8',
            padding:15
        },
        listview:{
            flexDirection:"row",
            justifyContent:"space-between"
        },
        listText:{
            fontSize:25,
            color:'black'
        }
    }
)

export default ListItem