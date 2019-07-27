import React from "react";
import {View, StyleSheet, SectionList, Text} from "react-native";
import ListButton from './subcomponents/ListButton'
import {globalStyles} from "../Globals";

export class VSectionList extends React.Component {

    static navigationOptions = {title: 'SectionList'};
    filhos=[{name: 'Theo'}, {name: 'Manu'}];

    render() {
        return (
            <View>
                <Text style={globalStyles.txtHeader}>
                    Like FlatList, but for sectioned lists.
                </Text>
                <SectionList
                    renderItem={({item}) => <ListButton text={item.name}/>}
                    renderSectionHeader={({section}) => <Text style={styles.header}>{section.title}</Text>}
                    sections={[ // homogeneous rendering between sections
                        {data: [{name: 'Bruno'}, {name: 'Adriano'}], title: "Pais"},
                        {data: this.filhos, title: "Filhos"},
                        {data: [{name: 'Lulets'}, {name: 'Cristiane'}], title: "Mães"},
                        {data: [{name: 'Bozo'}, {name: 'Mafalda'}, {name: 'Papai Smurf'}], title: "Tios"},
                        {data: [{name: 'Lucas'}, {name: 'João'}], title: "Sobrinhos"},
                    ]}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'gray',
        paddingLeft: 10,
        color: 'white'
    }
});