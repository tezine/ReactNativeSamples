import React from "react";
import {Picker,Text, View, StyleSheet} from "react-native";

export default class VPicker extends React.Component {

    state = {language: {}};
    static navigationOptions = {title: 'Picker'};

    render() {
        return (
            <View>
                <Text style={styles.txt}>Select the language below:</Text>
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Typescript" value="typescript"/>
                    <Picker.Item label="C#" value="csharp"/>
                    <Picker.Item label="QML" value="qml"/>
                </Picker>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    txt:{
        marginLeft:10
    }
});