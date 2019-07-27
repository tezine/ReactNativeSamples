import React from "react";
import {View, StyleSheet, Text, StatusBar} from "react-native";
import {globalStyles} from "../Globals";

export default class VStatusBar extends React.Component {
    static navigationOptions = {title: 'StatusBar'};

    render() {
        return (
            <View style={styles.view}>
                <Text style={globalStyles.txtHeader}>
                    Component to control the app status bar.
                </Text>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="dark-content"
                    hidden={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
});