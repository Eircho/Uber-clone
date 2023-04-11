import { View, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { setOrigin, setDestination } from '../slices/navSlice'

const HomeScreen = () => {
  const dispatch = useDispatch()

  return (
    <View style={tw`bg-red-300`}>
      <Image 
        style={[tw`w-35 h-35 ml-2`, {resizeMode: "contain"}]}
        source={require("../assets/uber_logo.png")}
      />
      <GooglePlacesAutocomplete
        placeholder='Where from?'
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 30
          }
        }}
        enablePoweredByContainer={false}

        onPress={(data, details = null) => {
          dispatch(setOrigin({
            location: details.geometry.location,
            description: data.description
          }))

          dispatch(setDestination(null))
        }}

        fetchDetails={true}
        returnKeyType={"search"}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'en',
        }}
      />
      <NavOptions />
    </View>
  )
}

export default HomeScreen