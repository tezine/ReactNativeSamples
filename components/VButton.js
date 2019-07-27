import React from "react";
import {View, Button, StyleSheet, Text} from "react-native";
import {globalStyles} from "../Globals";

export default class VButton extends React.Component{
    static navigationOptions = {title: 'Button'};

    render(){
        return (
            <View style={styles.flex}>
                <Text style={globalStyles.txtHeader}>
                    A basic button component that should render nicely on any platform. Supports a minimal level of customization.
                    {'\n'}BUTTON DOESN'T ALLOW CHANGES IN HEIGHT
                </Text>
                <Button title={"Button 1"} onPress={()=>this.btn1Pressed()}/>
                  <Button title={"Button 2"} color={'red'} onPress={()=>this.btn1Pressed()}/>
                <Button title={"Button 2"} disabled={true} onPress={()=>this.btn1Pressed()}/>
            </View>
        );
    }

    btn1Pressed(){
        console.log('(btn1Pressed)')
    }
}

const styles=StyleSheet.create({
    view:{
        flex:1
    }, 
});