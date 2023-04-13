import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/themed'
import { useDispatch } from 'react-redux'
import { setOrigin, setDestination } from '../slices/navSlice'

const data = [
  {
    id: "123",
    icon: "home",
    title: "Home",
    description: "Code Street, London, UK",
    location: {
      "lat": 51.5223932,
      "lng": -0.0608299999
    }
  },
  {
    id: "456",
    icon: "briefcase",
    title: "Work",
    description: "London Bridge, London, UK",
    location: {
      "lat": 51.5078788,
      "lng": -0.0877321000
    }
  }
]

const NavFavourites = ( {originOrDestination} ) => {
  const dispatch = useDispatch()

  return (
    <FlatList
			data={data}
			keyExtractor={(item) => item.id}
			renderItem={({item}) => (
				<TouchableOpacity 
          style={tw`flex-row items-center p-5 pl-2`}
          onPress={() =>{
            if (originOrDestination === "origin") {
              dispatch(setOrigin({
                location: item.location,
                description: item.description
              }))
            }
            else if (originOrDestination === "destination") {
              dispatch(setDestination({
                location: item.location,
                description: item.description
              }))
            }
          }}
        >
            <Icon 
              style={tw`mr-4 rounded-full bg-gray-300 p-3`}
              name={item.icon}
              type='ionicon'
              color="white"
              size={18}
            />
            <View>
              <Text style={tw`text-lg font-semibold`}>{item.title}</Text>
						  <Text style={tw`text-gray-300`}>{item.description}</Text>
            </View>
				</TouchableOpacity>
			)}
      ItemSeparatorComponent={() => {
        <View
          style={[tw`bg-gray-200`, { height: 0.5 }]}
        />
      }}
		/>
  )
}

export default NavFavourites