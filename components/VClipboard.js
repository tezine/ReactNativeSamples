import React from "react";
import {View, StyleSheet, Text, Clipboard} from "react-native";
import {globalStyles} from "../Globals";

export default class VClipboard extends React.Component {
    static navigationOptions = {title: 'Clipboard'};
    state={content:''};

    async componentDidMount() {
        this.state.content = await Clipboard.getString();
        this.setState(this.state);
        console.log('(VClipboard.componentDidMount)',this.state.content)
    }

    render() {
        return (
            <View style={styles.view}>
                <Text style={globalStyles.txtHeader}>
                    Clipboard gives you an interface for setting and getting content from Clipboard on both iOS and Android.
                    {'\n'}
                    COPY SOMETHING FROM OTHER APP. IT WILL BE DISPLAYED BELOW
                </Text>
                <Text style={styles.txt}>
                    Texto:{this.state.content}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    txt:{
        fontSize:30
    }

});