import { Text, View } from 'react-native'
import Header from '../components/Header'
import { StatusBar } from 'expo-status-bar'

export default function HomeScreen() {
  return (
    <>
      <Header />
      <View className="flex-1 items-center justify-center bg-[#693737]">
        <Text>Olá mundo</Text>
      </View>
    </>
  )
}
