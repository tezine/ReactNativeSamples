import React from "react";
import {StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";
import {rest} from '../Globals'

export default class VLogin extends React.Component {

    constructor(props){
        super(props);
        this.state={login:'',password:''};
    }

    render() {
        return (
        <View style={styles.container}>
            <TextInput placeholder={'usuário'}
                       style={styles.txtInput}
                       onChangeText={(login) => this.setState({login:login})}/>
            <TextInput placeholder={'senha'}
                       style={styles.txtInput}
                       onChangeText={(password) => this.setState({password:password})}/>
            <TouchableHighlight onPress={() => this.btnEntrarClicked()}
                                underlayColor="transparent">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>ENTRAR</Text>
                </View>
            </TouchableHighlight>
        </View>
        );
    }

    async btnEntrarClicked() {
        console.log('vai autenticar ',this.state.login, this.state.password)
        // let res = await rest.get('/v1/Users/Authenticate/' +
        //     this.state.login+"/"+this.state.password);
        // let ok = res.body;
        // console.log('auth result:', ok);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFB300',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtInput: {
        width: 300,
        height: 40
    },
    button: {
        marginBottom: 30,
        width: 300,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
});
