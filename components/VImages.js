import React from "react";
import {Text, View, Image, StyleSheet} from "react-native";
import {globalStyles} from "../Globals";

export default class VImages extends  React.Component{

    static navigationOptions = {title: 'Imagens'};
    pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};

    constructor(props){
        super(props);
    }

    render(){
        return (
           <View style={styles.view}>
               <Text style={globalStyles.txtHeader}>
                   A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.
               </Text>
               <Text>From Network</Text>
               <Image source={this.pic} style={styles.img}/>
               <Text>From folder</Text>
               {/*<Image source={{uri: 'asset:/images/lake.jpg'}} style={styles.img} />*/}
               <Image source={require('../images/lake.jpg')} />
           </View>
        );
    }
}

const styles=StyleSheet.create({
    view:{
        flex:1,
        alignItems:'center'
    },
    img:{
        width:300,
        height:110,
        marginBottom:40
    },
});