import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard'

export function ModalPassword({password, handleClose})
{

    async function handleCopyPassword()
    {
        await Clipboard.setStringAsync(password);
        alert("Senha salva com sucesso!");

        handleClose();

    }

    return(
        <View style={styles.container}>
            <View style={styles.modal}>
                <Text style={styles.title}>Senha gerada</Text>

                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.passwordText}>{password}</Text>
                </Pressable>

                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.btn} onPress={handleClose}>
                        <Text style={styles.btnText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.btn, styles.btnSave]} >
                        <Text style={styles.btnSaveText}>Salvar Senha</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    modal:{
        backgroundColor: '#FFF',
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 24
    },
    innerPassword:{
        backgroundColor: "#0e0e0e",
        width: '90%',
        padding: 14,
        borderRadius: 8,
    },
    passwordText:{
        color: 'white',
        textAlign: 'center'
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "90%",
        alignItems: 'center',
        marginTop: 8
    },
    btn:{
        flex:1,
        marginTop: 14,
        marginBottom: 14,
        alignItems: 'center',
        borderRadius: 8,
        padding: 8
    },
    btnSave:{
        backgroundColor: '#392DE9'
    },
    btnSaveText:{
        color: "white",
        fontWeight: 'bold'
    }
})