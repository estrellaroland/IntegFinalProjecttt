import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { Menu, X } from 'lucide-react-native';
import { useEffect } from 'react';

const wishlistItems = [
  { id: 1, name: 'Ilocos Sea Salt', price: 320, inStock: true },
  { id: 2, name: 'Bagoong Balayan', price: 280, inStock: true },
  { id: 3, name: 'Pink Himalayan Salt', price: 450, inStock: false },
];

export default function WishlistScreen() {
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
        {wishlistItems.length === 0 ? (
          <View style={styles.emptyWishlist}>
            <Text style={styles.emptyWishlistText}>Your wishlist is empty</Text>
          </View>
        ) : (
          <>
            <Text style={styles.sectionTitle}>Saved Items ({wishlistItems.length})</Text>
            {wishlistItems.map((item) => (
              <View key={item.id} style={styles.wishlistItem}>
                <View style={styles.itemImagePlaceholder} />
                <View style={styles.itemInfo}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>₱{item.price.toFixed(2)}</Text>
                  <Text style={[styles.stockStatus, item.inStock ? styles.inStock : styles.outOfStock]}>
                    {item.inStock ? 'In Stock' : 'Out of Stock'}
                  </Text>
                </View>
                <View style={styles.actions}>
                  <TouchableOpacity style={styles.removeButton}>
                    <X size={20} color="#6b7280" />
                  </TouchableOpacity>
                  {item.inStock && (
                    <TouchableOpacity style={styles.addToCartButton}>
                      <Text style={styles.addToCartText}>Add to Cart</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            ))}
          </>
        )}
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
  emptyWishlist: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyWishlistText: {
    fontSize: 18,
    color: '#6b7280',
  },
  wishlistItem: {
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
  itemImagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#e5e7eb',
    borderRadius: 8,
    marginRight: 16,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    color: '#1e40af',
    marginBottom: 4,
    fontWeight: '500',
  },
  stockStatus: {
    fontSize: 14,
  },
  inStock: {
    color: '#10b981',
  },
  outOfStock: {
    color: '#ef4444',
  },
  actions: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  removeButton: {
    padding: 4,
  },
  addToCartButton: {
    backgroundColor: '#1e40af',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});
