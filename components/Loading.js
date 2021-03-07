import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


/**
* @author
* @function Loading
**/
const Loading = (props) => {

const { container } = styles
 return(
  <View style={container}>
    <Text>Loading</Text>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  }
})
export default Loading