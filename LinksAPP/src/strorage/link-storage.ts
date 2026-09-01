import AsyncStrorage from "@react-native-async-storage/async-storage";

const LINK_STORAGE_KEY = "LINK_STORAGE";

type LinkStorage = {
  id: string;
  name: string;
  url: string;
  category: string;
};

async function get(): Promise<LinkStorage[]> {
  const storage = await AsyncStrorage.getItem(LINK_STORAGE_KEY);
  const response = storage ? JSON.parse(storage) : [];

  return response;
}
async function save(newLink: LinkStorage) {
  try {
    const storage = await get();
    const update = JSON.stringify([...storage, newLink]);

    await AsyncStrorage.setItem(LINK_STORAGE_KEY, update);
  } catch (error) {
    throw error;
  }
}

export const linkStorage = {
  get,
  save,
};
