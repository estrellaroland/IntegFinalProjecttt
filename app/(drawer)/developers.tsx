import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Mail, Linkedin, Github } from 'lucide-react-native';

const developers = [
  {
    name: 'Sean Jacob B. Trinidada',
    role: 'Project Lead & Developer',
    email: 'qsjbtrinidad@tip.edu.ph',
    linkedin: 'https://www.linkedin.com/in/sean-jacob-trinidad-762226389/
',
    github: 'https://github.com/seantii',
  },
  {
    name: 'Roland Angelo Estrella',
    role: 'UI/UX Designer & Developer',
    email: 'qraestrella@tip.edu.ph',
    linkedin: 'https://linkedin.com/in/teammate',
    github: 'https://github.com/estrellaroland',
  },
];

export default function DevelopersScreen() {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Development Team</Text>
        <Text style={styles.subtitle}>Meet the team behind Salty Pinoy</Text>

        {developers.map((dev, index) => (
          <View key={index} style={styles.developerCard}>
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarInitial}>{dev.name.charAt(0)}</Text>
            </View>

            <View style={styles.developerInfo}>
              <Text style={styles.developerName}>{dev.name}</Text>
              <Text style={styles.developerRole}>{dev.role}</Text>

              <View style={styles.contactLinks}>
                <TouchableOpacity
                  style={styles.linkButton}
                  onPress={() => openLink(`mailto:${dev.email}`)}
                >
                  <Mail size={20} color="#1e40af" />
                  <Text style={styles.linkText}>Email</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.linkButton}
                  onPress={() => openLink(dev.linkedin)}
                >
                  <Linkedin size={20} color="#1e40af" />
                  <Text style={styles.linkText}>LinkedIn</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.linkButton}
                  onPress={() => openLink(dev.github)}
                >
                  <Github size={20} color="#1e40af" />
                  <Text style={styles.linkText}>GitHub</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Project Information</Text>
          <Text style={styles.cardText}>
            This project was developed as part of Lab Activity 4.2 for the Ionic
            Mobile Ecommerce course. It demonstrates the implementation of a
            side menu navigation system for a mobile ecommerce application
            showcasing authentic Philippine salty products.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Technologies Used</Text>
          <View style={styles.techList}>
            <Text style={styles.techItem}>• React Native & Expo</Text>
            <Text style={styles.techItem}>• Expo Router</Text>
            <Text style={styles.techItem}>
              • React Navigation (Drawer & Tabs)
            </Text>
            <Text style={styles.techItem}>• TypeScript</Text>
            <Text style={styles.techItem}>• Lucide React Native Icons</Text>
          </View>
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
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 24,
  },
  developerCard: {
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
  avatarPlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#1e40af',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 16,
  },
  avatarInitial: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
  },
  developerInfo: {
    alignItems: 'center',
  },
  developerName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  developerRole: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 16,
  },
  contactLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#dbeafe',
    borderRadius: 6,
  },
  linkText: {
    fontSize: 14,
    color: '#1e40af',
    marginLeft: 6,
    fontWeight: '500',
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
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e40af',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 15,
    color: '#4b5563',
    lineHeight: 24,
  },
  techList: {
    marginTop: 8,
  },
  techItem: {
    fontSize: 15,
    color: '#4b5563',
    lineHeight: 24,
    marginBottom: 4,
  },
});
