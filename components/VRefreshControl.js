import React from "react";
import {View, StyleSheet, Text, FlatList, RefreshControl} from "react-native";
import {globalStyles} from "../Globals";
import ListButton from "./subcomponents/ListButton";

export default class VRefreshControl extends React.Component{

    static navigationOptions = {title: 'RefreshControl'};
    values=['a','b','c','d','e','f'];

    constructor(props) {
        super(props);
        this.state = {refreshing: false,};
    }

    refreshClicked() {
        this.setState({refreshing: true});
        //fetch your data here, than set refreshing=false
        // fetchData().then(() => {
        //     this.setState({refreshing: false});
        // });
    }

    render(){
        return(
            <View style={styles.view}>
                <Text style={globalStyles.txtHeader}>
                    This component is used inside a ScrollView or ListView to add pull to refresh functionality. When the ScrollView is at scrollY: 0, swiping down triggers an onRefresh event.
                </Text>
                <FlatList
                    data={this.values}
                    renderItem={({item}) => <ListButton style={styles.item} text={item}/>}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.refreshClicked.bind(this)}
                        />
                    }
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