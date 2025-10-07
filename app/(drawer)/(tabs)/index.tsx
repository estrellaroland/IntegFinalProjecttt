import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { Menu } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect } from 'react';

export default function HomeScreen() {
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
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Welcome to Pinoy Snacks</Text>
        <Text style={styles.heroSubtitle}>
          Authentic Filipino Snacks & Treats
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Products</Text>

        <View style={styles.productCard}>
          <View style={styles.productImagePlaceholder} />
          <Text style={styles.productName}>Ding Dong</Text>
          <Text style={styles.productPrice}>₱45.00</Text>
        </View>

        <View style={styles.productCard}>
          <View style={styles.productImagePlaceholder} />
          <Text style={styles.productName}>Boy Bawang Cornick</Text>
          <Text style={styles.productPrice}>₱35.00</Text>
        </View>

        <View style={styles.productCard}>
          <View style={styles.productImagePlaceholder} />
          <Text style={styles.productName}>Salted Egg Chips</Text>
          <Text style={styles.productPrice}>₱85.00</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Choose Pinoy Snacks?</Text>
        <Text style={styles.description}>
          We bring you authentic Filipino snacks loved by generations. From crispy chips to sweet treats,
          every product captures the unique flavors of the Philippines.
        </Text>
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
  hero: {
    backgroundColor: '#1e40af',
    padding: 32,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#dbeafe',
    textAlign: 'center',
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
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImagePlaceholder: {
    width: '100%',
    height: 150,
    backgroundColor: '#e5e7eb',
    borderRadius: 8,
    marginBottom: 12,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: '#1e40af',
    fontWeight: '500',
  },
  description: {
    fontSize: 15,
    color: '#4b5563',
    lineHeight: 24,
  },
});
