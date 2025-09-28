import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import DemoNavBar from '../components/DemoNavBar';
import { ScreenName } from '../navigation/AppNavigator';

// --- Interface e Dados Mock para os Itens do Menu ---
interface MenuItemProps {
  icon: keyof typeof Ionicons.glyphMap | keyof typeof MaterialIcons.glyphMap | keyof typeof FontAwesome5.glyphMap;
  iconSet: 'Ionicons' | 'MaterialIcons' | 'FontAwesome5';
  text: string;
  isNew?: boolean;
}

const menuItems: MenuItemProps[] = [
  { icon: 'hand-holding-usd', iconSet: 'FontAwesome5', text: 'Entrega mais segura!', isNew: true },
  { icon: 'chatbox-outline', iconSet: 'Ionicons', text: 'Conversas' },
  { icon: 'notifications-outline', iconSet: 'Ionicons', text: 'Notificações' },
  { icon: 'person-outline', iconSet: 'Ionicons', text: 'Dados da conta' },
  { icon: 'card-outline', iconSet: 'Ionicons', text: 'Pagamentos', isNew: true },
  { icon: 'ticket-outline', iconSet: 'Ionicons', text: 'Clube iFood' },
  { icon: 'bookmark-outline', iconSet: 'Ionicons', text: 'Cupons' },
  { icon: 'people-outline', iconSet: 'Ionicons', text: 'Comunidade iFood', isNew: true },
];

const MenuItem: React.FC<MenuItemProps> = ({ icon, iconSet, text, isNew }) => {
    let IconComponent: any;
    switch (iconSet) {
        case 'Ionicons': IconComponent = Ionicons; break;
        case 'MaterialIcons': IconComponent = MaterialIcons; break;
        case 'FontAwesome5': IconComponent = FontAwesome5; break;
        default: IconComponent = Ionicons;
    }

    return (
        <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
                <IconComponent name={icon} size={20} color="#333" style={styles.menuIcon} />
                <Text style={styles.menuText}>{text}</Text>
            </View>
            <View style={styles.menuItemRight}>
                {isNew && (
                    <View style={styles.tagNovo}>
                        <Text style={styles.tagNovoText}>NOVO</Text>
                    </View>
                )}
                <MaterialIcons name="chevron-right" size={24} color="#C4C4C4" />
            </View>
        </TouchableOpacity>
    );
};


const ProfileScreen: React.FC = () => {
    const route = useRoute();
    const currentRouteName = route.name as ScreenName;

    return (
        <View style={styles.appContainer}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Cabeçalho */}
                <View style={styles.header}>
                    <View style={styles.profilePicPlaceholder}>
                        <Text style={styles.initials}>DR</Text>
                    </View>
                    <View style={styles.profileInfo}>
                        <Text style={styles.profileName}>Diego Rodrigues</Text>
                        <TouchableOpacity style={styles.addButton}>
                            <Text style={styles.addText}>Adicionar telefone de acesso</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                {/* Renderiza os Itens de Menu */}
                <Text style={styles.sectionTitle}>Conversas</Text>
                <MenuItem {...menuItems[1]} /> 
                <MenuItem {...menuItems[2]} />
                
                <Text style={styles.sectionTitle}>Dados da conta</Text>
                {menuItems.slice(3, 4).map((item, index) => <MenuItem key={index} {...item} />)}

                <Text style={styles.sectionTitle}>Pagamentos</Text>
                {menuItems.slice(4, 5).map((item, index) => <MenuItem key={index} {...item} />)}

                <Text style={styles.sectionTitle}>Cupons e vantagens</Text>
                {menuItems.slice(5, 7).map((item, index) => <MenuItem key={index} {...item} />)}
                
                <Text style={styles.sectionTitle}>Comunidade</Text>
                {menuItems.slice(7, 8).map((item, index) => <MenuItem key={index} {...item} />)}
                
                <TouchableOpacity style={styles.menuItem}>
                    <Ionicons name="barcode-outline" size={20} color="#333" style={styles.menuIcon} />
                    <Text style={styles.menuText}>Código de entrega</Text>
                </TouchableOpacity>

            </ScrollView>

            {/* BARRA DE NAVEGAÇÃO FIXA */}
            <DemoNavBar currentRouteName={currentRouteName} />
        </View>
    );
};

// --- Estilos ---
const styles = StyleSheet.create({
  appContainer: { flex: 1, backgroundColor: '#fff', paddingTop: Platform.OS === 'android' ? 30 : 0 },
  scrollContent: { paddingBottom: 20 },
  header: { flexDirection: 'row', alignItems: 'center', padding: 20, paddingTop: 20, borderBottomWidth: 1, borderBottomColor: '#eee', marginBottom: 20 },
  profilePicPlaceholder: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#F3C4C8', justifyContent: 'center', alignItems: 'center' },
  initials: { color: '#8B0000', fontSize: 20, fontWeight: 'bold' },
  profileInfo: { marginLeft: 15 },
  profileName: { fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
  addButton: { borderBottomWidth: 1, borderBottomColor: '#F3C4C8', paddingBottom: 2 },
  addText: { color: '#F3C4C8', fontSize: 14 },
  sectionTitle: { fontSize: 12, color: '#666', paddingHorizontal: 20, marginTop: 15, marginBottom: 5 },
  menuItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#f5f5f5' },
  menuItemLeft: { flexDirection: 'row', alignItems: 'center' },
  menuIcon: { width: 30 },
  menuText: { fontSize: 16, color: '#333' },
  menuItemRight: { flexDirection: 'row', alignItems: 'center' },
  tagNovo: { backgroundColor: '#F3C4C8', borderRadius: 4, paddingHorizontal: 6, paddingVertical: 2, marginRight: 10 },
  tagNovoText: { color: '#8B0000', fontSize: 10, fontWeight: 'bold' },
});

export default ProfileScreen;