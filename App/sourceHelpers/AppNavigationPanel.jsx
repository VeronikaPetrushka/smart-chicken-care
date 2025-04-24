import { View, StyleSheet, Image, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
import panel from "../sourceConstants/navigation";
import { useState, useEffect } from "react";

const AppNavigationPanel = () => {
    const navigation = useNavigation();
    const [activeRoute, setActiveRoute] = useState('ChickenBookRoute');

    const manageRouting = (screen) => {
        setActiveRoute(screen);
        navigation.navigate(screen)
    };    

    useEffect(() => {
        const dismiss = navigation.addListener('focus', () => {
            const focusedRoute = navigation.getState().routes[navigation.getState().index].name;
            setActiveRoute(focusedRoute);
        });

        return dismiss;
    }, [navigation]);

    return (
        <View style={styles.navContainer}>

            {
                panel.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => manageRouting(item.route)}>
                        <Image source={item.button} style={[styles.icon, activeRoute===item.route && {tintColor: '#fcba3e'}]} />
                    </TouchableOpacity>
                ))
            }

        </View>
    )
};

const styles = StyleSheet.create({

    navContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 56
    },

    icon: {
        width: 22,
        height: 22,
        resizeMode: 'contain'
    }

})

export default AppNavigationPanel;