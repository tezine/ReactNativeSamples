import React from "react";
import {View, StyleSheet, Text, KeyboardAvoidingView, Image, TextInput} from "react-native";
import {globalStyles} from "../Globals";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

export default class VKeyboardAwareScrollView extends React.Component{
    static navigationOptions = {title: 'KeyboardAvoidingView'};

    render(){
        return(
            <KeyboardAwareScrollView
                style={styles.container}
            >
                <View>
                <Text style={globalStyles.txtHeader}>
                    It is a component to solve the common problem of views that need to move out of the way of the virtual keyboard. It can automatically adjust either its position or bottom padding based on the position of the keyboard.
                    {'\n'}
                    yarn add react-native-keyboard-aware-scroll-view
                    {'\n'}
                    I'm using this component since KeyboardAvoidingView didn't work as expected.
                    {'\n'}
                    More info at https://github.com/APSL/react-native-keyboard-aware-scroll-view
                    IT WON'T WORK ON EXPO
                </Text>
                    {/*<Image source={require('../images/lake.jpg')} />*/}
                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Username"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                          style={styles.input}
                    />
                    <TextInput
                        placeholder="Confirm Password"
                        style={styles.input}
                    />
                    {/*<View style={{ height: 60 }} />*/}
                </View>
                </KeyboardAwareScrollView>
        );
    }
}

const styles=StyleSheet.create({
    view:{
        flex:1
    },
    input:{
        height:40,
        paddingTop:40
    },
    container:{
        flex:1,
    }
});