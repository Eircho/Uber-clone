import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/themed'

const NavOptions = () => {
	const data = [
		{
			id: "123",
			title: "Get a ride",
			image: "https://links.papareact.com/3pn",
			screen: "MapScreen"
		}
	]

  return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			renderItem={({item}) => (
				<TouchableOpacity style={tw`bg-gray-300 pl-5 pb-5 w-50 m-2`}>
					<View>
						<Image 
							source={item.image}
							style={[tw`w-45 h-40`, {resizeMode: "contain"}]}
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