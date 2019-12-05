import React, { Component } from "react";
import { StyleSheet, Text, View ,Button} from "react-native";

export default class Dashboard extends Component {
//  renderitems(){
//    return  todoItems.map(item=>{
//     <View style={{ flexDirection: 'row',alignItems:'center',justifyContent:"center"}}>
//     <View style={{width: "50%", height: 50,  alignItems:'center',justifyContent:"center"}} ><Text>{item.title}</Text></View>
//     <View style={{width: "20%", height: 50, alignItems:'center',justifyContent:"center"}} ><Button title="edit"/></View>
//     <View style={{width: "20%", height: 50,alignItems:'center',justifyContent:"center"}} ><Button title="delete"/></View>
//   </View>
//    })
//  }
    render() {
    return (

    <View style={{flex: 1, flexDirection: 'column',alignItems:'center',justifyContent:"center"}}>
    {todoItems.map(item => {return(
        
        <View key={item.id} style={{ flexDirection: 'row',alignItems:'center',justifyContent:"center"}}>
        <View style={{width: "50%", height: 50,  alignItems:'center',justifyContent:"center"}} ><Text>{item.title}</Text></View>
        <View style={{width: "20%", height: 50, alignItems:'center',justifyContent:"center"}} ><Button title="edit"/></View>
        <View style={{width: "20%", height: 50,alignItems:'center',justifyContent:"center"}} ><Button title="delete"/></View>
      </View>
      
    )})}
    
    </View>

    );
  }
}
const todoItems = [
  {
    id: 1,
    title: "Go to Market",
    content: "Buy ingredients to prepare dinner"
  },
  {
    id: 2,
    title: "Study",
    content: "Read Algebra and History textbook for upcoming test"
  },
  {
    id: 3,
    title: "Sally's books",
    content: "Go to library to rent sally's books"
  },
  {
    id: 4,
    title: "Article",
    content: "Write article on how to use django with react"
  }
];
const styles = StyleSheet.create({
  container: {
      
    flex:1,
    flexDirection: "row",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  items: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
