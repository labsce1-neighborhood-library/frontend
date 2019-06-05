import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions, 
    Icon
} from "react-native";
import { List } from 'react-native-paper';
import Category from '../components/Category';
// import '../assets/images/'
const { height, width } = Dimensions.get('window')

export default class BrowseScreen extends React.Component {
  static navigationOptions = {
    title: 'Neighborhood Shelves',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#2C333D',
    }
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    // return <ExpoConfigView />;
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
            
            <ScrollView
                scrollEventThrottle={16}
            >
                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                    <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                        Here are some great books for you to check out.
                    </Text>

                    <View style={{ height: 130, marginTop: 20 }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <Category imageUri={require('../assets/images/antifragile.jpg')}
                                name="Antifragile"
                            />
                            <Category imageUri={require('../assets/images/carnegie.jpg')}
                                name="How to Win Friends and Influence People"
                            />
                            <Category imageUri={require('../assets/images/skininthegame.jpg')}
                                name="Skin in the Game"
                            />
                        </ScrollView>
                    </View>
                    <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 24, fontWeight: '700' }}>
                            Featured Book
                        </Text>
                        <Text style={{ fontWeight: '100', marginTop: 10 }}>
                            A new selection of titles verified for quality & timelessness

                        </Text>
                        <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                            <Image
                                style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                source={require('../assets/images/skininthegame.jpg')}
                            />

                        </View>
                    </View>
                    <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                        Sarah's favorites
                    </Text>

                    <View style={{ height: 130, marginTop: 20 }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <Category imageUri={require('../assets/images/antifragile.jpg')}
                                name="Antifragile"
                            />
                            <Category imageUri={require('../assets/images/carnegie.jpg')}
                                name="How to Win Friends and Influence People"
                            />
                            <Category imageUri={require('../assets/images/skininthegame.jpg')}
                                name="Skin in the Game"
                            />
                        </ScrollView>
                    </View>
                    <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                        Josh's favorites
                    </Text>

                    <View style={{ height: 130, marginTop: 20 }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <Category imageUri={require('../assets/images/antifragile.jpg')}
                                name="Antifragile"
                            />
                            <Category imageUri={require('../assets/images/carnegie.jpg')}
                                name="How to Win Friends and Influence People"
                            />
                            <Category imageUri={require('../assets/images/skininthegame.jpg')}
                                name="Skin in the Game"
                            />
                        </ScrollView>
                    </View>
                    
                </View>
            </ScrollView>

        </View>
    </SafeAreaView>
    )
    
  }
}
