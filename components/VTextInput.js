import React from "react";
import {View, StyleSheet, TextInput, Text} from "react-native";
import {globalStyles} from "../Globals";

export default class VTextInput extends  React.Component{
    static navigationOptions = {title: 'TextInput'};

    render(){
        return (
            <View style={styles.view}>
                <Text style={globalStyles.txtHeader}>
                    A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.
                </Text>
                <Text>Normal TextInput</Text>
                <TextInput maxLength={30} onChangeText={(txt)=>this.txtChanged(txt)} style={styles.input1}/>
                <Text>Multiline</Text>
                <TextInput multiline={true} numberOfLines={6}/>
            </View>
        );
    }

    txtChanged(txt){
        console.log('text changed: ',txt);
    }  
}

const styles=StyleSheet.create({
    view:{
        flex:1
    },
    input1:{
        height:40,
        // borderColor:'gray',
        // borderWidth:1

    }
});