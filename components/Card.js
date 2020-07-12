import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Platform, StatusBar } from 'react-native';

const Card = props => {
    return (
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {

        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: Platform.OS === "android" ? StatusBar.currentHeight : 10,
        borderRadius: 10,

    }
});

export default Card;