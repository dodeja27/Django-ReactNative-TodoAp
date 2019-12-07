import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView ,Dimensions,SafeAreaView, Keyboard} from "react-native";
import axios from "axios";
import Constants from 'expo-constants';
const { height } = Dimensions.get("screen");
export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      addtask: {
        title: "",
        content: ""
      }
    };
    this.handlesubmit = this.handlesubmit.bind(this);
  }
  async componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("http://192.168.43.23:8000/api/todos/")
      .then(res => {
        // console.log(res.data)
        this.setState({ todos: res.data });
        // console.log("this.state.todos : ");
        // console.log(this.state.todos);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  handlesubmit() {
  
    
    const addtodo = {
      title: this.state.addtask.title,
      content: this.state.addtask.content
    };
    axios
      .post("http://192.168.43.23:8000/api/todos/", addtodo)
      .then(res => {
        this.refreshList();
      })
      .catch(function(error) {
        console.log(error);
      });
      this.setState(prevstate => ({
        addtask: {
          ...prevstate.addtask,
          title: ""
        }
      }))
      Keyboard.dismiss();
    // console.log(addtodo.content);
  }

  handledelete(item){
    // console.log(item)
     axios
    .delete(`http://192.168.43.23:8000/api/todos/${item}/`)
      .then(res => {
        this.refreshList();
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  
  render() {
    return (
      <View style={{flex:1,marginTop:Constants.statusBarHeight+25}}>
      <View style={{ height:height * 0.30,flexDirection: "column",alignItems: "center",justifyContent: "center"}}>
        <Text style={{fontSize:50}}>Todos</Text>
        <View style={{position:"relative",flexDirection: "row",alignItems: "center",justifyContent: "center"}}>
          <View style={{width: "50%",height: 50,alignItems: "center",justifyContent: "center" }}>
            <TextInput
              style={{ borderBottomWidth: 1, width: "100%" }}
              multiline={true}
              numberOfLines={2}
              defaultValue={this.state.addtask.title}
              onChangeText={text =>
                this.setState(prevstate => ({
                  addtask: {
                    ...prevstate.addtask,
                    title: text
                  }
                }))
              }
              />
          </View>
        
        </View>
        <View
            style={{
              width: "25%",
              height: 50,
              alignItems: "center",
              justifyContent: "center"
            }}
            >
            <Button
              color="black"
              title="Add Task"
              onPress={this.handlesubmit}
              />
          </View>
              </View>
              <ScrollView style={{ height:height * 0.75 , flexDirection:"column"}}>

<View >
        {this.state.todos.sort(function(a, b){return b.id-a.id}).map(item => {
          return (
            <View
            key={item.id}
            style={{flexDirection: "row",alignItems: "center",justifyContent: "center"}}>
              <View
                style={{width: "50%",height: 50,alignItems: "center",justifyContent: "center"}}>
                <Text style={{fontWeight:'500',fontFamily: 'sans-serif-condensed',letterSpacing:3}}>{item.title}</Text>
              </View>
              {/* <View
                style={{width: "20%",height: 50,alignItems: "center",justifyContent: "center"}}>
                <Button title="edit" />
              </View> */}
              <View
                style={{width: "20%",height: 50,alignItems: "center",justifyContent: "center"}}>
                <Button title="delete" onPress={this.handledelete.bind(this,item.id)} />
              </View>
            </View>
          );
        })}
        </View>
        </ScrollView>
  </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
