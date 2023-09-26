import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  return (
    <View className="flex-1 justify-center items-center dark:bg-neutral-900 space-y-6">
      <StatusBar style={colorScheme=='dark'? 'light': 'dark'} />
      <View className="flex-row justify-center items-center space-x-2">
        <Text className="text-xl dark:text-white">Modo Oscuro</Text>
        <Switch value={colorScheme=='dark'} onChange={toggleColorScheme} />
      </View>
      <Text className="mx-4 justify-center dark:text-white">
        Activalo con un toque y disfruta de una experiencia visual más comoda en entornos de poca luz
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
