import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native";
import chickenBrands from '../sourceConstants/chickenBrands';

const { height } = Dimensions.get('window');

const ChickenBrands = () => {
    const navigation = useNavigation();
    const [more, setMore] = useState(false);
    const [currentCategory, setCurrentCategory] = useState('Egg-Laying');
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);

    return (
        <View style={{ flex: 1 }}>

            {
                more ? (
                    <View style={{ width: '100%' }}>

                        <TouchableOpacity
                            style={selectedItems.length !== 2 ? {opacity: 0.5} : {}}
                            onPress={() => navigation.navigate('ChickenComparisonRoute', { items: selectedItems })}
                            disabled={selectedItems.length !== 2}
                        >
                            <Image
                                source={require('../sourceAssets/appIcons/comparison.png')}
                                style={{ width: 50, height: 50, resizeMode: 'contain', alignSelf: 'flex-end', marginBottom: 20 }}
                            />
                        </TouchableOpacity>
                        
                        <View style={{width: '100%', height: 55, marginBottom: 35}}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {
                                    chickenBrands.map((book, index) => (
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
                                chickenBrands.map((brand, index) => (
                                    <View key={index} style={{width: '100%'}}>
                                        {
                                            brand.category === currentCategory && (
                                                <View style={{width: '100%'}}>
                                                    {
                                                        brand.items.map((item, idx) => (
                                                            <View key={idx} style={[styles.row, {alignItems: 'flex-start', justifyContent: 'flex-start'}]}>
                                                                <View style={{ width: 166, height: 118, borderRadius: 23, marginRight: 10 }}>
                                                                    <Image key={idx} source={item.brandImage} style={styles.brandImage} />
                                                                    <TouchableOpacity style={{position: 'absolute', top: 10, right: 10}} onPress={() => selectedItem===item ? setSelectedItem(null) : setSelectedItem(item)}>
                                                                        <Image
                                                                            source={selectedItem === item ? require('../sourceAssets/appIcons/activeDots.png')
                                                                                : require('../sourceAssets/appIcons/dots.png')}
                                                                            style={{width: 22, height: 22, resizeMode: 'contain'}}
                                                                        />
                                                                    </TouchableOpacity>
                                                                </View>
                                                                <View style={{alignItems: 'flex-start', justifyContent: 'space-between'}}>
                                                                    <Text style={styles.name}>{item.name}</Text>
                                                                    {
                                                                        selectedItem === item && <Text style={styles.hook}>{item.hook}</Text>
                                                                    }
                                                                </View>
                                                                <TouchableOpacity
                                                                    style={{ position: 'absolute', top: 0, right: 10 }}
                                                                    onPress={() =>
                                                                        selectedItems.some((b) => b.name === item.name)
                                                                            ? setSelectedItems(selectedItems.filter((b) => b.name !== item.name))
                                                                            : setSelectedItems([...selectedItems, item])}
                                                                >
                                                                    <Image
                                                                        source={selectedItems.includes(item) ? require('../sourceAssets/appIcons/activeCompare.png')
                                                                            : require('../sourceAssets/appIcons/compare.png')}
                                                                        style={{width: 22, height: 22, resizeMode: 'contain'}}
                                                                    />
                                                                </TouchableOpacity>
                                                            </View>
                                                        ))
                                                    }
                                                </View>
                                            )
                                        }
                            
                                    </View>
                                ))
                            }

                            {
                                selectedItem && (
                                    <TouchableOpacity style={[styles.moreBtn, {marginTop: 20}]} onPress={() => navigation.navigate('ChickenBrandReadRoute', {item: selectedItem})}>
                                        <Text style={styles.moreBtnText}>Learn more</Text>
                                    </TouchableOpacity>
                                )
                            }

                            <View style={{height: 300}} />
                        </ScrollView>

                    </View>
                ) : (
                    <ScrollView style={{ width: '100%'}}>
                        <Text style={[styles.text, {marginTop: height * 0.1, marginBottom: 20}]}>Here you’ll find 🐣 egg-laying, 🍗 meat, and 🎭 ornamental breeds, complete with photos, descriptions, and key characteristics.</Text>
                        
                        <Text style={styles.text}>🔍 What’s Inside?</Text>
                        <Text style={styles.text}>📸 Photos and descriptions of each breed</Text>
                        <Text style={styles.text}>📌 Average weight and egg production</Text>
                        <Text style={[styles.text, {marginBottom: 20}]}>🌿 Care requirements</Text>

                        <Text style={[styles.text, {marginBottom: 20}]}>🏆 Compare Breeds! Select two breeds and discover which one suits you best based on key parameters.</Text>

                        <Image
                            source={require('../sourceAssets/appDecor/chicken-left.png')}
                            style={{ width: 281, height: height * 0.27, resizeMode: 'contain', alignSelf: 'flex-end', marginBottom: 40 }}
                        />

                        <TouchableOpacity style={styles.moreBtn} onPress={() => setMore(true)}>
                            <Text style={styles.moreBtnText}>Learn more</Text>
                        </TouchableOpacity>

                        <View style={{height: 300}} />
                    </ScrollView>
                )
            }
            
        </View>
    )
};

const styles = StyleSheet.create({

    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: '400',
        color: '#fff',
        fontStyle: 'italic'
    },

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

    brandImage: {
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
        fontSize: 18,
        lineHeight: 21,
        fontWeight: '600',
        color: '#fff',
    },

    hook: {
        fontSize: 15,
        lineHeight: 21,
        fontWeight: '600',
        color: '#fff',
        width: '50%',
        marginTop: 12
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

export default ChickenBrands;