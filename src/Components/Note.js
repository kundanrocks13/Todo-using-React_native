import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
// var value = 'line-through';
export default class Note extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value : 'none',
        }
    }

  render() {
    return (
        <View key={this.props.keyVal} style={styles.note}>
        <View style={{flex:1, flexDirection:'row'}}>
            <Text style={{color:'red', fontSize:18, flex:0.2}}>{this.props.keyVal+1}.</Text>
            <Text style={[this.props.val.status?{textDecorationLine:'line-through'}:null,{flex:1.8,paddingTop:2}]}>{this.props.val.note}</Text>
        </View>

            <TouchableOpacity onPress={this.props.onDel} style={styles.noteDelete} >
                <Text style={styles.noteDeleteText}>
                    D
                </Text>
            </TouchableOpacity>
            {console.log(this.props.val.status)}
            {
               
                this.props.val.status?null: 
                (<TouchableOpacity onPress={this.props.onCom} style={styles.noteActivate} >
                    <Text style={styles.noteDeleteText}>
                        C
                    </Text>
                </TouchableOpacity>)
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
    // backgroundColor:'#FEF1CD'

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
