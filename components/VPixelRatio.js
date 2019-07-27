import React from "react";
import {View, StyleSheet, Text, PixelRatio, Image} from "react-native";
import {globalStyles} from "../Globals";

export default class VPixelRatio extends React.Component{
    static navigationOptions = {title: 'PixelRatio'};

    render(){
        let widthRatio=PixelRatio.getPixelSizeForLayoutSize(200);
        let heightRatio=PixelRatio.getPixelSizeForLayoutSize(100);
        return(
            <View style={styles.view}>
                <Text style={globalStyles.txtHeader}>
                    PixelRatio class gives access to the device pixel density.
                    {'\n'}
                    You should get a higher resolution image if you are on a high pixel density device. A good rule of thumb is to multiply the size of the image you display by the pixel ratio.
                </Text>
                <Text>
                    PixelSizeForLayoutSize  200: {widthRatio}
                    {'\n'}
                    PixelSizeForLayoutSize 100: {heightRatio}
                </Text>
                <Image source={require('../images/lake.jpg')} style={{width: PixelRatio.getPixelSizeForLayoutSize(200),
                    height: PixelRatio.getPixelSizeForLayoutSize(100)}} />
            </View>
        );
    }
}

const styles=StyleSheet.create({
    view:{
        flex:1
    }
});