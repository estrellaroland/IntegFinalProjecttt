import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>About Salty Pinoy</Text>

        <View style={styles.card}>
          <Text style={styles.description}>
            Salty Pinoy is a dedicated ecommerce platform that brings the rich, savory flavors of the
            Philippines directly to you. We partner with local communities to offer authentic,
            high-quality salty products like bagoong, patis, and artisanal salts, supporting local
            producers and preserving culinary heritage.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Our Mission</Text>
          <Text style={styles.description}>
            To connect local Filipino producers with customers worldwide, celebrating traditional
            food craftsmanship while supporting sustainable livelihoods in Philippine communities.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Our Products</Text>
          <Text style={styles.description}>
            We specialize in authentic salty products including:
          </Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>• Bagoong (Fermented Shrimp Paste)</Text>
            <Text style={styles.bulletItem}>• Patis (Fish Sauce)</Text>
            <Text style={styles.bulletItem}>• Premium Sea Salts from Different Regions</Text>
            <Text style={styles.bulletItem}>• Traditional Filipino Savory Delicacies</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Why Choose Us?</Text>
          <Text style={styles.description}>
            Every purchase supports local producers and helps preserve Filipino culinary traditions.
            We ensure authenticity, quality, and fair trade practices in every product we offer.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  section: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1e40af',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#4b5563',
    lineHeight: 24,
  },
  bulletList: {
    marginTop: 12,
  },
  bulletItem: {
    fontSize: 15,
    color: '#4b5563',
    lineHeight: 24,
    marginBottom: 4,
  },
});
