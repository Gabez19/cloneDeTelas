## Tutorial: Uso de StyleSheet e Flexbox no React Native

### StyleSheet

O `StyleSheet` é a forma recomendada de criar estilos em React Native. Ele permite definir objetos de estilos reutilizáveis, melhorando a organização e a performance do app.

**Exemplo de uso:**
```tsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
});
```
Para aplicar um estilo, basta usar a propriedade `style`:
```tsx
<View style={styles.container}>
  <Text style={styles.title}>Título</Text>
</View>
```

### Flexbox

O Flexbox é o sistema de layout padrão do React Native, facilitando o alinhamento e distribuição dos elementos na tela, tanto em linhas quanto em colunas.

**Principais propriedades:**

- `flexDirection`: Define a direção dos itens (`row` ou `column`).
- `justifyContent`: Alinha os itens no eixo principal (ex: `center`, `space-between`).
- `alignItems`: Alinha os itens no eixo secundário (ex: `center`, `flex-start`).
- `flex`: Define o quanto um item cresce em relação aos outros.

**Exemplo prático:**
```tsx
<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
  <Text>Esquerda</Text>
  <Text>Centro</Text>
  <Text>Direita</Text>
</View>
```

**No projeto das telas clonadas:**
- O `StyleSheet` foi usado para centralizar e reaproveitar estilos.
- O Flexbox foi utilizado para alinhar menus, cards, ícones e botões, garantindo responsividade e organização visual.

**Dica:**  
Consulte a [documentação oficial do Flexbox no React Native](https://reactnative.dev/docs/flexbox) para mais exemplos e detalhes.