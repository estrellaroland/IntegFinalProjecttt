import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';
import { useRouter, usePathname } from 'expo-router';
import { Hop as Home, ShoppingBag, ShoppingCart, Heart, User, Info, Code } from 'lucide-react-native';

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  const router = useRouter();
  const pathname = usePathname();

  const moduleItems = [
    { label: 'Home', icon: Home, route: '/(drawer)/(tabs)' },
    { label: 'Shop', icon: ShoppingBag, route: '/(drawer)/(tabs)/shop' },
    { label: 'Cart', icon: ShoppingCart, route: '/(drawer)/(tabs)/cart' },
    { label: 'Wishlist', icon: Heart, route: '/(drawer)/(tabs)/wishlist' },
    { label: 'Profile', icon: User, route: '/(drawer)/(tabs)/profile' },
  ];

  const infoItems = [
    { label: 'About the App', icon: Info, route: '/(drawer)/about' },
    { label: 'Developers', icon: Code, route: '/(drawer)/developers' },
  ];

  const isActive = (route: string) => {
    if (route === '/(drawer)/(tabs)') {
      return pathname === '/' || pathname === '/(drawer)/(tabs)';
    }
    return pathname.includes(route);
  };

  const handleNavigation = (route: string) => {
    router.push(route as any);
    props.navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoPlaceholder}>
          <Text style={styles.logoText}>SP</Text>
        </View>
        <Text style={styles.appName}>Salty Pinoy</Text>
        <Text style={styles.appTagline}>Authentic Philippine Flavors</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>MODULES</Text>
        {moduleItems.map((item, index) => {
          const Icon = item.icon;
          const active = isActive(item.route);
          return (
            <TouchableOpacity
              key={index}
              style={[styles.menuItem, active && styles.menuItemActive]}
              onPress={() => handleNavigation(item.route)}>
              <Icon size={22} color={active ? '#1e40af' : '#6b7280'} />
              <Text style={[styles.menuItemText, active && styles.menuItemTextActive]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>INFORMATION</Text>
        {infoItems.map((item, index) => {
          const Icon = item.icon;
          const active = isActive(item.route);
          return (
            <TouchableOpacity
              key={index}
              style={[styles.menuItem, active && styles.menuItemActive]}
              onPress={() => handleNavigation(item.route)}>
              <Icon size={22} color={active ? '#1e40af' : '#6b7280'} />
              <Text style={[styles.menuItemText, active && styles.menuItemTextActive]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Version 1.0.0</Text>
        <Text style={styles.footerText}>Made with ❤️ in the Philippines</Text>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 24,
    backgroundColor: '#1e40af',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#1e3a8a',
  },
  logoPlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#3b82f6',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#dbeafe',
  },
  logoText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
  },
  appName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  appTagline: {
    fontSize: 14,
    color: '#dbeafe',
  },
  section: {
    paddingTop: 16,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9ca3af',
    paddingHorizontal: 20,
    paddingVertical: 8,
    letterSpacing: 0.5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 12,
    borderRadius: 8,
  },
  menuItemActive: {
    backgroundColor: '#dbeafe',
  },
  menuItemText: {
    fontSize: 16,
    color: '#4b5563',
    marginLeft: 16,
  },
  menuItemTextActive: {
    color: '#1e40af',
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 12,
    marginHorizontal: 20,
  },
  footer: {
    padding: 20,
    marginTop: 'auto',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#9ca3af',
    textAlign: 'center',
    marginBottom: 4,
  },
});
