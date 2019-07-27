import React from "react";
import {View, StyleSheet, Text, Animated} from "react-native";
import {globalStyles} from "../Globals";

export default class VAnimated extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    };
    static navigationOptions = {title: 'Animated'};

    componentDidMount() {
        Animated.timing(                  // Animate over time
            this.state.fadeAnim,            // The animated value to drive
            {
                toValue: 1,                   // Animate to opacity: 1 (opaque)
                duration: 10000,              // Make it take a while
            }
        ).start();                        // Starts the animation
    }

    render() {
        return (
            <View style={styles.view}>
                <Text style={globalStyles.txtHeader}>
                    The Animated library is designed to make animations fluid, powerful, and easy to build and maintain.
                </Text>
                <Animated.View style={{...this.props.style, opacity: this.state.fadeAnim,}}>
                    <Text style={styles.txt}>Fading in</Text>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    txt:{
        fontSize: 50,
        textAlign: 'center',
        margin: 10
    }
});