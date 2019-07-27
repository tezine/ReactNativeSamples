import React from "react";
import {ScrollView, View, StyleSheet, Text} from "react-native";
import {globalStyles} from "../Globals";

export default class VScrollView extends  React.Component{

    static navigationOptions = {title: 'ScrollView'};

    render(){
        return (
          <ScrollView>
              <Text style={globalStyles.txtHeader}>
                  Provides a scrolling container that can host multiple components and views.
              </Text>
              <View style={styles.view1}>
                  <Text style={styles.txt}>Ola1</Text>
              </View>
              <View style={styles.view2}>
                  <Text style={styles.txt}>Ola2</Text>
              </View>
              <View style={styles.view3}>
                  <Text style={styles.txt}>Ola3</Text>
              </View>
          </ScrollView>
        );
    }
}

const styles= StyleSheet.create({
    view1:{
        flex:1,
        height:500,
        backgroundColor:'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view2:{
        height:500,
        backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view3:{
        height:500,
        backgroundColor:'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt:{
        color:'white',
        fontSize:40,
    }
});