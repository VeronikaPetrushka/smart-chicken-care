import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get('window');

const AppPreview = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            
        </View>
    )
};

export default AppPreview;