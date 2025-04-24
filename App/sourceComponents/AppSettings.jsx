import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Dimensions, Modal, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Slider from '@react-native-community/slider';
import { useMusic } from '../sourceConstants/AppMusicInitializer.js';

const { height } = Dimensions.get('window'); 

const AppSettings = () => {
    const [resetModalVisible, setResetModalVisible] = useState(false);
    const { isPlaying, togglePlay, volume, setVolume } = useMusic();
    const [isVibrate, setIsVibrate] = useState(false);

    const resetProgress = () => {
        AsyncStorage.removeItem('savedBooks')
        AsyncStorage.removeItem('chickenExpenses')
            .then(() => console.log('Progress reset successfully'))
            .catch((error) => console.error('Failed to reset progress:', error));
        setResetModalVisible(false);
        Alert.alert('Success', 'Your progress has been reset!')
    };

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>

            <ScrollView style={{ width: '100%' }}>
                <Image
                    source={require('../sourceAssets/appDecor/chicken-left.png')}
                    style={{ width: 147, height: 143, resizeMode: 'contain', marginTop: height * 0.05, alignSelf: 'flex-start', marginLeft: 50, zIndex: 10 }} />
                
                <View style={styles.container}>

                    <View style={styles.row}>
                        <Image
                            source={require('../sourceAssets/appIcons/appMusic.png')}
                            style={{ width: 45, height: 45, resizeMode: 'contain', marginRight: 12 }}
                        />
                        <Text style={styles.text}>Music</Text>
                    </View>

                    <View style={{ height: 17, justifyContent: 'center', borderRadius: 20, backgroundColor: '#5d092a', paddingHorizontal: 5, marginBottom: 53 }}>
                        <Slider
                            style={{ width: '100%' }}
                            minimumValue={0}
                            maximumValue={1}
                            step={0.01}
                            minimumTrackTintColor="#5d092a"
                            maximumTrackTintColor="#fff"
                            thumbTintColor="#ff9e36"
                            value={volume}
                            onValueChange={(val) => {
                                setVolume(val);
                                if (val === 0 && isPlaying) togglePlay();
                                if (val > 0 && !isPlaying) togglePlay();
                            }}
                        />
                    </View>

                    <View style={[styles.row, {justifyContent: 'space-between'}]}>
                        <TouchableOpacity onPress={() => setIsVibrate((prev) => !prev)}>
                            <Image
                                source={isVibrate ? require('../sourceAssets/appIcons/vibroOn.png')
                                    : require('../sourceAssets/appIcons/vibroOff.png')}
                                style={{width: 42, height: 23, resizeMode: 'contain'}}
                            />
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image
                                source={require('../sourceAssets/appIcons/appVibro.png')}
                                style={{ width: 45, height: 45, resizeMode: 'contain', marginRight: 12}}
                            />
                            <Text style={styles.text}>Vibration</Text>
                        </View>
                    </View>
                </View>
                
                <TouchableOpacity style={styles.moreBtn} onPress={() => setResetModalVisible(true)}>
                    <Text style={styles.moreBtnText}>Reset progress</Text>
                </TouchableOpacity>
                
                <View style={{height: 300}} />
            </ScrollView>
            
            <Modal
                animationType="fade"
                transparent
                visible={resetModalVisible}
                onRequestClose={() => setResetModalVisible(false)}
            >
                <View style={styles.modalLayout}>
                    <View style={styles.modalContent}>
                        <Text style={styles.resetTitle}>Reset progress?</Text>
                        <Text style={styles.resetText}>Are you sure you want to reset your progress?</Text>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={[styles.resetBtn, {borderRightColor: '#5d092a', borderRightWidth: 0.4}]} onPress={() => setResetModalVisible(false)}>
                                <Text style={styles.resetBtnText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.resetBtn} onPress={resetProgress}>
                                <Text style={[styles.resetBtnText, {fontWeight: '600', color: '#ff0000'}]}>Reset</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        
      </View>
    )
};

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginBottom: 16
    },

    btnText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#000',
        marginRight: 20
    },
  
    container: {
        marginTop: -7,
        width: '100%',
        paddingVertical: 66,
        paddingHorizontal: 20,
        backgroundColor: '#ff9e36',
        borderRadius: 40,
        marginBottom: 20,
    },

    text: {
        fontSize: 36,
        lineHeight: 46,
        fontWeight: '800',
        color: '#5d092a'
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

    modalLayout: {
        backgroundColor: 'rgba(139, 22, 67, 0.5)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    modalContent: {
        width: 273,
        borderRadius: 15,
        backgroundColor: '#ff9e36',
        alignItems: 'center',
        paddingTop: 16
    },

    resetTitle: {
        fontSize: 17,
        lineHeight: 22,
        fontWeight: '600',
        color: '#5d092a',
        marginBottom: 2,
        width: '80%',
        textAlign: 'center'
    },

    resetText: {
        fontSize: 13,
        lineHeight: 18,
        fontWeight: '500',
        color: '#5d092a',
        marginBottom: 16,
        width: '80%',
        textAlign: 'center'
    },

    resetBtn: {
        width: '50%',
        borderTopColor: '#5d092a',
        borderTopWidth: 0.4,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },

    resetBtnText: {
        fontSize: 17,
        lineHeight: 22,
        fontWeight: '500',
        color: '#5d092a',
    }
  
});

export default AppSettings;