import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Platform, ImageSourcePropType } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import DemoNavBar from '../components/DemoNavBar';
import { ScreenName } from '../navigation/AppNavigator';

const IMAGEM_CARTAO = require('../assets/images/mercado_pago_card.png') as ImageSourcePropType;

const CardScreen: React.FC = () => {
  const route = useRoute();
  const currentRouteName = route.name as ScreenName;

  return (
    <View style={styles.appContainer}>
      {/* Botão de Fechar (X) */}
      <TouchableOpacity style={styles.closeButtonContainer}>
        <MaterialIcons name="close" size={24} color="#333" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Imagem do Cartão */}
        <View style={styles.imageBox}>
          <Image
            source={IMAGEM_CARTAO}
            style={styles.cardImage}
          />
        </View>

        {/* Título e Subtítulo */}
        <Text style={styles.title}>
          Peça seu Cartão de Crédito Mercado Pago e aproveite essas <Text style={{ fontWeight: 'bold' }}>vantagens exclusivas:</Text>✨
        </Text>

        {/* Lista de Vantagens */}
        <View style={styles.advantageItem}>
          <Text style={styles.advantageText}>
            - Parcele suas compras em até <Text style={{ fontWeight: 'bold' }}>18x sem juros</Text> no Mercado Livre
          </Text>
        </View>
        <View style={styles.advantageItem}>
          <Text style={styles.advantageText}>
            - <Text style={{ fontWeight: 'bold' }}>Anuidade Grátis</Text>
          </Text>
        </View>

        {/* Segurança e Controle */}
        <Text style={styles.securityText}>
          <Text style={{ fontWeight: 'bold' }}>Segurança e controle:</Text> acompanhe seus gastos pelo App, garantindo controle de todas suas transações.
        </Text>
      </ScrollView>

      {/* Botão fixo acima da navbar */}
      <View style={styles.footerButtonContainer}>
        <TouchableOpacity style={styles.contentButton}>
          <Text style={styles.contentButtonText}>Peça já</Text>
        </TouchableOpacity>
      </View>

      {/* BARRA DE NAVEGAÇÃO FIXA */}
      <DemoNavBar currentRouteName={currentRouteName} />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  closeButtonContainer: {
    alignItems: 'flex-end',
    padding: 15,
    position: 'absolute',
    top: Platform.OS === 'android' ? 30 : 20,
    right: 0,
    zIndex: 10,
  },
  content: {
    paddingHorizontal: 30,
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 120,
  },
  imageBox: {
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
    justifyContent: 'center',
  },
  cardImage: { width: 220, height: 140, resizeMode: 'contain' },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
    marginTop: 10,
  },
  advantageItem: { width: '100%', marginBottom: 10 },
  advantageText: { fontSize: 15, lineHeight: 22 },
  securityText: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 20,
  },
  footerButtonContainer: {
    position: 'absolute',
    bottom: 70, // Espaço acima da navbar
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
  contentButton: {
    width: '90%',
    padding: 18,
    backgroundColor: '#3877F9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  contentButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});

export default CardScreen;