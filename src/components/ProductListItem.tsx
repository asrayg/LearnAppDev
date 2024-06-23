import Colors from '../constants/Colors';
import { StyleSheet, View, Text, Image } from 'react-native';


const ProductListItem = ({product}) =>{
  return (
    <View style={styles.container}>
    <Image source={{uri: product.image}} style={styles.image}/>
    <Text style={styles.title}>{product.name}</Text>
    <Text style={styles.price}>${product.price}</Text>
  </View>
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
