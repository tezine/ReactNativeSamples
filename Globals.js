import Frisbee from "frisbee";
import {StyleSheet} from 'react-native'

export const rest = new Frisbee({
    baseURI: 'http://172.23.182.11:5000/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export const globalStyles=StyleSheet.create({
    txtHeader:{
        padding:10
    }
});