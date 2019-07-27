import {Component} from "react";
import {TouchableHighlight, View, Text, StyleSheet} from "react-native";
import React from "react";

export default class ListButton extends Component {

    render() {
        return (
            <View style={styles.view}>
                <TouchableHighlight onPress={() => this.props.onClick(this.props.text)} underlayColor="transparent">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>{this.props.text}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        marginBottom: 5,
        width: 350,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 10,
        color: 'white'
    }

});