import Colors from '../constants/Colors';
import { StyleSheet, Text, Image, Pressable } from 'react-native';
import { Product } from '../types';
import {Link, useSegments} from 'expo-router';

type ProductListItem = {
    product: Product
}
const ProductListItem = ({product}: ProductListItem) =>{
  const segments = useSegments()
  console.log(segments);
  return (
    <Link href = {`/${segments[0]}/menu/${product.id}`} asChild>
    <Pressable  style={styles.container}>
    <Image source={{uri: product.image || 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png' }} 
    style={styles.image}
    resizeMode='cover'
    />

    <Text style={styles.title}>{product.name}</Text>
    <Text style={styles.price}>${product.price}</Text>
  </Pressable>
  </Link>
  );
}

export default ProductListItem;

const styles = StyleSheet.create({
  image: {
    width:'100%',
    aspectRatio: 1,
  },
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius:10,
    flex: 1,
    maxWidth: '50%'
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    marginVertical: 10,
  },

  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
});
