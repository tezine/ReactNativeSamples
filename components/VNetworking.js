import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {rest} from "../Globals";
import EUser from "../entities/EUser"

export default class VNetworking extends React.Component{

    static navigationOptions = {title: 'Networking'};

    constructor(props){
        super(props);
        this.state = {eUserFromGet: {}, postResult:false};
    }

    async componentWillMount(){
        let eUser=await this.testGet();
        this.setState({eUserFromGet:eUser});
        let ok= await this.testPost();
        this.setState({postResult:ok});
    }

    render(){
        return (
           <View style={styles.view}>
               <Text>
                  Resposta do testGet(): {this.state.eUserFromGet.name}
               </Text>
               <Text>
                   Resposta do testPost(): {this.state.postResult.toString()}
               </Text>
           </View>
        );
    }

    async testGet(){
         let res = await rest.get('/Values/GetByLogin/tezine');
         let eUser=res.body;
         console.log('(testGet)'+eUser.name);
         return eUser;
    }

    async testPost(){
        // now let's post a message to our API
        let eUser:EUser={};
        eUser.name='Bruno';
        let res = await rest.post('/Values/Insert', { body: JSON.stringify(eUser) });
        let ok=res.body;
        console.log('(testPost)', ok);
        return ok;
    }
}

const styles=StyleSheet.create({
    view:{
        height:500
    }
});