import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Modal } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get('window');

const ChickenBookRead = ({ item }) => {
    const navigation = useNavigation();
    const [zoomIn, setZoomIn] = useState(false);
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        loadSavedBooks();
    }, []);

    const loadSavedBooks = async () => {
        const stored = await AsyncStorage.getItem('savedBooks');
        if (stored) {
            setSavedBooks(JSON.parse(stored));
        }
    };

    const toggleSavedBook = async () => {
        let updated;
        const exists = savedBooks.some((b) => b.name === item.name);

        if (exists) {
            updated = savedBooks.filter((b) => b.name !== item.name);
        } else {
            updated = [...savedBooks, item];
        }

        setSavedBooks(updated);
        await AsyncStorage.setItem('savedBooks', JSON.stringify(updated));
    };

    const saved = savedBooks.some((b) => b.name === item.name);

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

            <View style={[styles.row, {justifyContent: 'center'}]}>
                <TouchableOpacity onPress={toggleSavedBook}>
                    <Image
                        source={saved ? require('../sourceAssets/appIcons/saved.png')
                            : require('../sourceAssets/appIcons/save.png')}
                        style={{width: 22, height: 28, resizeMode: 'contain', marginRight: 10}}
                    />
                </TouchableOpacity>
                <View style={{width: 166, height: 118, borderRadius: 23}}>
                    <Image source={item.bookImage} style={styles.bookImage} />
                    <TouchableOpacity style={{position: 'absolute', top: 10, right: 10}} onPress={() => setZoomIn(true)}>
                        <Image
                            source={require('../sourceAssets/appIcons/zoomin.png')}
                            style={{width: 20, height: 20, resizeMode: 'contain'}}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={{width: '100%'}}>
                {
                    item.content.map((c, index) => (
                        <View key={index} style={{width: '100%'}}>
                            <Text style={styles.content}>{c.text}</Text>
                            {
                                c.list && (
                                    <>
                                        {
                                            c.list.map((el, idx) => (
                                                <Text key={idx} style={styles.content}>  {'\u2022'}  {el}</Text>
                                            ))
                                        }
                                    </>
                                )
                            }
                        </View>
                    ))
                }
            </ScrollView>

            <Modal
                animationType="fade"
                transparent
                visible={zoomIn}
                onRequestClose={() => setZoomIn(false)}
            >
                <View style={styles.modalLayout}>
                    <View style={{width: width < 375 ? 300 : 353, height: width < 375 ? 300 : 353, borderRadius: 23}}>
                        <Image source={item.bookImage} style={styles.bookImage} />
                        <TouchableOpacity style={{position: 'absolute', top: 10, right: 10}} onPress={() => setZoomIn(false)}>
                            <Image
                                source={require('../sourceAssets/appIcons/zoomin.png')}
                                style={{width: 20, height: 20, resizeMode: 'contain'}}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            
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

    bookImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 23
    },

    content: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: '400',
        color: '#fff',
        fontStyle: 'italic',
        marginBottom: 7
    },

    modalLayout: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        alignItems: 'center',
        paddingTop: height * 0.16
    },

})

export default ChickenBookRead;