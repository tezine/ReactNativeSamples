import React from "react";
import {View, StyleSheet, Text, Modal, TouchableHighlight} from "react-native";
import {globalStyles} from "../Globals";

export default class VModal extends React.Component{
    static navigationOptions = {title: 'Modal'};
    state={modalVisible:false};


    render(){
        return(
            <View style={styles.view}>
                <Text style={globalStyles.txtHeader}>
                    Provides a simple way to present content above an enclosing view.
                </Text>
                <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}
                    onRequestClose={() => {this.requestClose()}}>
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text style={styles.hello}>Hello World!</Text>
                            <TouchableHighlight
                                onPress={() => {this.setModalVisible(!this.state.modalVisible);}}>
                                <Text style={styles.btn}>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <TouchableHighlight
                    onPress={() => {this.setModalVisible(true);}}>
                    <Text style={styles.btn}>Show Modal</Text>
                </TouchableHighlight>
            </View>
        );
    }

    requestClose(){
        this.setModalVisible(false);
        alert('Modal has been closed.');
    }

    setModalVisible(visible){
        this.state.modalVisible=visible;
        this.setState(this.state);
    }
}

const styles=StyleSheet.create({
    view:{
        flex:1
    },
    btn:{
        fontSize:30,
        color:'white',
        backgroundColor: '#2196F3'
    },
    hello:{
        fontSize:50
    }
});