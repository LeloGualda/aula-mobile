import * as React from 'react';
import { View, Button, TouchableHighlight, Text } from 'react-native';

export default function () {
    return <View><Button onPress={() => {
        alert('precionou!');
    }} title="Press Me" />

        <TouchableHighlight onPress={() => alert("onPress")} 
        style={{
            height:30,
            width:100,
            backgroundColor:'darkblue',
            marginTop:20
        }}
        onLongPress={() => {
            alert("onLongPress")
        }} underlayColor="white">
            <Text style={{
                color:'white',
                fontSize:10,
                textAlign:'center'
            }}>TouchableHighlight </Text>
        </TouchableHighlight>
    </View>
}