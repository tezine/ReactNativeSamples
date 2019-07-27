import React from "react";
import {Button, FlatList, Image, StyleSheet, Text, View} from "react-native";
import ListButton from "./subcomponents/ListButton";

export default class HomeComponents extends React.Component {
    static navigationOptions = {
        title: 'Tezine App',
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.getSortedValues()}
                    renderItem={
                        ({item}) => <ListButton style={styles.item} text={item.key}
                                                onClick={(txt) => this.itemClicked(txt)}/>
                    }
                />
            </View>
        );
    }

    getSortedValues() {
        let values = [
            {key: 'ScrollView'},
            {key: 'Networking'},
            {key: 'Images'},
            {key: 'TextInput'},
            {key: 'Button'},
            {key: 'Picker'},
            {key: 'Slider'},
            {key: 'Switch'},
            {key: 'SectionList'},
            {key: 'ActivityIndicator'},
            {key: 'Alert'},
            {key: 'Animated'},
            {key: 'CameraRoll'},
            {key: 'Clipboard'},
            {key: 'Dimensions'},
            {key: 'KeyboardAwareScrollView'},
            {key: 'Linking'},
            {key: 'Modal'},
            {key: 'PixelRatio'},
            {key: 'RefreshControl'},
            // {key: 'StatusBar'},
            {key: 'WebView'},
        ];
        values = values.sort(function (a, b) {
            let x=a.key.toLowerCase(),
                y=b.key.toLowerCase();
            return x<y ? -1 : x>y ? 1 : 0;
        });
        return values;
    }

    itemClicked(txt) {
        console.log('clicou no item:', txt);
        this.props.navigation.navigate(txt);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 20,
        fontWeight:'bold',
        height: 35,
    },
});
