import React, { useRef, useEffect } from 'react';
import { View, Animated } from "react-native"
import { useNavigation } from "@react-navigation/native";

const AppAnimation = () => {
    const navigation = useNavigation();

    const fadeChickenCare = useRef(new Animated.Value(0)).current;
    const fadeChickenRight = useRef(new Animated.Value(0)).current;
    const fadeSmart = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.timing(fadeChickenCare, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.timing(fadeChickenRight, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.timing(fadeSmart, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }),
            ]).start(() => {
            setTimeout(() => {
                navigation.navigate('ChickenBookRoute');
            }, 1000);
        });
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Animated.Image
                source={require('../sourceAssets/appDecor/chicken-right.png')}
                style={{ width: 226, height: 219, resizeMode: 'contain', marginBottom: 34, opacity: fadeChickenRight }}
            />
            <Animated.Image
                source={require('../sourceAssets/appDecor/smart.png')}
                style={{ width: 148, height: 46, resizeMode: 'contain', marginBottom: 14, opacity: fadeSmart }}
            />
            <Animated.Image
                source={require('../sourceAssets/appDecor/chickenCare.png')}
                style={{ width: 303, height: 46, resizeMode: 'contain', opacity: fadeChickenCare }}
            />
            
        </View>
    )
};

export default AppAnimation;