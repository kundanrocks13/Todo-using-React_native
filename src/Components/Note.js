import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
// var value = 'line-through';
export default class Note extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value : 'none',
            // st: this.props.keyVal,
            // status:true,
        }
    }
    // onComplete = () => {
    //     //this.setState({value:'line-through'})
    //     // this.setState({status:false})
    //     // value='line-through';
    //     alert(this.state.st)
    //   }

  render() {
    return (
        <View key={this.props.keyVal} style={styles.note}>
            <Text style={{ textDecorationLine: this.state.value }}>{this.props.val.note}</Text>

            <TouchableOpacity onPress={this.props.onDel} style={styles.noteDelete} >
                <Text style={styles.noteDeleteText}>
                    D
                </Text>
            </TouchableOpacity>
            {
                this.props.val.status &&  
                <TouchableOpacity onPress={this.props.onCom} style={styles.noteActivate} >
                    <Text style={styles.noteDeleteText}>
                        C
                    </Text>
                </TouchableOpacity>
            }
        </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position:'relative',
    // width:'90%',
    // margin:'auto',
    borderBottomColor:'black',
    borderBottomWidth:2,
    padding:17,
    paddingRight:100,
    backgroundColor:'yellow'

  },
  noteText: {
    borderLeftWidth:10,
    borderLeftColor:'blue',
    paddingLeft:20,
    // textDecorationLine: `${ this.state.value }`
  },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        padding:10,
        top:10,
        right:10,
        bottom:10,
    },
    noteActivate: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        padding:10,
        top:10,
        right:45,
        bottom:10
    },
    noteDeleteText:{
        color:'white'
    }

});
