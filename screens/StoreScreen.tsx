import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import DemoNavBar from '../components/DemoNavBar';
import { ScreenName } from '../navigation/AppNavigator';

const { width } = Dimensions.get('window');
const cardWidth = width / 2 - 30;

// --- Dados Mock e Componente Reutilizável de Card ---
const products = [
  { id: '1', title: 'Metade Cenoura com Cobertura', price: 'R$ 30,00', color: '#B06F4D', isHalf: true },
  { id: '2', title: 'Bolo Cenoura com cobertura', price: 'R$ 52,00', color: '#4D2C1B' },
  { id: '3', title: 'Bolo de Formigueiro', price: 'R$ 34,00', color: '#F0E6D8' },
  { id: '4', title: 'Metade Milho', price: 'R$ 23,00', color: '#FFD966' },
  { id: '5', title: 'Bolo de Milho', price: 'R$ 38,00', color: '#F3C950' },
  { id: '6', title: 'Bolo Mandioca Romeu e Julieta', price: 'R$ 48,00', color: '#F9B4A7' },
];

interface ProductProps {
    title: string;
    price: string;
    color: string;
    isHalf?: boolean;
}

const ProductCard: React.FC<ProductProps> = ({ title, price, color, isHalf = false }) => (
  <View style={styles.productCard}>
    <View style={[styles.imagePlaceholder, { backgroundColor: color }]}>
        {isHalf && <Text style={styles.tagHalf}>Mais pedido</Text>}
    </View>
    <Text style={styles.productPrice}>{price}</Text>
    <Text style={styles.productTitle}>{title}</Text>
  </View>
);

// --- Tela Principal ---
const StoreScreen: React.FC = () => {
    const route = useRoute();
    const currentRouteName = route.name as ScreenName;

    return (
        <View style={styles.appContainer}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Imagem de Destaque com o Título */}
                <View style={styles.headerImageContainer}>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/600x200?text=100%25+CASEIRO' }}
                        style={styles.headerImage}
                    />
                    <View style={styles.headerOverlay}>
                        <Text style={styles.headerTag}>100% CASEIRO</Text>
                        <Text style={styles.headerTag}>100% ARRETADO</Text>
                    </View>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="heart-outline" size={24} color="white" />
                    </TouchableOpacity>
                </View>

                {/* Informações da Loja */}
                <View style={styles.storeInfoContainer}>
                    <Text style={styles.storeName}>Bolos do Flávio - Águas Claras</Text>
                    <View style={styles.storeDetails}>
                        <Text style={styles.detailText}>Entrega rastreável • 1.0 km • Mín R$ 20,00</Text>
                        <TouchableOpacity><MaterialIcons name="chevron-right" size={24} color="#C4C4C4" /></TouchableOpacity>
                    </View>
                    <View style={styles.ratingRow}>
                        <Ionicons name="star" size={16} color="#FFC700" />
                        <Text style={styles.ratingText}>4.9 (1,1 mil avaliações)</Text>
                        <Text style={styles.ratingDot}>•</Text>
                        <MaterialIcons name="verified-user" size={16} color="#3877F9" />
                        <Text style={styles.ratingText}>Nível 4 de 5</Text>
                    </View>
                </View>

                {/* Linha de Entrega */}
                <View style={styles.deliveryRow}>
                    <MaterialCommunityIcons name="motorbike" size={20} color="#000" />
                    <Text style={styles.deliveryTextBold}>Entrega</Text>
                    <Text style={styles.deliveryText}>Hoje, 35-45 min</Text>
                    <View style={styles.tagGratis}><Text style={styles.tagGratisText}>Grátis</Text></View>
                    <TouchableOpacity><MaterialIcons name="chevron-right" size={24} color="#C4C4C4" /></TouchableOpacity>
                </View>
                
                <View style={styles.separator} />

                {/* Destaques (Mockup) */}
                <Text style={styles.sectionTitle}>Destaques</Text>
                <View style={styles.productsGrid}>
                    {products.slice(0, 2).map(p => <ProductCard key={p.id} {...p} />)}
                </View>
                <View style={styles.productsGrid}>
                    {products.slice(2, 4).map(p => <ProductCard key={p.id} {...p} />)}
                </View>
                <View style={styles.productsGrid}>
                    {products.slice(4, 6).map(p => <ProductCard key={p.id} {...p} />)}
                </View>

                {/* Rodapé de Cupons */}
                <View style={styles.couponFooter}>
                    <Text style={styles.couponText}>
                        <Ionicons name="ticket" size={14} color="#773EAA" /> R$ 50 em cupons aqui
                    </Text>
                </View>
            </ScrollView>

            {/* BARRA DE NAVEGAÇÃO FIXA */}
            <DemoNavBar currentRouteName={currentRouteName} />
        </View>
    );
};

// --- Estilos ---
const styles = StyleSheet.create({
  appContainer: { flex: 1, backgroundColor: '#fff', paddingTop: Platform.OS === 'android' ? 30 : 0 },
  scrollContent: { paddingBottom: 20 }, // Espaçamento inferior para compensar a NavBar
  headerImageContainer: { height: 180, width: '100%', justifyContent: 'center', alignItems: 'center' },
  headerImage: { ...StyleSheet.absoluteFillObject, resizeMode: 'cover' },
  headerOverlay: { position: 'absolute', left: 15, bottom: 20 },
  headerTag: { backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, fontWeight: 'bold', marginBottom: 4, fontSize: 12 },
  iconButton: { position: 'absolute', top: 50, right: 15, padding: 5, borderRadius: 20 },
  storeInfoContainer: { padding: 15 },
  storeName: { fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
  storeDetails: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  detailText: { color: '#888', fontSize: 13 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  ratingText: { marginLeft: 4, fontSize: 13, color: '#333' },
  ratingDot: { marginHorizontal: 8, color: '#ccc' },
  deliveryRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  deliveryTextBold: { fontWeight: 'bold', marginLeft: 8 },
  deliveryText: { marginLeft: 10, color: '#444' },
  tagGratis: { backgroundColor: '#E6F0F2', borderRadius: 4, paddingHorizontal: 6, paddingVertical: 2, marginLeft: 10 },
  tagGratisText: { color: '#007A8D', fontSize: 12, fontWeight: 'bold' },
  separator: { height: 8, backgroundColor: '#f5f5f5' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', paddingHorizontal: 15, marginTop: 10, marginBottom: 10 },
  productsGrid: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, marginBottom: 10 },
  productCard: { flex: 1, marginHorizontal: 5 },
  imagePlaceholder: { width: '100%', height: 120, borderRadius: 8, marginBottom: 5, justifyContent: 'flex-start', alignItems: 'flex-start' },
  tagHalf: { backgroundColor: '#D13200', color: 'white', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4, fontSize: 10, fontWeight: 'bold', margin: 5 },
  productPrice: { fontWeight: 'bold', fontSize: 14, marginTop: 5 },
  productTitle: { color: '#666', fontSize: 12 },
  couponFooter: { marginTop: 20, padding: 15, backgroundColor: '#F3E5F5', alignItems: 'center' },
  couponText: { color: '#773EAA', fontWeight: 'bold' },
});

export default StoreScreen;