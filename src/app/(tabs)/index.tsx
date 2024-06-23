import Colors from '@/src/constants/Colors';
import { StyleSheet, View, Text, Image } from 'react-native';
import products from '../../../assets/data/products'

const product = products[1];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image}/>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width:'100%',
    aspectRatio: 1,
  },
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius:10
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