import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity, Image

} from 'react-native';

export default function homeScreen(props) {

    return (
        <View style={{ flex: 1, backgroundColor: '#f1f0f2', justifyContent: 'center' }}>

            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Image style={{ marginBottom: 15, }}
                    source={require('../Assets/police.png')}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.navigation.navigate('SearchScreen')}
                >
                    <Text style={styles.buttonLable}>SEARCH</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.navigation.navigate('addScreen')}
                >

                    <Text style={styles.buttonLable}>ADD FINE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    button: {
        borderWidth: 1,
        height: 45,
        width: "85%",
        alignContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 15,
        backgroundColor: 'coral',
        justifyContent: "center"
    },
    buttonLable: {
        fontSize: 24,
        color: "#ffff",
        alignSelf: "center"
    }
});



