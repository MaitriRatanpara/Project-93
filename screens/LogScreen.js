import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class LogScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Log Today</Text>
            </View>
        )
    }
}
