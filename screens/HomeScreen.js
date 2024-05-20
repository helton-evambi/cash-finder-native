import { Image, ScrollView, StatusBar, Text, View } from 'react-native'
import Header from '../components/Header'
import Menu from '../components/Menu'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeCard from '../components/HomeCard'

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 justify-center bg-[#693737]">
      <Header />
      <ScrollView className="flex-1">
        <View className="flex justify-center items-center px-3">
          <Text className="text-lg text-white my-5">
            Encontre os Atms Próximos de Si
          </Text>
          <View className="border-b border-white"></View>
          <Image
            source={require('../assets/cash_finder.png')}
            className="w-36 h-28 my-4"
          />
          <Text className="text-[#E7E2E2] text-base mb-3">Resumo dos Atms</Text>
          <HomeCard name={'Total'} total={'100'} image="total" />
          <HomeCard name={'Em Serviço'} total={'10'} image="servico" />
          <HomeCard
            name={'Fora de Serviço'}
            total={'2'}
            image="fora_de_servico"
          />
          <HomeCard name={'Verificados'} total={'70'} image="verificado" />
        </View>
      </ScrollView>
      <Menu />
      <StatusBar
        backgroundColor="#211818"
        barStyle="light-content" // Define a cor do texto (pode ser 'dark-content' ou 'light-content')
        translucent={false} // Define se a barra de status é translúcida (apenas iOS)
      />
    </SafeAreaView>
  )
}
