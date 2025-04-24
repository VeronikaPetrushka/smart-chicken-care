import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get('window');

const ChickenComparison = ({ items }) => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>

            <View style={styles.row}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../sourceAssets/appIcons/back.png')} style={{width: 29, height: 20, resizeMode: 'contain'}} />
                </TouchableOpacity>
                <Image
                    source={require('../sourceAssets/appDecor/chicken-left.png')}
                    style={{width: 59, height: height * 0.065, resizeMode: 'contain'}}
                />
            </View>

            <View style={styles.row}>
                {
                    items.map((item, index) => (
                        <View key={index} style={{ width: '47%' }}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Image source={item.brandImage} style={styles.brandImage} />
                            <ScrollView style={{width: '100%'}}>
                                {
                                    item.compare.map((c, idx) => (
                                        <Text key={idx} style={styles.content}>{c}</Text>
                                    ))
                                }
                                <Text style={[styles.content, {marginTop: 20}]}>{item.best}</Text>
                            </ScrollView>
                        </View>
                    ))
                }
            </View>
            
        </View>
    )
};

const styles = StyleSheet.create({

    name: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
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
        height: 118,
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

export default ChickenComparison;