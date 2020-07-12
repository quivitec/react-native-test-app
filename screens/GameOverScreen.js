import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Card from '../components/Card';

const GameOverScreen = props => {

    const [rndPhrase, setRndPhrase] = useState("");

    const getChuckNorris = () => {

        fetch('https://api.chucknorris.io/jokes/random', {
            method: 'GET',
            // headers: {
            //     Accept: 'application/json',
            //     'Content-Type': 'application/json'
            // },
            // body: JSON.stringify({
            //     firstParam: 'yourValue',
            //     secondParam: 'yourOtherValue'
            // })
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json.value);
                setRndPhrase(json.value);
                return json.value;
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <View style={styles.screen}>
            <Card>
                <Text>The Game is Over!</Text>
                <Text>Number of Rounds: {props.roundsNumber}</Text>
                <Text>Number was: {props.userNumber}</Text>
                <Button title="NEW GAME" onPress={props.onRestart} />
            </Card>
            <Card>
                <Button title="Get Chuck Norris" onPress={getChuckNorris} />
                <Text>{rndPhrase}</Text>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default GameOverScreen;