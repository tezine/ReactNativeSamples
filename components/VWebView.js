import React from "react";
import {View, StyleSheet, Text, WebView} from "react-native";
import {globalStyles} from "../Globals";

export default class VWebView extends React.Component{
    static navigationOptions = {title: 'WebView'};

    render(){
        return(
            <View style={styles.view}>
                <Text style={globalStyles.txtHeader}>
                    WebView renders web content in a native view.
                </Text>
                <WebView
                    source={{uri: 'http://www.tezine.com'}}
                    style={{marginTop: 20}}
                />
            </View>
        );
    }
}

const styles=StyleSheet.create({
    view:{
        flex:1
    }
});