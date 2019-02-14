import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Button, KeyboardAvoidingView } from 'react-native';
import Note from './Note';
// import {Dimensions} from 'react-native';

// var {height, width} = Dimensions.get('window');
export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            noteArray:[],
            noteText:'',
        }
    }
  addNote = () => {
      if(this.state.noteText)
      {
        this.state.noteArray.push({
            'note':this.state.noteText,
            'status':false
        })

      }
      this.setState({noteArray:this.state.noteArray})
      this.setState({noteText:''})
  }
 
  deleteNote = (key) => {
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray:this.state.noteArray})
  }

  onComplete = (key) => {
    this.state.noteArray[key].status = true
    this.setState({noteArray:this.state.noteArray})
    // alert(JSON.stringify(item))
    // // this.state.noteArray.push({
    // //     'status':false,
    // // })
    // this.setState({noteArray:this.state.noteArray})
    // alert(JSON.stringify(this.state.noteArray))
  }


  render() {
      let notes = this.state.noteArray.map((val, key) => {
          return <Note key={key} keyVal={key} val={val} onDel={()=>this.deleteNote(key)} onCom={()=>this.onComplete(key)} />
      });
    return (
      <View style={styles.container}>

        <View style={styles.header}>
           <Text style={styles.headerText}>TO DO</Text>
           <Text style={styles.headerSmallText}>Note* C-complete D-delete</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
            {notes}     
        </ScrollView>

        <View style={styles.footer}>
        <TextInput
                style={styles.textInput}
                onChangeText={(noteText) => this.setState({noteText})}
                value={this.state.noteText}
                placeholder="Enter Task"
                placeholderTextColor='blue'
                underlineColorAndroid='transparent'
                editable = {true}
                maxLength = {40}
            >
            </TextInput>
            
        </View>

        <TouchableOpacity onPress={this.addNote} style={styles.addButton} >
           
            <Text style={styles.addButtonText}>
                Add
            </Text>
               
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
      alignItems:'center',
      justifyContent:'center',
      borderBottomWidth:1,
      borderBottomColor:'black',
      backgroundColor:'skyblue',
      width:'100%',
      marginTop:20

  },
  headerText: {
      fontSize:20,
      padding:15
  },
  headerSmallText:{
      fontSize:12
  },
  scrollContainer:{
      flex:1,
      marginBottom:60
  },
  footer:{
      position:'absolute',
      bottom:0,
      left:0,
      right:0,
      zIndex:10,
      backgroundColor:'#FEF1CD'
  },
  textInput:{
      alignSelf:'stretch',
      color:'green',
      padding:20,
      backgroundColor:'#E1E4E5',
      fontSize:16,
      borderTopWidth:2,
      borderTopColor:'black'
  },
  addButton: {
      position:'absolute',
      zIndex:11,
      right:10,
      bottom: 0,
      backgroundColor: 'blue',
      width: 70,
      height: 70,
      borderRadius: 50,
      alignItems:'center',
      justifyContent:'center'
  },
  addButtonText: {
      color: 'white',
      fontSize: 24
  }
});
