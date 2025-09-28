import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList, SCREENS_ORDER, ScreenName } from '../navigation/AppNavigator';

interface DemoNavBarProps {
  currentRouteName: ScreenName;
}

const DemoNavBar: React.FC<DemoNavBarProps> = ({ currentRouteName }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const currentIndex = SCREENS_ORDER.indexOf(currentRouteName);
  const nextRouteName = SCREENS_ORDER[currentIndex + 1];
  const previousRouteName = SCREENS_ORDER[currentIndex - 1];

  const goToNext = () => {
    if (nextRouteName) {
      navigation.navigate(nextRouteName); 
    }
  };

  const goToPrevious = () => {
    if (previousRouteName) {
      navigation.goBack(); 
    }
  };

  const isFirstScreen = currentIndex === 0;
  const isLastScreen = currentIndex === SCREENS_ORDER.length - 1;

  return (
    <View style={styles.navBar}>
      {/* Botão ANTERIOR */}
      <TouchableOpacity 
        onPress={goToPrevious} 
        disabled={isFirstScreen}
        style={[styles.button, isFirstScreen && styles.disabledButton]}
      >
        <Ionicons name="arrow-back" size={20} color={isFirstScreen ? '#ccc' : '#333'} />
        <Text style={[styles.buttonText, isFirstScreen && styles.disabledText]}>Anterior</Text>
      </TouchableOpacity>

      {/* Indicador de Tela */}
      <View style={styles.indicator}>
        <Text style={styles.indicatorText}>
          Tela {currentIndex + 1} de {SCREENS_ORDER.length}
        </Text>
      </View>

      {/* Botão PRÓXIMO */}
      <TouchableOpacity 
        onPress={goToNext}
        disabled={isLastScreen}
        style={[styles.button, isLastScreen && styles.disabledButton]}
      >
        <Text style={[styles.buttonText, isLastScreen && styles.disabledText]}>Próximo</Text>
        <Ionicons name="arrow-forward" size={20} color={isLastScreen ? '#ccc' : '#333'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingHorizontal: 15,
    zIndex: 10, 
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 5,
    color: '#333',
  },
  disabledButton: {
    opacity: 0.5,
  },
  disabledText: {
    color: '#ccc',
  },
  indicator: {
      padding: 5,
      backgroundColor: '#f0f0f0',
      borderRadius: 5,
  },
  indicatorText: {
      fontSize: 12,
      color: '#666',
      fontWeight: 'bold',
  }
});

export default DemoNavBar;