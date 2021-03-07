import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import LoginForm from './LoginForm';
import Articles from './Articles';
import BG from '../images/bg5.jpg';

class App extends Component{

  state={
    loggedIn:false 
  }

  renderContent =() =>{
    switch(this.state.loggedIn){
      case true:
        return <Articles/>
      case false:
        return <ImageBackground style={styles.container} source={BG}>
          <LoginForm/>
        </ImageBackground>
    }
  }
  render(){
    return(
      <View style={styles.container}>
        {this.renderContent()}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   height:'100%',
   width:'100%'
  }
});

export default App;