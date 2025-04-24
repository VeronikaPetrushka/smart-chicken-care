import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get('window');

const GRAVITY = 0.6;
const JUMP_STRENGTH = -10;
const OBSTACLE_SPEED = 5;
const CHICKEN_SIZE = 60;
const OBSTACLE_WIDTH = 20;

const ChickenGame = () => {
    const [more, setMore] = useState(false);
    const [chickenY, setChickenY] = useState(0);
    const [velocity, setVelocity] = useState(0);
    const [obstacles, setObstacles] = useState([{ x: width + 100 }]);
    const [isRunning, setIsRunning] = useState(true);
    const [speed, setSpeed] = useState(OBSTACLE_SPEED);
    const intervalRef = useRef();

    const chickenBottom = height - CHICKEN_SIZE - 50;

    const jump = () => {
        if (chickenY >= chickenBottom) {
        setVelocity(JUMP_STRENGTH);
        }
    };

    const resetGame = () => {
        setChickenY(chickenBottom);
        setVelocity(0);
        setObstacles([{ x: width + 100 }]);
        setIsRunning(true);
        setSpeed(OBSTACLE_SPEED);
    };

    useEffect(() => {
        if (!isRunning) return;

        const speedInterval = setInterval(() => {
            setSpeed((prev) => Math.min(prev + 0.5, 20));
        }, 5000);

        return () => clearInterval(speedInterval);
    }, [isRunning]);

    useEffect(() => {
        if (!isRunning) return;

        intervalRef.current = setInterval(() => {
        setVelocity((v) => v + GRAVITY);
        setChickenY((y) => {
            const newY = y + velocity;
            return newY > chickenBottom ? chickenBottom : newY;
        });

        setObstacles((obs) => {
            const updated = obs.map((o) => ({ x: o.x - speed }));
            if (updated[updated.length - 1].x < width - 200) {
                updated.push({ x: width + Math.random() * 100 });
            }
            return updated.filter((o) => o.x + OBSTACLE_WIDTH > 0);
        });

        obstacles.forEach((o) => {
            if (
            o.x < 50 + CHICKEN_SIZE &&
            o.x + OBSTACLE_WIDTH > 50 &&
            chickenY + CHICKEN_SIZE >= chickenBottom
            ) {
            setIsRunning(false);
            }
        });
        }, 30);
        
            return () => clearInterval(intervalRef.current);
        }, [velocity, chickenY, obstacles, isRunning]);

    return (
        <View style={{ flex: 1 }}>

            {
                more ? (
                    <TouchableOpacity activeOpacity={1} onPress={jump} style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}>

                            <Image
                                source={require('../sourceAssets/appDecor/chickenRunner.png')}
                                style={{
                                    position: 'absolute',
                                    width: CHICKEN_SIZE,
                                    height: CHICKEN_SIZE,
                                    left: 50,
                                    bottom: chickenBottom - chickenY + height * 0.3,
                                    resizeMode: 'contain',
                                }}
                            />

                            {obstacles.map((o, i) => (
                            <View
                                key={i}
                                style={{
                                position: 'absolute',
                                width: OBSTACLE_WIDTH,
                                height: 60,
                                left: o.x,
                                bottom: height * 0.3,
                                backgroundColor: '#333',
                                borderRadius: 3
                                }}
                            />
                            ))}

                            {!isRunning && (
                            <TouchableOpacity onPress={resetGame} style={[styles.moreBtn, { position: 'absolute', top: 100, alignSelf: 'center' }]}>
                                    <Text style={styles.moreBtnText}>Try again</Text>
                            </TouchableOpacity>
                            )}
                        </View>
                    </TouchableOpacity>
                ) : (
                    <ScrollView style={{ width: '100%'}}>
                        <Text style={[styles.text, {marginTop: height * 0.1, marginBottom: 20}]}>🦸‍♀️ Join our little chicken in an exciting adventure! Your goal is to jump across platforms and collect eggs while avoiding the abyss. The more eggs you collect, the more points you earn!</Text>
                        
                        <Text style={[styles.text, {marginBottom: 20}]}>💡 It’s not only fun but also rewarding! In our shop, you can buy fascinating articles about chickens and more!</Text>

                        <Text style={[styles.text, {marginBottom: 20}]}>🌟 Enjoy the journey, and remember, every step brings you closer to new knowledge and discoveries!</Text>

                        <Image
                            source={require('../sourceAssets/appDecor/chicken-left.png')}
                            style={{ width: 281, height: height * 0.27, resizeMode: 'contain', alignSelf: 'flex-end', marginBottom: 40 }}
                        />

                        <TouchableOpacity style={styles.moreBtn} onPress={() => setMore(true)}>
                            <Text style={styles.moreBtnText}>Start</Text>
                        </TouchableOpacity>

                        <View style={{height: 170}} />
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

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20
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

export default ChickenGame;