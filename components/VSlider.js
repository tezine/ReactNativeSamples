import React from "react";
import {View, Slider, StyleSheet, Text} from "react-native";
import {globalStyles} from "../Globals";

export default class VSlider extends  React.Component{

    static navigationOptions = {title: 'Slider'};

    render(){
        return (
            <View style={styles.slider}>
                <Text style={globalStyles.txtHeader}>
                    A component used to select a single value from a range of values.
                </Text>
                <Slider minimumValue={0} maximumValue={100} value={10}
                thumbTintColor={'red'}/>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    slider:{
        padding:20
    }
});