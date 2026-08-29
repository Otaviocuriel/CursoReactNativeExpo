import {
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";

type OptionProps = TouchableOpacityProps & {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  varient?: "primary" | "secondary";
};

export function Option({
  name,
  icon,
  varient = "primary",
  ...rest
}: OptionProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <MaterialIcons
        name={icon}
        size={20}
        color={varient === "primary" ? colors.green[300] : colors.gray[400]}
      />
      <Text
        style={
          varient === "primary" ? styles.primaryTitle : styles.secondaryTitle
        }
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}
