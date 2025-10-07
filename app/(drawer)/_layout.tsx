import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CustomDrawerContent } from '@/components/CustomDrawerContent';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: true,
          drawerType: 'slide',
          headerStyle: {
            backgroundColor: '#1e40af',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '600',
          },
        }}>
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Main',
            title: 'Salty Pinoy',
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="about"
          options={{
            drawerLabel: 'About',
            title: 'About the App',
          }}
        />
        <Drawer.Screen
          name="developers"
          options={{
            drawerLabel: 'Developers',
            title: 'Developers',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
