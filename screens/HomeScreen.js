import { Image, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch, useSelector } from 'react-redux'
import { setOrigin, setDestination, selectOrigin } from '../slices/navSlice'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavFavourites from '../components/NavFavourites';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const dispatch = useDispatch()
  const origin = useSelector(selectOrigin)
  const navigation = useNavigation()

  useEffect(() => {
		navigation.navigate('MapScreen')
    dispatch(setDestination(null))
	}, [origin])

  return (
    <View style={tw`h-full bg-white`}>
    <SafeAreaView>
      <Image 
        style={[tw`w-35 h-35 ml-2`, {resizeMode: "contain"}]}
        source={require("../assets/uber_logo.png")}
      />
      <GooglePlacesAutocomplete
        placeholder={origin ? origin.description : "Where from?"}
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
        }}

        fetchDetails={true}
        returnKeyType={"search"}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'en',
        }}
      />
      <NavOptions />
      <NavFavourites originOrDestination={"origin"}/>
    </SafeAreaView>
    </View>
  )
}

export default HomeScreen