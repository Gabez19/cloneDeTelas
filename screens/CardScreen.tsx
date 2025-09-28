import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import DemoNavBar from '../components/DemoNavBar';
import { ScreenName } from '../navigation/AppNavigator';

const CardScreen: React.FC = () => {
    const route = useRoute();
    const currentRouteName = route.name as ScreenName;

    return (
        <View style={styles.appContainer}>
            <ScrollView contentContainerStyle={styles.content}>
                {/* Botão de Fechar (X) - Agora apenas visual, a navegação é pela NavBar */}
                <View style={styles.closeButtonContainer}>
                    <MaterialIcons name="close" size={24} color="#333" />
                </View>

                {/* Imagem do Cartão */}
                <View style={styles.imageBox}>
                    <View style={styles.tagGratis}>
                        <Text style={styles.tagGratisText}>GRÁTIS</Text>
                    </View>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/300x180?text=GRATIS+VISA+CARD' }}
                        style={styles.cardImage}
                    />
                </View>

                {/* Título e Subtítulo */}
                <Text style={styles.title}>
                    Peça seu Cartão de Crédito Mercado Pago e aproveite essas <Text style={{fontWeight: 'bold'}}>vantagens exclusivas:</Text>
                </Text>

                {/* Lista de Vantagens */}
                <View style={styles.advantageItem}>
                    <Text style={styles.advantageText}>
                        • Parcele suas compras em até <Text style={{fontWeight: 'bold'}}>18x sem juros</Text> no Mercado Livre
                    </Text>
                </View>
                <View style={styles.advantageItem}>
                    <Text style={styles.advantageText}>
                        • <Text style={{fontWeight: 'bold'}}>Anuidade Grátis</Text>
                    </Text>
                </View>

                <View style={styles.separator} />

                {/* Segurança e Controle */}
                <Text style={styles.securityText}>
                    ~Segurança e controle: acompanhe seus gastos pelo App, garantindo controle de todas suas transações.
                </Text>
                
                {/* Botão "Peça já" (Agora faz parte do conteúdo rolável) */}
                <TouchableOpacity style={styles.contentButton}>
                    <Text style={styles.contentButtonText}>Peça já</Text>
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
  closeButtonContainer: { alignItems: 'flex-end', padding: 15, },
  content: { paddingHorizontal: 30, alignItems: 'center', paddingBottom: 100 },
  imageBox: { alignItems: 'center', marginBottom: 40 },
  tagGratis: { position: 'absolute', top: -20, zIndex: 1, backgroundColor: 'white', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 15, borderWidth: 1, borderColor: '#333' },
  tagGratisText: { fontWeight: 'bold', fontSize: 12 },
  cardImage: { width: 280, height: 180, resizeMode: 'contain' },
  title: { fontSize: 16, textAlign: 'center', marginBottom: 30, lineHeight: 24 },
  advantageItem: { width: '100%', marginBottom: 10 },
  advantageText: { fontSize: 15, lineHeight: 22 },
  separator: { height: 1, backgroundColor: '#eee', width: '100%', marginVertical: 20 },
  securityText: { fontSize: 15, color: '#666', lineHeight: 22, textAlign: 'center' },
  contentButton: {
    marginTop: 30,
    width: '100%',
    padding: 20,
    backgroundColor: '#3877F9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  contentButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});

export default CardScreen;