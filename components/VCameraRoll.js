import React from "react";
import {CameraRoll, View, StyleSheet, Text, Button, ScrollView, Image} from "react-native";
import {globalStyles} from "../Globals";

export default class VCameraRoll extends React.Component {
    static navigationOptions = {title: 'CameraRoll'};
    state={photos:[]};

    render() {
        return (
            <View style={styles.view}>
                <Text style={globalStyles.txtHeader}>
                    CameraRoll provides access to the local camera roll or photo library.
                    On iOS, the CameraRoll API requires the RCTCameraRoll library to be linked.{"\n"}
                    The user's permission is required in order to access the Camera Roll on devices running iOS 10 or later. Add the NSPhotoLibraryUsageDescription key in your Info.plist with a string that describes how your app will use this data.
                    {'\n'}
                    On Android, add READ_EXTERNAL_STORAGE
                    {'\n'}THIS SAMPLE WILL NOT WORK UNDER EXPO
                </Text>
                <Button title="Load Images" onPress={() => this.btnLoadImagesPressed()}/>
                <ScrollView>
                    {this.state.photos.map((p, i) => {
                        return (
                            <Image
                                key={i}
                                style={{
                                    width: 300,
                                    height: 100,
                                }}
                                source={{uri: p.node.image.uri}}
                            />
                        );
                    })}
                </ScrollView>
            </View>
        );
    }

    btnLoadImagesPressed() {
        console.log('(btnLoadImagesPressed)');
        CameraRoll.getPhotos({first: 20, assetType: 'Photos',})
        .then(r => {
            this.setState({photos: r.edges});
        })
        .catch((err) => {
            //Error Loading Images
            console.log('btnLoadImages error',err);
        });
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
});