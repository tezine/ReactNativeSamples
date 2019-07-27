import React from "react";
import {View, Button, Alert, Text, StyleSheet} from "react-native";

export default class VAlert extends React.Component {

    static navigationOptions = {title: 'Alert'};
    yesClicked=false;

    render() {
        return (
            <View>
                <Button title={'Você gosta de pão de queijo?'} onPress={() => this.btnPressed()}/>
            </View>
        );
    }

    btnPressed() {
        Alert.alert(
            'Assunpção pães',
            'Sua resposta',
            [
                {text: 'Pergunta outra hora!', onPress: () => console.log('Ask me later pressed')},
                {text: 'Não', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Sim', onPress: () => this.yesClicked=true},
            ],
            {cancelable: false}
        )
    }
}

const styles=StyleSheet.create({
    btnVisible:{
    }
});