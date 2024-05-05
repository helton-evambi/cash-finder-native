import { Pressable, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

export default function Menu() {
  return (
    <View className="w-full flex flex-row items-center justify-around p-2 px-4 h-14 bg-[#211818] ">
      <Pressable className="flex items-center">
        <AntDesign name="home" size={24} color="#E7E2E2" />
        <Text className="text-[#E7E2E2]">Home</Text>
      </Pressable>
      <Pressable className="flex items-center">
        <AntDesign name="search1" size={24} color="#E7E2E2" />
        <Text className="text-[#E7E2E2]">Pesquisar</Text>
      </Pressable>
      <Pressable className="flex items-center">
        <AntDesign name="question" size={30} color="#E7E2E2" />
        <Text className="text-[#E7E2E2]">Faq</Text>
      </Pressable>
      <Pressable className="flex items-center">
        <MaterialIcons name="roundabout-right" size={24} color="#E7E2E2" />
        <Text className="text-[#E7E2E2]">Sobre</Text>
      </Pressable>
    </View>
  )
}
