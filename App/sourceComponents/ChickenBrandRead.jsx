import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get('window');

const ChickenBrandRead = ({ item }) => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>

            <View style={styles.row}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../sourceAssets/appIcons/back.png')} style={{width: 29, height: 20, resizeMode: 'contain'}} />
                </TouchableOpacity>
                <Text style={styles.name}>{item.name}</Text>
                <Image
                    source={require('../sourceAssets/appDecor/chicken-left.png')}
                    style={{width: 59, height: height * 0.065, resizeMode: 'contain'}}
                />
            </View>

            <Image source={item.brandImage} style={styles.brandImage} />

            <ScrollView style={{width: '100%'}}>
                <Text style={styles.content}>{item.content}</Text>
            </ScrollView>
            
        </View>
    )
};

const styles = StyleSheet.create({

    name: {
        fontSize: 24,
        lineHeight: 27,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 10,
        textAlign: 'center',
        width: '67%',
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20
    },

    brandImage: {
        width: '100%',
        height: 246,
        resizeMode: 'cover',
        borderRadius: 23,
        marginBottom: 20
    },

    content: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: '400',
        color: '#fff',
        fontStyle: 'italic',
        marginBottom: 7
    }

})

export default ChickenBrandRead;