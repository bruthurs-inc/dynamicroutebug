import { Text, View } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";

export default function SlugScreen() {
  const { bar } = useLocalSearchParams();

  return (
    <View>
      <Text>slug screen: {bar}</Text>
    </View>
  );
}
