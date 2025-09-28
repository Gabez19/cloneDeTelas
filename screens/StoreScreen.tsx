import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  ImageSourcePropType,
} from "react-native";
import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import DemoNavBar from "../components/DemoNavBar";
import { ScreenName } from "../navigation/AppNavigator";

const { width } = Dimensions.get("window");

const IMAGEM_BANNER =
  require("../assets/images/banner_bolo.png") as ImageSourcePropType;
const IMAGEM_LOGO =
  require("../assets/images/logo_bolo.jpg") as ImageSourcePropType;
const IMAGEM_PRODUTO_1 =
  require("../assets/images/metade_cenoura_com_cobertura.jpg") as ImageSourcePropType;
const IMAGEM_PRODUTO_2 =
  require("../assets/images/cenoura_com_cobertura.jpg") as ImageSourcePropType;
const IMAGEM_PRODUTO_3 =
  require("../assets/images/formigueiro.jpg") as ImageSourcePropType;
const IMAGEM_PRODUTO_4 =
  require("../assets/images/metade_milho.jpg") as ImageSourcePropType;
const IMAGEM_PRODUTO_5 =
  require("../assets/images/milho.jpg") as ImageSourcePropType;
const IMAGEM_PRODUTO_6 =
  require("../assets/images/mandioca_romeu_e_julieta.jpg") as ImageSourcePropType;

const products = [
  {
    id: "1",
    title: "Metade Cenoura com Cobertura",
    price: "R$ 30,00",
    color: "#B06F4D",
    isHalf: true,
    imageSource: IMAGEM_PRODUTO_1,
  },
  {
    id: "2",
    title: "Bolo Cenoura com cobertura",
    price: "R$ 52,00",
    color: "#4D2C1B",
    imageSource: IMAGEM_PRODUTO_2,
  },
  {
    id: "3",
    title: "Bolo de Formigueiro",
    price: "R$ 34,00",
    color: "#F0E6D8",
    imageSource: IMAGEM_PRODUTO_3,
  },
  {
    id: "4",
    title: "Metade Milho",
    price: "R$ 23,00",
    color: "#FFD966",
    imageSource: IMAGEM_PRODUTO_4,
  },
  {
    id: "5",
    title: "Bolo de Milho",
    price: "R$ 38,00",
    color: "#F3C950",
    imageSource: IMAGEM_PRODUTO_5,
  },
  {
    id: "6",
    title: "Bolo Mandioca Romeu e Julieta",
    price: "R$ 48,00",
    color: "#F9B4A7",
    imageSource: IMAGEM_PRODUTO_6,
  },
];

interface ProductProps {
  title: string;
  price: string;
  color: string;
  isHalf?: boolean;
  imageSource: ImageSourcePropType;
}

