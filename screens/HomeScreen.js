import { ScrollView, StatusBar, Text, View } from 'react-native'
import Header from '../components/Header'
import Menu from '../components/Menu'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#693737]">
      <Header />
      <ScrollView className="flex-1"></ScrollView>
      <Menu />
      <StatusBar
        backgroundColor="#211818"
        barStyle="light-content" // Define a cor do texto (pode ser 'dark-content' ou 'light-content')
        translucent={false} // Define se a barra de status é translúcida (apenas iOS)
      />
    </SafeAreaView>
  )
}
