import { View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <MaterialIcons name
      </View>
    </View>
  )
}