// Componente Card de Produto
const ProductCard: React.FC<ProductProps> = ({
  title,
  price,
  color,
  isHalf = false,
  imageSource,
}) => (
  <View style={styles.productCard}>
    <Image source={imageSource} style={styles.image} />
    {isHalf && (
      <View style={styles.tagHalf}>
        <Ionicons name="flame" size={10} color="#fff" />
        <Text style={styles.tagHalfText}>Mais pedido</Text>
      </View>
    )}
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
        {/* 1. Imagem de Destaque (Banner) */}
        <View style={styles.bannerContainer}>
          <Image source={IMAGEM_BANNER} style={styles.bannerImage} />
          {/* Fundo Amarelo para preencher laterais */}
          <View style={styles.bannerBackground} />
          {/* Botões do Topo (Voltar e Favoritar) */}
          <View style={styles.headerIconsRow}>
            <TouchableOpacity style={styles.iconButton}>
              <View style={styles.iconCircle}>
                <Ionicons name="arrow-back" size={24} color="#fff" />
              </View>
            </TouchableOpacity>
            <View style={styles.headerIconsRight}>
              <TouchableOpacity style={styles.iconButton}>
                <View style={styles.iconCircle}>
                  <Ionicons name="heart-outline" size={24} color="#fff" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <View style={styles.iconCircle}>
                  <Ionicons name="search" size={24} color="#fff" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* 2. Informações da Loja (O Card Branco sobreposto) */}
        <View style={styles.storeCardContainer}>
          {/* Logo da Loja - POSICIONADA NO CENTRO */}
          <Image source={IMAGEM_LOGO} style={styles.storeLogo} />
          <View style={styles.storeInfoContainer}>
            <Text style={styles.storeName}>Bolos do Flávio - Águas Claras</Text>
            {/* Detalhes da Loja (1ª Linha) */}
            <View style={styles.storeDetails}>
              <Text style={styles.detailText}>
                Entrega rastreável • 1.0 km • Mín R$ 20,00
              </Text>
              <TouchableOpacity>
                <MaterialIcons name="chevron-right" size={24} color="#C4C4C4" />
              </TouchableOpacity>
            </View>
            {/* Avaliação (2ª Linha) */}
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={16} color="#FFC700" />
              <Text style={styles.ratingText}>4.9 (1,1 mil avaliações)</Text>
              <Text style={styles.ratingDot}>•</Text>
              <FontAwesome5 name="medal" size={16} color="#3877F9" />
              <Text style={styles.ratingText}>Nível 4 de 5</Text>
              <TouchableOpacity style={styles.ratingArrow}>
                <MaterialIcons name="chevron-right" size={24} color="#C4C4C4" />
              </TouchableOpacity>
            </View>
            {/* Linha de Entrega (agora dentro do card) */}
            <View style={styles.deliveryRow}>
              <MaterialCommunityIcons name="motorbike" size={20} color="#000" />
              <Text style={styles.deliveryTextBold}>Entrega</Text>
              <Text style={styles.deliveryText}>Hoje, 35-45 min</Text>
              <View style={styles.tagGratis}>
                <Text style={styles.tagGratisText}>Grátis</Text>
              </View>
              <TouchableOpacity>
                <MaterialIcons name="chevron-right" size={24} color="#C4C4C4" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.separator} />
        {/* Destaques (Produtos) */}
        <Text style={styles.sectionTitle}>Destaques</Text>
        <View style={styles.productsGrid}>
          {products.slice(0, 2).map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </View>
        <View style={styles.productsGrid}>
          {products.slice(2, 4).map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </View>
        <View style={styles.productsGrid}>
          {products.slice(4, 6).map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </View>
        {/* Footer de Cupom */}
        <View style={styles.couponFooterContainer}>
          <TouchableOpacity style={styles.couponFooter}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="ticket" size={14} color="#773EAA" />
              <Text style={[styles.couponText, { marginLeft: 5 }]}>
                R$ 50 em cupons aqui
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* BARRA DE NAVEGAÇÃO FIXA */}
      <DemoNavBar currentRouteName={currentRouteName} />
    </View>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 0 : 0,
  },
  scrollContent: { paddingBottom: 20 },
  bannerContainer: {
    height: 250,
    width: "100%",
    position: "relative",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  bannerBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#FFD700",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    zIndex: 2,
  },
  headerIconsRow: {
    position: "absolute",
    top: Platform.OS === "android" ? 30 : 60, // <-- Ajuste aqui!
    left: 10,
    right: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 10,
  },
  headerIconsRight: { flexDirection: "row" },
  iconButton: { padding: 5, borderRadius: 20, marginHorizontal: 5 },
  iconCircle: {
    backgroundColor: "#222",
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  storeCardContainer: {
    marginTop: -70,
    marginHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 8,
    paddingBottom: 0,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: { elevation: 3 },
    }),
    zIndex: 1,
    position: "relative",
    alignItems: "center",
  },
  storeLogo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "white",
    position: "absolute",
    top: -30,
    zIndex: 5,
    backgroundColor: "#f5f5f5",
  },
  storeInfoContainer: {
    padding: 15,
    paddingBottom: 10,
    paddingTop: 40,
    width: "100%",
    alignItems: "flex-start",
  },
  storeName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5,
    alignSelf: "center",
  },
  storeDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  detailText: { color: "#888", fontSize: 13 },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    paddingBottom: 12,
    width: "100%",
  },
  ratingText: { marginLeft: 4, fontSize: 13, color: "#333" },
  ratingDot: { marginHorizontal: 8, color: "#ccc" },
  ratingArrow: { position: "absolute", right: 0 },
  deliveryRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "white",
    justifyContent: "flex-start",
    marginTop: 8,
  },
  deliveryTextBold: { fontWeight: "bold", marginLeft: 8 },
  deliveryText: { marginLeft: 10, color: "#444" },
  tagGratis: {
    backgroundColor: "#E6F0F2",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 10,
  },
  tagGratisText: { color: "#007A8D", fontSize: 12, fontWeight: "bold" },
  separator: { height: 8, backgroundColor: "#f5f5f5" },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  productsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  productCard: { flex: 1, marginHorizontal: 5, position: "relative" },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 5,
    resizeMode: "cover",
  },
  productPrice: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 5,
    color: "#333",
  },
  productTitle: { color: "#666", fontSize: 12 },

  tagHalf: {
    position: "absolute",
    top: 5,
    left: 5,
    backgroundColor: "rgba(0,0,0,0.6)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    zIndex: 1,
  },
  tagHalfText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
    marginLeft: 3,
  },
  couponFooterContainer: { paddingHorizontal: 15, marginTop: 10 },
  couponFooter: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#773EAA",
  },
  couponText: { color: "#773EAA", fontWeight: "bold" },
});

export default StoreScreen;