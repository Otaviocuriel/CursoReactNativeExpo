import { useState } from "react";
import { styles } from "./_styles";
import { router } from "expo-router";
import { colors } from "@/styles/colors";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { MaterialIcons } from "@expo/vector-icons";
import { Categories } from "@/components/categories";
import { linkStorage } from "@/strorage/link-storage";
import { View, Text, TouchableOpacity, Alert } from "react-native";

export default function AddHeader() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  async function handleAdd() {
    try {
      if (!category) {
        return Alert.alert("Categoria", "Selecione uma categoria!");
      }

      if (!name.trim()) {
        return Alert.alert("Nome", "Informe o nome do link!");
      }

      if (!url.trim()) {
        return Alert.alert("URL", "Informe a URL do link!");
      }

      await linkStorage.save({
        id: new Date().getTime().toString(),
        name,
        url,
        category,
      });

    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar o link!");
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons
            name="arrow-back-ios"
            size={32}
            color={colors.gray[200]}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>
      </View>

      <Text style={styles.label}>Selecione uma categoria</Text>
      <Categories selected={category} onChange={setCategory} />
      <View style={styles.form}>
        <Input
          placeholder="Nome do link"
          onChangeText={setName}
          autoCorrect={false}
        />
        <Input
          placeholder="URL do link"
          onChangeText={setUrl}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Button title="Adicionar link" onPress={handleAdd} />
      </View>
    </View>
  );
}
