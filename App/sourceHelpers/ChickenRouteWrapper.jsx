import AppNavigationPanel from '../sourceHelpers/AppNavigationPanel.jsx';
import { View, Dimensions, ImageBackground } from 'react-native';

const { height } = Dimensions.get('screen');

const ChickenRouteWrapper = ({ child, menu }) => {
    return (
        <ImageBackground source={require('../sourceAssets/background.png')} style={{ flex: 1 }}>
            <View style={{ width: '100%', height: '100%'}}>
                <View style={{ width: '100%', height: '100%', paddingHorizontal: 20, paddingTop: height * 0.08 }}>{child}</View>
                {
                    menu && (
                        <View style={{ width: '100%', position: 'absolute', bottom: 45, zIndex: 10 }}>
                            <AppNavigationPanel />
                        </View>
                    )
                }
            </View>
        </ImageBackground>
    )
};

export default ChickenRouteWrapper;