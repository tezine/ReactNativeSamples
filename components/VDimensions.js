import React from "react";
import {View, StyleSheet, Dimensions, Text, PixelRatio} from "react-native";
import {globalStyles} from "../Globals";

export default class VDimensions extends React.Component{
    static navigationOptions = {title: 'Dimensions'};
    state={dimensionsHeight:0, dimensionsWidth:0};

    componentDidMount(){
        let {height, width} = Dimensions.get('screen');
        this.state.dimensionsHeight=height;
        this.state.dimensionsWidth=width;
        this.setState(this.state);
    }

    render(){
        return(
            <View style={styles.view}>
                <Text style={globalStyles.txtHeader}>
                    Get or set the screen and window dimensions.
                </Text>
                <Text style={styles.txt}>
                   Window layout width:  {this.state.dimensionsWidth}
                    {'\n'}
                    Window layout height: {this.state.dimensionsHeight}
                </Text>
                <Text style={styles.txt}>
                    Real width:  {PixelRatio.getPixelSizeForLayoutSize(this.state.dimensionsWidth)}
                    {'\n'}
                    Real height: {PixelRatio.getPixelSizeForLayoutSize(this.state.dimensionsHeight)}
                </Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    view:{
        flex:1
    },
    txt:{
        fontSize:30
    }
});