import {Image, Pressable, Text, TextInput, View} from 'react-native';
import { StyleSheet } from 'react-native'; 

const App = () => {

    return(
        <View style={styles.container}>
            {/* Null space */}
            <View>

            </View>
            {/* Logo */}
            <View style={styles.boxLogo}>
                <Image style={styles.logo} source={require(
                '../assets/logo.png',
                )}></Image>
                <Text style={styles.logoText}>Learn a language for free forever.</Text>
            </View>

            {/* Buttons */}
            <View >
                <Pressable>
                    <Text>Get started</Text>
                </Pressable>
                <Pressable>
                    <Text>I Have already a account</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9e9e9',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingBottom: 25,
        gap: 10,
    },
    boxLogo: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 240,
        height: 240,
    },
    logoText: {
        fontSize: 22,
    }
})