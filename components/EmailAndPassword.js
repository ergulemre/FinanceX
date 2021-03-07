import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class EmailAndPassword extends Component {

  state={
    email:'',
    password:'',
    error:''
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#000" 
          style={styles.input} 
          value={this.state.email}
          onChangeText={email=>this.setState({email})}/> 

        <TextInput 
          placeholder="Password"
          placeholderTextColor="#000" 
          style={styles.input} 
          value={this.state.password}
          onChangeText={password=>this.setState({password})}/> 

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.errorText}>
            {this.state.error}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20
  },
  input:{
    height:40,
    width:250,
    backgroundColor:'rgba(255,255,255,.5)',
    marginBottom:15,
    borderRadius:5,
    fontSize:15
  },
  errorText:{
    fontSize:25,
    color:'red',
    alignSelf:'center',
    marginTop:10
  },
  buttonText:{
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
    fontSize:20
  },
  buttonContainer:{
    backgroundColor:'#202b36',
    padding:7,
    borderRadius:8
  }
})

export default EmailAndPassword;