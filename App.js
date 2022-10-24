import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import AddItem from "./components/addItems";

import Headers from "./components/headers";
import ListItem from "./components/listItem";


const App=()=>{
  const [grocery,setGrocery]=useState(
    [
      {
        id:Math.floor(Math.random()*7000),
        text:"milk"
      },
      {
        id:Math.floor(Math.random()*7000),
        text:"sugar"
      }, 
      {
        id:Math.floor(Math.random()*7000),
        text:"oats"
      },
      {
        id:Math.floor(Math.random()*7000),
        text:"strawberry"
      }
    ]
  );
  
  const deleteData=(props)=>{
    console.log('triggered',props)
    setGrocery(previous=>{return previous.filter(data=>data.id != props)})
  }

  const addData=(text)=>{
    console.log('lol',text)
    setGrocery([{id:Math.floor(Math.random()*7000),text},...grocery])
  }

  return(
    <View style={styles.container}>
      <Headers title="Shoppings list" style={styles.header}/>
      <AddItem addData={addData} />
      <FlatList data={grocery} renderItem={({item})=><ListItem item={item} deleteItem={deleteData} />} />
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop:60
  },
  header:{
    textAlign:'center'
  }
})

export default App