import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { MaterialIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import DemoNavBar from "../components/DemoNavBar";
import { ScreenName } from "../navigation/AppNavigator";

const ProfileScreen: React.FC = () => {
  const route = useRoute();
  const currentRouteName = route.name as ScreenName;

  return (
    <View style={styles.appContainer}>
      {/* Botão editar perfil */}
      <TouchableOpacity style={styles.editButton}>
        <Ionicons name="qr-code-outline" size={22} color="#F3123C" />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <View style={styles.profilePicPlaceholder}>
            <Text style={styles.initials}>DR</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Diego Rodrigues</Text>
            <TouchableOpacity style={styles.addButton}>
              <Ionicons
                name="call-outline"
                size={16}
                color="#F3123C"
                style={{ marginRight: 4 }}
              />
              <Text style={styles.addText}>Adicionar telefone de acesso</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Card Entrega mais segura */}
        <View style={styles.safeDeliveryCard}>
          <View style={styles.safeDeliveryIconBox}>
            <FontAwesome5 name="hand-holding-usd" size={22} color="#F3123C" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.safeDeliveryTitle}>Entrega mais segura!</Text>
            <Text style={styles.safeDeliverySubtitle}>
              Agora dá pra inserir o código de entrega. Vem ver!
            </Text>
          </View>
          <View style={styles.tagNovo}>
            <Text style={styles.tagNovoText}>NOVO</Text>
          </View>
        </View>

        {/* Menus */}
        <View style={styles.menuSection}>
          <MenuItem
            icon={<Ionicons name="chatbox-outline" size={22} color="#222" />}
            title="Conversas"
            subtitle="Meu histórico de conversas"
            badge="1"
          />
          <MenuItem
            icon={
              <Ionicons name="notifications-outline" size={22} color="#222" />
            }
            title="Notificações"
            subtitle="Minha central de notificações"
            badge="2"
          />
        </View>

        <View style={styles.menuSection}>
          <MenuItem
            icon={<Ionicons name="person-outline" size={22} color="#222" />}
            title="Dados da conta"
            subtitle="Minhas informações da conta"
            badge="!"
          />
        </View>

        <View style={styles.menuSection}>
          <MenuItem
            icon={<Ionicons name="card-outline" size={22} color="#222" />}
            title="Pagamentos"
            subtitle="Meus saldos e cartões"
            tagNovo
          />
        </View>

        <View style={styles.menuSection}>
          <MenuItem
            icon={<Ionicons name="ticket-outline" size={22} color="#222" />}
            title="Clube iFood"
            subtitle="Meus benefícios exclusivos"
          />
          <MenuItem
            icon={<Ionicons name="bookmark-outline" size={22} color="#222" />}
            title="Cupons"
            subtitle="Meus cupons de desconto"
          />
        </View>

        <View style={styles.menuSection}>
          <MenuItem
            icon={<Ionicons name="people-outline" size={22} color="#222" />}
            title="Comunidade iFood"
            subtitle="Junte-se a nós"
            tagNovo
          />
        </View>

        <View style={styles.menuSection}>
          <MenuItem
            icon={<Ionicons name="barcode-outline" size={22} color="#222" />}
            title="Código de entrega"
            subtitle=""
          />
        </View>
      </ScrollView>

      {/* Barra fixa acima da navbar */}
      <View style={styles.fixedBarContainer}>
        <View style={styles.fixedBarRow}>
          <View style={styles.fixedBarItem}>
            <Ionicons name="home-outline" size={26} color="#222" />
            <Text style={styles.fixedBarLabel}>Início</Text>
          </View>
          <View style={styles.fixedBarItem}>
            <Ionicons name="search-outline" size={26} color="#222" />
            <Text style={styles.fixedBarLabel}>Busca</Text>
          </View>
          <View style={styles.fixedBarItem}>
            <Ionicons name="reader-outline" size={26} color="#222" />
            <Text style={styles.fixedBarLabel}>Pedidos</Text>
          </View>
          <View style={styles.fixedBarItem}>
            <View>
              <Ionicons name="person" size={26} color="#222" />
              <View style={styles.fixedBarBadge}>
                <Text style={styles.fixedBarBadgeText}>!</Text>
              </View>
            </View>
            <Text style={styles.fixedBarLabel}>Perfil</Text>
          </View>
        </View>
      </View>

      <DemoNavBar currentRouteName={currentRouteName} />
    </View>
  );
};

// Componente de item de menu
const MenuItem = ({
  icon,
  title,
  subtitle,
  badge,
  tagNovo,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  badge?: string;
  tagNovo?: boolean;
}) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuItemLeft}>
      {icon}
      <View>
        <Text style={styles.menuText}>{title}</Text>
        {!!subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
      </View>
    </View>
    <View style={styles.menuItemRight}>
      {badge && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      )}
      {tagNovo && (
        <View style={styles.tagNovo}>
          <Text style={styles.tagNovoText}>NOVO</Text>
        </View>
      )}
      <MaterialIcons name="chevron-right" size={24} color="#C4C4C4" />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  scrollContent: { paddingBottom: 20 },
  editButton: {
    position: "absolute",
    top: Platform.OS === "android" ? 38 : 18,
    right: 18,
    zIndex: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 4,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginBottom: 10,
  },
  profilePicPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#F3C4C8",
    justifyContent: "center",
    alignItems: "center",
  },
  initials: { color: "#8B0000", fontSize: 20, fontWeight: "bold" },
  profileInfo: { marginLeft: 15 },
  profileName: { fontSize: 20, fontWeight: "bold", marginBottom: 5 },
  addButton: {
    borderBottomWidth: 1,
    borderBottomColor: "#F3123C",
    paddingBottom: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  addText: { color: "#F3123C", fontSize: 14 },
  safeDeliveryCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 18,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
  },
  safeDeliveryIconBox: {
    backgroundColor: "#FDECEF",
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  safeDeliveryTitle: { fontWeight: "bold", fontSize: 15, color: "#222" },
  safeDeliverySubtitle: { fontSize: 13, color: "#666", marginTop: 2 },
  tagNovo: {
    backgroundColor: "#F3123C",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 10,
  },
  tagNovoText: { color: "#fff", fontSize: 10, fontWeight: "bold" },
  menuSection: { backgroundColor: "#fff", marginBottom: 10 },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  menuItemLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  menuText: { fontSize: 16, color: "#222", fontWeight: "500" },
  menuSubtitle: { fontSize: 13, color: "#888", marginTop: 2 },
  menuItemRight: { flexDirection: "row", alignItems: "center" },
  badge: {
    backgroundColor: "#F3123C",
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    paddingHorizontal: 5,
  },
  badgeText: { color: "#fff", fontSize: 12, fontWeight: "bold" },

  // Barra fixa acima da navbar
  fixedBarContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 70, // Fica acima da DemoNavBar
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    zIndex: 20,
    paddingVertical: 4,
  },
  fixedBarRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    width: "100%",
  },
  fixedBarItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    position: "relative",
  },
  fixedBarLabel: {
    marginTop: 2,
    fontSize: 12,
    color: "#222",
    fontWeight: "bold",
  },
  fixedBarBadge: {
    position: "absolute",
    top: -4,
    right: -8,
    backgroundColor: "#F3123C",
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  fixedBarBadgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
    paddingHorizontal: 3,
  },
});

export default ProfileScreen;
