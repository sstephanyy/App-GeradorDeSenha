// AsyncStorage provides a way to store small amounts of data locally on the device, such as user preferences, settings, or authentication tokens
import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    //Buscar os itens salvos
    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
        } catch (error) {
            console.log("Erro encontrado", error);
            return [];
        }
    }

    //Salvar um item no storage
    const saveItem = async (key, value) => {
        try {
            let passwords = await getItem(key);

            passwords.push(value);

            await AsyncStorage.setItem(key, JSON.stringify(passwords))

        } catch (error) {
            console.log("Erro encontrado AO SALVAR", error);
            return [];
        }
    }

    //Remover um item do storage
    const removeItem = async (key, item) => {
        try {
           let passwords = await getItem(key); 

            let allPasswords = passwords.filter((password) => {
                return (password != item)
            });

            await AsyncStorage.setItem(key, JSON.stringify(allPasswords));

            return allPasswords;

        } catch (error) {
            console.log("Erro encontrado ao DELETAR", error);
            return [];
        }
    }

    return {
        getItem,
        saveItem,
        removeItem
    }
}

export default useStorage;