import { Image, Text, View } from 'react-native'

const images = {
  total: require('../assets/total.png'),
  servico: require('../assets/servico.png'),
  fora_de_servico: require('../assets/fora_de_servico.png'),
  verificado: require('../assets/verified.png'),
}

export default function HomeCard({ name, total, image }) {
  return (
    <View className="bg-white w-full rounded-md p-2 my-2 flex items-center">
      <Text className="text-base">{total}</Text>
      <Text className="text-base">{name}</Text>
      <Image source={images[image]} className="w-16 h-16" />
    </View>
  )
}
