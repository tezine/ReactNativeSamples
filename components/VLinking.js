import React from "react";
import {View, StyleSheet, Button, Linking, Text} from "react-native";
import {globalStyles} from "../Globals";

export default class VLinking extends React.Component{
    static navigationOptions = {title: 'Linking'};

    render(){
        return(
            <View style={styles.view}>
                <Text style={globalStyles.txtHeader}>
                    Start the corresponding activity for a link (web URL, email, contact etc.), call
                </Text>
                <Button title={'Tezine website'} onPress={()=>this.btnPressed('http://tezine.com')}/>
            </View>
        );
    }

    btnPressed(url){
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }
}

const styles=StyleSheet.create({
    view:{
        flex:1
    }
});