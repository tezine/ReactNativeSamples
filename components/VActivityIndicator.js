import React from "react";
import {View, ActivityIndicator, Text} from "react-native";
import {globalStyles} from "../Globals";

export default class VActivityIndicator extends React.Component {
    static navigationOptions = {title: 'ActivityIndicator'};

    render() {
        return (
            <View>
                <Text style={globalStyles.txtHeader}>
                    Displays a circular loading indicator.
                </Text>
                <Text>Large</Text>
                <ActivityIndicator size="large" color="blue"/>
                <Text>Small</Text>
                <ActivityIndicator size="small" color="green"/>
            </View>
        );
    }
}