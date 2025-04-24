import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { Calendar } from 'react-native-calendars';

const { height, width } = Dimensions.get('window');

const AddChickenExpenses = () => {
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [spent, setSpent] = useState(null);
    const [description, setDescription] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

    const handleSaveExpense = async () => {
        try {
            const newExpense = {
                id: Date.now(),
                category: selectedCategory,
                amount: spent,
                description,
                date: selectedDate,
            };

            const stored = await AsyncStorage.getItem('chickenExpenses');
            const parsed = stored ? JSON.parse(stored) : [];

            const updated = [...parsed, newExpense];
            await AsyncStorage.setItem('chickenExpenses', JSON.stringify(updated));

            setSelectedCategory(null);
            setSpent(null);
            setDescription(null);
            setSelectedDate(new Date().toISOString().split('T')[0]);
            setIndex(0);
        } catch (error) {
            console.error("Error saving expense:", error);
        }
    };

    return (
        <View style={{ flex: 1 }}>                       

            {
                index === 0 && (
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ChickenExpensesRoute')}
                        >
                            <Image
                                source={require('../sourceAssets/appIcons/expenses.png')}
                                style={{ width: 50, height: 50, resizeMode: 'contain', alignSelf: 'flex-end', marginBottom: 20 }}
                            />
                        </TouchableOpacity>
                        
                        <ScrollView style={{ width: '100%' }}>
                            
                            <Text style={[styles.text, {marginTop: height * 0.1, marginBottom: 20}]}>Track your expenses on feed, medicines, and other essentials for your chickens! Enter the amount, select the category, and add a comment with the date to keep track of your finances accurately.</Text>
                            
                            <Text style={styles.text}>🔹 Select a category</Text>
                            <Text style={styles.text}>🔹 Enter the amount</Text>
                            <Text style={[styles.text, {marginBottom: 20}]}>🔹 Add a comment and date</Text>

                            <Text style={[styles.text, {marginBottom: 20}]}>With this calculator, you can easily manage your budget and analyze farm expenses.</Text>

                            <Image
                                source={require('../sourceAssets/appDecor/chicken-left.png')}
                                style={{ width: 281, height: height * 0.27, resizeMode: 'contain', alignSelf: 'flex-end', marginBottom: 40 }}
                            />

                            <TouchableOpacity style={styles.moreBtn} onPress={() => setIndex((prev) => prev + 1)}>
                                <Text style={styles.moreBtnText}>Begin</Text>
                            </TouchableOpacity>

                            <View style={{height: 300}} />
                        </ScrollView>

                    </View>
                )
            }

            {
                index !== 0 && (
                    <TouchableOpacity onPress={() => setIndex((prev) => prev - 1)}>
                        <Image source={require('../sourceAssets/appIcons/back.png')} style={{ width: 29, height: 20, resizeMode: 'contain', marginBottom: 30 }} />
                    </TouchableOpacity>
                )
            }

            {
                index === 1 && (
                    <View style={{ width: '100%', flexGrow: 1}}>

                        <Text style={[styles.text, { marginBottom: 60, textAlign: 'center' }]}>Choose an expense category</Text>

                        {
                            ['Feed', 'Medicine', 'Vitamins', 'Equipment'].map((category, idx) => (
                                <TouchableOpacity
                                    key={idx}
                                    style={[styles.categoryBtn, selectedCategory === category && { borderColor: '#fff'}]}
                                    onPress={() => selectedCategory === category ? setSelectedCategory(null) : setSelectedCategory(category)}
                                >
                                    <Text style={styles.categoryBtnText}>{category}</Text>
                                </TouchableOpacity>
                            ))
                        }

                        {
                            selectedCategory && (
                               <TouchableOpacity style={[styles.categoryBtn, {padding: 10, width: 230, position: 'absolute', bottom: 170, alignSelf: 'center'}]} onPress={() => setIndex((prev) => prev + 1)}>
                                    <Text style={styles.categoryBtnText}>Next</Text>
                                </TouchableOpacity> 
                            )
                        }
                        
                    </View>
                )
            } 

            {
                index === 2 && (
                    <View style={{ width: '100%', flexGrow: 1}}>

                        <Text style={[styles.text, { marginBottom: 60, textAlign: 'center' }]}>Specify the exact amount spent in the chosen category.</Text>

                        <TextInput
                            style={styles.input}
                            value={spent}
                            onChangeText={setSpent}
                            placeholder='1.00'
                            placeholderTextColor={'#bebebe'}
                        />

                        {
                            spent && (
                               <TouchableOpacity style={[styles.categoryBtn, {padding: 10, width: 230, position: 'absolute', bottom: 170, alignSelf: 'center'}]} onPress={() => setIndex((prev) => prev + 1)}>
                                    <Text style={styles.categoryBtnText}>Next</Text>
                                </TouchableOpacity> 
                            )
                        }
                        
                    </View>
                )
            } 

            {
                index === 3 && (
                    <View style={{ width: '100%', flexGrow: 1}}>

                        <Text style={[styles.text, { marginBottom: 60, textAlign: 'center' }]}>Write a brief description</Text>

                        <TextInput
                            style={[styles.input, {width: '100%', minHeight: 121, borderRadius: 36}]}
                            value={description}
                            onChangeText={setDescription}
                            placeholder='Text'
                            placeholderTextColor={'#bebebe'}
                            multiline
                        />

                        {
                            description && (
                               <TouchableOpacity style={[styles.categoryBtn, {padding: 10, width: 230, position: 'absolute', bottom: 170, alignSelf: 'center'}]} onPress={() => setIndex((prev) => prev + 1)}>
                                    <Text style={styles.categoryBtnText}>Next</Text>
                                </TouchableOpacity> 
                            )
                        }
                        
                    </View>
                )
            } 

            {
                index === 4 && (
                    <View style={{ width: '100%', flexGrow: 1}}>

                        <Text style={[styles.text, { marginBottom: 60, textAlign: 'center' }]}>Enter today’s date</Text>

                        <Calendar
                            style={styles.calendar}
                            onDayPress={(day) => setSelectedDate(day.dateString)}
                            markedDates={{
                                [selectedDate]: {
                                selected: true,
                                customStyles: {
                                    container: {
                                    borderWidth: 2,
                                    borderColor: '#fff',
                                    },
                                    text: {
                                        color: '#fff',
                                    },
                                },
                                }
                            }}
                            markingType={'custom'}
                            disableAllTouchEventsForDisabledDays={true}
                            theme={{
                                backgroundColor: '#5d092a',
                                calendarBackground: '#5d092a',
                                textSectionTitleColor: '#fff',
                                dayTextColor: '#fff',
                                monthTextColor: '#fff',
                                textMonthFontWeight: 'bold',
                                textDisabledColor: '#5d092a',
                                textDayFontWeight: '400',
                                textDayHeaderFontWeight: '500',
                                todayTextColor: '#ff365e',
                                arrowColor: '#fff',
                            }}
                            dayComponent={({ date }) => {
                                const isToday = new Date().toISOString().split('T')[0] === date.dateString;
                                const isSelected = date.dateString === selectedDate;

                                return (
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: '#49091b',
                                        borderRadius: 10,
                                        padding: 10,
                                        width: 42,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderWidth: isSelected ? 2 : 0,
                                        borderColor: isSelected ? '#fff' : 'transparent',
                                        }}
                                    onPress={() => setSelectedDate(date.dateString)}
                                >
                                    <Text style={{
                                        color: isToday ? '#ff365e' : '#fff',
                                        textAlign: 'center',
                                    }}>
                                        {date.day}
                                    </Text>
                                </TouchableOpacity>
                                );
                            }}
                            />

                        {
                            selectedDate && (
                               <TouchableOpacity style={[styles.categoryBtn, {padding: 10, width: 230, position: 'absolute', bottom: 170, alignSelf: 'center'}]} onPress={() => setIndex((prev) => prev + 1)}>
                                    <Text style={styles.categoryBtnText}>Next</Text>
                                </TouchableOpacity> 
                            )
                        }
                        
                    </View>
                )
            } 

            {
                index === 5 && (
                    <View style={{ width: '100%', flexGrow: 1}}>

                        <Text style={[styles.text, { marginBottom: 60, textAlign: 'center' }]}>Your Order Overview</Text>

                        {
                            [selectedCategory, spent, description, selectedDate].map((result, idx) => (
                                <View key={idx} style={[styles.categoryBtn, {width: result === description ? '100%' : 200}]}>
                                    <Text style={styles.categoryBtnText}>{result}</Text>
                                </View>
                            ))
                        }

                        <TouchableOpacity
                            style={[styles.categoryBtn, { padding: 10, width: 230, position: 'absolute', bottom: 170, alignSelf: 'center' }]}
                            onPress={handleSaveExpense}
                        >
                            <Text style={styles.categoryBtnText}>Save</Text>
                        </TouchableOpacity> 
                        
                    </View>
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
    },

    categoryBtn: {
        width: 200,
        padding: 14,
        borderRadius: 100,
        backgroundColor: '#5d092a',
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: '#5d092a',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },

    categoryBtnText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: '600',
        color: '#fff'
    },

    input: {
        width: 200,
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 100,
        backgroundColor: '#5d092a',
        alignSelf: 'center',
        fontSize: 16,
        lineHeight: 21,
        fontWeight: '600',
        color: '#fff'
    },

    calendar: {
        width: width * 0.88,
        borderRadius: 21,
        overflow: 'hidden',
        paddingVertical: 10,
        paddingHorizontal: 23,
        backgroundColor: '#5d092a'
    }

})

export default AddChickenExpenses;