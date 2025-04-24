import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get('window');

const ChickenExpenses = () => {
    const navigation = useNavigation();
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        loadExpenses();
    }, []);

    const loadExpenses = async () => {
        try {
            const stored = await AsyncStorage.getItem('chickenExpenses');
            if (stored) {
                setExpenses(JSON.parse(stored));
            }
        } catch (error) {
            console.error("Failed to load expenses:", error);
        }
    };

    const deleteExpense = async (id) => {
        try {
            const updated = expenses.filter(item => item.id !== id);
            setExpenses(updated);
            await AsyncStorage.setItem('chickenExpenses', JSON.stringify(updated));
        } catch (error) {
            console.error("Failed to delete expense:", error);
        }
    };

    return (
        <View style={{ flex: 1 }}>

            <View style={[styles.row, {marginBottom: 20}]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../sourceAssets/appIcons/back.png')} style={{width: 29, height: 20, resizeMode: 'contain'}} />
                </TouchableOpacity>
                <Image
                    source={require('../sourceAssets/appDecor/chicken-left.png')}
                    style={{width: 59, height: height * 0.065, resizeMode: 'contain'}}
                />
            </View>

            <ScrollView style={{width: '100%'}}>
                {
                    expenses.length > 0 ? (
                        <View style={{width: '100%'}}>
                            {
                                expenses.map((item, index) => (
                                    <View key={index} style={styles.row}>
                                        <View style={styles.expensesCard}>
                                            <View style={styles.row}>
                                                <Text style={styles.category}>{item.category}</Text>
                                                <Text style={styles.date}>{item.date}</Text>
                                            </View>
                                            <Text style={styles.amount}>Spent: {item.amount}</Text>
                                            <Text style={styles.description}>{item.description}</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => deleteExpense(item.id)}>
                                            <Image
                                                source={require('../sourceAssets/appIcons/delete.png')}
                                                style={{ width: 25, height: 32, resizeMode: 'contain', marginLeft: 10 }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                ))
                            }
                        </View>
                    ) : (
                          <Text style={styles.description}>You have not added any expenses yet...</Text>  
                    )
                }
            </ScrollView>
            
        </View>
    )
};

const styles = StyleSheet.create({

    row: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5
    },

    expensesCard: {
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 21,
        backgroundColor: '#5d092a',
        alignItems: 'flex-start'
    },

    category: {
        fontSize: 21,
        lineHeight: 24,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 10,
        textAlign: 'center',
    },

    date: {
        fontSize: 17,
        lineHeight: 22,
        fontWeight: '400',
        color: '#fff',
        marginBottom: 10,
        textAlign: 'center',
    },

    amount: {
        fontSize: 15,
        lineHeight: 22,
        fontWeight: '400',
        color: '#fff',
        marginBottom: 10,
    },

    description: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: '400',
        color: '#fff',
        fontStyle: 'italic',
        marginBottom: 7
    }

})

export default ChickenExpenses;