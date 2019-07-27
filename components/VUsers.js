import React from "react";
import {Button, Text, View} from "react-native";

export default class VUsers extends React.Component {
    static navigationOptions = {
        title: 'Usuários',
    };

    render() {
        //const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>ola</Text>
                <Button title="Go back" onPress={() => this.props.navigation.goBack()}/>
            </View>
        );
    }
}