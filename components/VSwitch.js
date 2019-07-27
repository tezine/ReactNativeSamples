import React from "react";
import {View, Switch, Text, StyleSheet} from "react-native";
import {globalStyles} from "../Globals";

export default class VSwitch extends React.Component {

    static navigationOptions = {title: 'Switch'};

    render() {
        return (
            <View style={styles.view}>
                <Text style={globalStyles.txtHeader}>
                    Renders a boolean input.
                </Text>
                <Text>Right Switch</Text>
                <Switch value={true}/>
                <Text>Left Switch</Text>
                <View style={styles.view2}>
                    <Switch value={true} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    view2: {
        flexDirection: 'row',
        flex: 0,
      //  backgroundColor: 'blue'
    }
});