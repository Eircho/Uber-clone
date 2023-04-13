import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, setDestination } from '../slices/navSlice'
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from '../components/NavFavourites';

const NavigateCard = () => {
	const dispatch = useDispatch()
	const destination = useSelector(selectDestination)
	const navigation = useNavigation()

  return (
    <SafeAreaView style={[tw`bg-white h-full`]}>
			<Text style={tw`text-center py-5 text-3xl`}>Choose your destination</Text>
			<View style={tw`border-t border-gray-200 flex-shrink`}>
				<GooglePlacesAutocomplete
					placeholder={destination ? destination.description : "Where to?"}
					nearbyPlacesAPI='GooglePlacesSearch'
					debounce={400}
					styles={styles}
					enablePoweredByContainer={false}

					onPress={(data, details = null) => {
						dispatch(setDestination({
							location: details.geometry.location,
							description: data.description
						}))

						navigation.navigate('RideOptionsCard')
					}}
					fetchDetails={true}
					returnKeyType={"search"}
					query={{
						key: GOOGLE_MAPS_APIKEY,
						language: 'en',
					}}
				/>
			</View>
			<NavFavourites originOrDestination={"destination"}/>
    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		paddingTop: 20,
		flex: 0
	},
	textInput: {
		backgroundColor: "#DDDDDF",
		borderRadius: 0,
		fontSize: 18
	},
	textInputContainer: {
		paddingHorizontal: 20,
		paddingBottom: 0
	}
})