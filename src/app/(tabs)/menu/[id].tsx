import React from 'react'
import { Text } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { View } from '@/components/Themed';


const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{title: 'Details: ' + id}}/>
      <Text style={{fontSize: 20}}>product for id: {id}</Text>
    </View>
  )
}

export default ProductDetailScreen;