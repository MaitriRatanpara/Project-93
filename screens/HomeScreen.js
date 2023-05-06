import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style = {styles.droidSafeArea}/>

                <View style = {styles.titleBar}>
                    <Text style = {styles.titleText}>Hydration Tracker App</Text>
                </View>

                <TouchableOpacity style = {style.routeCard} onPress={() => this.props.navigation.navigation("LogScreen")}>
                    <Text style = {styles.routeText}>Log Today</Text>
                    <Image source={require('../assets/glassOfWater.png')}></Image>
                    <Image source={require('../assets/plusSign.png')}></Image>
                    <Image source={require('../assets/backToHomeButton.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity style = {style.routeCard} onPress={() => this.props.navigation.navigation("PastLogScreen")}>
                    <Text style = {style.routeText}>Yesterday's Log</Text>
                    <Image source={require('../assets/glassOfWater.png')}></Image>
                    <Image source={require('../assets/backToHomeButton.png')}></Image>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight: 0
    },
    titleBar: {
        flex: 0.10,
        justifyContent: "center",
        alignItems: "center"
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        padding: 30
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    iconImage: {
        position: 'absolute',
        height: 200,
        width: 200,
        resizeMode: 'contain',
        right: 20,
        top: -80
    }
})