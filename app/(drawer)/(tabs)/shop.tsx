import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { Menu } from 'lucide-react-native';
import { useEffect } from 'react';

const categories = [
  'All Products',
  'Chips',
  'Crackers',
  'Nuts',
  'Sweet Snacks',
];

const products = [
  { id: 1, name: 'Ding Dong', category: 'Sweet Snacks', price: 45, image: 'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 2, name: 'Boy Bawang Cornick', category: 'Nuts', price: 35, image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 3, name: 'Mang Juan Hot Chili', category: 'Chips', price: 25, image: 'https://images.pexels.com/photos/158968/ibiza-chips-plate-food-snack-158968.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 4, name: 'Salted Egg Chips', category: 'Chips', price: 85, image: 'https://www.thesevenpantry.com/cdn/shop/products/TSP-CrackleSEa.jpg?v=1613627379&width=800' },
  { id: 5, name: 'Chicharon Cracklings', category: 'Crackers', price: 65, image: 'https://images.pexels.com/photos/6419734/pexels-photo-6419734.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 6, name: "Marty's Cracklin", category: 'Crackers', price: 120, image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

export default function ShopScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          style={styles.menuButton}>
          <Menu size={24} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Products</Text>
        {products.map((product) => (
          <TouchableOpacity key={product.id} style={styles.productCard}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productCategory}>{product.category}</Text>
              <Text style={styles.productPrice}>₱{product.price.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  menuButton: {
    marginLeft: 16,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  categories: {
    marginBottom: 8,
  },
  categoryButton: {
    backgroundColor: '#dbeafe',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 12,
  },
  categoryText: {
    color: '#1e40af',
    fontWeight: '500',
    fontSize: 14,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  productCategory: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    color: '#1e40af',
    fontWeight: '600',
  },
});
