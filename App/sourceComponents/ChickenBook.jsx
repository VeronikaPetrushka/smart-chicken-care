import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native";
import chickenBook from '../sourceConstants/chickenBook';

const { height } = Dimensions.get('window');

const ChickenBook = () => {
    const navigation = useNavigation();
    const [currentCategory, setCurrentCategory] = useState('Housing');
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <View style={{ flex: 1 }}>

            <View style={{width: '100%', height: 55, marginBottom: 35}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        chickenBook.map((book, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.categoryBtn, currentCategory === book.category && { backgroundColor: '#5d092a' }]}
                                onPress={() => setCurrentCategory(book.category)}
                            >
                                <Text style={styles.categoryBtnText}>{book.category}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>

            <ScrollView style={{width: '100%'}}>
                {
                    chickenBook.map((book, index) => (
                        <View key={index} style={{width: '100%'}}>

                            {
                                book.category === currentCategory && (
                                    <>
                                        <View style={styles.row}>
                                            <Text style={styles.subTitle}>{book.subTitle}</Text>
                                            <TouchableOpacity onPress={() => navigation.navigate('ChickenBookSavedRoute')}>
                                                <Image source={require('../sourceAssets/appIcons/saved.png')} style={{width: 25, height: 32, resizeMode: 'contain'}} />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{width: '100%', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between'}}>
                                            {
                                                book.items.map((item, idx) => (
                                                    <View key={idx} style={{ width: '48%', height: 118, borderRadius: 23, marginBottom: 10 }}>
                                                        <Image source={item.bookImage} style={styles.bookImage} />
                                                        <TouchableOpacity style={{position: 'absolute', top: 10, right: 10}} onPress={() => selectedItem===item ? setSelectedItem(null) : setSelectedItem(item)}>
                                                            <Image
                                                                source={selectedItem === item ? require('../sourceAssets/appIcons/activeDots.png')
                                                                    : require('../sourceAssets/appIcons/dots.png')}
                                                                style={{width: 22, height: 22, resizeMode: 'contain'}}
                                                            />
                                                        </TouchableOpacity>
                                                    </View>
                                                ))
                                            }
                                        </View>
                                    </>
                                )
                            }
                
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

                {
                    !selectedItem && (
                        <Image
                            source={require('../sourceAssets/appDecor/chicken-left.png')}
                            style={{width: 231, height: height * 0.23, resizeMode: 'contain', alignSelf: 'center', marginTop: height * 0.08}}
                        />
                    )
                }

                <View style={{height: 300}} />
            </ScrollView>
            
        </View>
    )
};

const styles = StyleSheet.create({

    categoryBtn: {
        paddingHorizontal: 43,
        paddingVertical: 15,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#5d092a',
        marginRight: 10,
        height: 55
    },

    categoryBtnText: {
        fontSize: 15,
        lineHeight: 21,
        fontWeight: '600',
        color: '#fff'
    },

    subTitle: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: '600',
        color: '#fff',
        width: '80%'
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

export default ChickenBook;