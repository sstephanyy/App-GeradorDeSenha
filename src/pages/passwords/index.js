import { useState, useEffect } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useIsFocused } from "@react-navigation/native"
import useStorage from '../../hooks/useStorage'
import { PasswordItem } from './components/passwordItem'

export function Passwords()
{
    const [listPasswords, setListPasswords] = useState([]);
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    useEffect(() => {
        async function loadPasswords(){
            const passwords = await getItem("@pass");
            setListPasswords(passwords);
        }
        loadPasswords();
    }, [focused])

    async function handleDeletePassword(item){
        const deletePasswords = await removeItem("@pass", item);

        setListPasswords(deletePasswords);
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList
                    data={listPasswords}
                    keyExtractor={ (item) => String(item )}
                    renderItem={ ({item}) => <PasswordItem data={item} removePassword={ () => handleDeletePassword(item)} /> }
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        backgroundColor: "#392de9",
        paddingTop: 28,
        paddingBottom: 30,
        paddingLeft: 14,
        paddingRight: 14,
        borderBottomLeftRadius: 26, 
        borderBottomRightRadius: 26, 

    },
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }
})