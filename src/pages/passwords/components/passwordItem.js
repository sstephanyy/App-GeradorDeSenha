import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

export function PasswordItem({ data, removePassword }) {
    const [isIconClicked, setIsIconClicked] = useState(false);

    const handleIconClick = () => {
        setIsIconClicked(!isIconClicked); // Toggle the state when the icon is clicked
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.text, isIconClicked && styles.textHidden]}>{data}</Text>
            <View style={styles.icons}>
                <TouchableOpacity onPress={handleIconClick}>
                    <Ionicons
                        name={isIconClicked ? 'eye-off-outline' : 'eye-outline'}
                        color="white"
                        size={20}
                    />
                </TouchableOpacity>
                <Ionicons name="trash-outline" color={"white"} size={20} onPress={removePassword} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '95%',
        marginTop: 14,
        padding: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'space-between',
        position: 'relative' // Ensure that the container is positioned relatively
    },
    text: {
        color: 'white',
    },
    textHidden: {
        color: 'transparent',
        backgroundColor: 'white',
        borderRadius: 4
    },
    icons: {
        flexDirection: 'row',
        gap: 10
    },
});
