import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

const { height } = Dimensions.get('window');

const ChickenBookSaved = () => {
    const navigation = useNavigation();
    const [savedBooks, setSavedBooks] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        loadSavedBooks();
    }, [savedBooks]);

    useFocusEffect(
        useCallback(() => {
            loadSavedBooks();
        }, [])
    );

    const loadSavedBooks = async () => {
        const stored = await AsyncStorage.getItem('savedBooks');
        if (stored) {
            setSavedBooks(JSON.parse(stored));
        }
    };

    const deleteSavedBook = async (book) => {
        const updated = savedBooks.filter((b) => b.name !== book.name);

        setSavedBooks(updated);
        await AsyncStorage.setItem('savedBooks', JSON.stringify(updated));
    };

    console.log(savedBooks)

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

            <Text style={styles.subTitle}>All important things in one place – just save!</Text>

            <ScrollView contentContainerStyle={{width: '100%', alignItems: 'center'}}>
                {
                    savedBooks.map((book, index) => (
                        <View key={index} style={[styles.row, {justifyContent: 'center'}]}>
                            <Image
                                source={require('../sourceAssets/appIcons/saved.png')}
                                style={{ width: 25, height: 32, resizeMode: 'contain', marginRight: 10 }}
                            />
                            <View style={{ width: '48%', height: 118, borderRadius: 23, marginBottom: 10 }}>
                                <Image source={book.bookImage} style={styles.bookImage} />
                                <TouchableOpacity style={{position: 'absolute', top: 10, right: 10}} onPress={() => selectedItem?.name === book.name ? setSelectedItem(null) : setSelectedItem(book)}>
                                    <Image
                                        source={selectedItem?.name === book.name ? require('../sourceAssets/appIcons/activeDots.png')
                                            : require('../sourceAssets/appIcons/dots.png')}
                                        style={{width: 22, height: 22, resizeMode: 'contain'}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => deleteSavedBook(book)}>
                                <Image
                                    source={require('../sourceAssets/appIcons/delete.png')}
                                    style={{ width: 25, height: 32, resizeMode: 'contain', marginLeft: 10 }}
                                />
                            </TouchableOpacity>
                        </View>
                    ))
                }

                {
                    selectedItem && (
                        <View style={{width: '100%', marginTop: height * 0.085}}>
                            <Text style={styles.name}>{selectedItem.name}</Text>
                            <View style={styles.row}>
                                <Text style={styles.hook}>{selectedItem.hook}</Text>
                                <Image
                                    source={require('../sourceAssets/appDecor/chicken-left.png')}
                                    style={{width: 151, height: height * 0.15, resizeMode: 'contain'}}
                                />
                            </View>
                            <TouchableOpacity style={styles.moreBtn} onPress={() => navigation.navigate('ChickenBookReadRoute', {item: selectedItem})}>
                                <Text style={styles.moreBtnText}>Learn more</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }

                <View style={{height: 50}} />
            </ScrollView>
            
        </View>
    )
};

const styles = StyleSheet.create({

    subTitle: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 40
    },

    bookImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 23
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20
    },

    name: {
        fontSize: 24,
        lineHeight: 27,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 10,
        textAlign: 'center'
    },

    hook: {
        fontSize: 16,
        lineHeight: 21,
        fontStyle: 'italic',
        fontWeight: '400',
        color: '#fff',
        width: '60%'
    },

    moreBtn: {
        paddingHorizontal: 51,
        paddingVertical: 14,
        borderRadius: 100,
        backgroundColor: '#5d092a',
        alignSelf: 'center'
    },

    moreBtnText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: '600',
        color: '#fff'
    }

})

export default ChickenBookSaved;