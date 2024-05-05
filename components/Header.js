import { Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function Header() {
  return (
    <View className="flex flex-row items-center justify-between p-2 px-4 h-14 bg-[#211818]">
      <Text className="text-[#E7E2E2] text-lg">CashFinder</Text>
      <View className="flex flex-row gap-5">
        <AntDesign name="sharealt" size={24} color="#E7E2E2" />
        <AntDesign name="setting" size={24} color="#E7E2E2" />
      </View>
    </View>
  )
}
