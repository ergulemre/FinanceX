import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Logo = (props) => {

//const { container } = styles
 return(
  <View>
    <Image source={require('../images/logo2.png')} style={{height:150, width:150}} />
  </View>
  )
}


/*const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  }
})*/
export default Logo