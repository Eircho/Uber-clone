import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'

const NavOptions = () => {
	const navigation = useNavigation();
	const origin = useSelector(selectOrigin)

	const data = [
		{
			id: "123",
			title: "Get a ride",
			image: require("../assets/car.png"),
			screen: "MapScreen"
		}
	]

  return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			renderItem={({item}) => (
				<TouchableOpacity 
					style={tw`bg-gray-300 pl-5 pb-5 w-50 m-2`} 
					onPress={() => navigation.navigate(item.screen)}
					disabled={!origin}
				>
					<View style={tw`${!origin && "opacity-20"}`}>
						<Image 
							source={item.image}
							style={[tw`w-35 h-40`, {resizeMode: "contain"}]}
						/>
						<Text style={tw`pl-3 text-lg font-semibold`}>{item.title}</Text>
						<Icon 
							style={tw`p-2 ml-3 bg-black rounded-full w-10 mt-4`}
							name='arrowright' color="white" type='antdesign' 
						/>
					</View>
				</TouchableOpacity>
			)}
		/>
  )
}

export default NavOptions;