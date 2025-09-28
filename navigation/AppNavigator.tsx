// navigation/AppNavigator.tsx (CÓDIGO ATUALIZADO)

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StoreScreen from '../screens/StoreScreen';
import CardScreen from '../screens/CardScreen';
import ProfileScreen from '../screens/ProfileScreen';

// 1. Definição da ordem sequencial das telas
export const SCREENS_ORDER = [
  'Store',
  'Card',
  'Profile',
] as const; // O 'as const' garante que o TypeScript saiba que são strings fixas

export type ScreenName = typeof SCREENS_ORDER[number];

// 2. Definição dos tipos de rotas
export type RootStackParamList = {
  [K in ScreenName]: undefined; // Todas as rotas não aceitam parâmetros por enquanto
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Store">
        
        {/* Usamos 'headerShown: false' em todas para ter controle total do layout */}
        
        <Stack.Screen 
          name="Store" 
          component={StoreScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Card" 
          component={CardScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;