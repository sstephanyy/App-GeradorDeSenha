import React from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

export function PasswordItem({data}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{data}</Text>
            <View style={styles.icons}>
                <Ionicons name="eye-outline" color={"white"} size={20}></Ionicons>
                <Ionicons name="trash-outline" color={"white"} size={20}></Ionicons>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        width: '95%',
        marginTop: 14,
        padding: 10,
        alignSelf: 'center',
        flexDirection:'row',
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'space-between'
    },
    text:{
        color: 'white',
    },
    icons:{
        flexDirection: 'row',
        gap: 10
    }
})