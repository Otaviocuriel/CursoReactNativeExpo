import { MaterialIcons } from "@expo/vector-icons";


type Category = {
    id: number
    name: string
    icon: keyof typeof MaterialIcons.glyphMap
}



export const categories: Category[] = [
  { id: 1, name: "Programação", icon: "code" },
  { id: 2, name: "Design", icon: "palette" },
  { id: 3, name: "Marketing", icon: "campaign" },
  { id: 4, name: "Negócios", icon: "business-center" },
  { id: 5, name: "Fotografia", icon: "camera-alt" },
  { id: 6, name: "Educação", icon: "school" },
  { id: 7, name: "Saúde", icon: "local-hospital" },
];