import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <View style={tw`bg-red-300`}>
      <Image 
        style={[tw`w-35 h-35 ml-2`, {resizeMode: "contain"}]}
        source={require("../assets/uber_logo.png")}
      />
      <NavOptions />
    </View>
  )
}

export default HomeScreen