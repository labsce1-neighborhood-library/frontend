import React, { Component } from 'react';
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
} from 'react-native';
import Category from '../components/Category';
// import { Icon } from 'react-native-paper/typings/components/Avatar';

const { height, width } = Dimensions.get('window')

export default class BrowseScreen extends React.Component {

    componentWillMount() {
        this.startHeaderHeight = 80
        if(Platform.OS == 'android'){
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render() {
        return(
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd'}}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                            <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Try Antifragile, Nassim Taleb"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                            />
                        </View>
                    </View>
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                What kind of books are you looking into?
                            </Text>
                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/images/carnegie.jpg')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../assets/images/antifragile.jpg')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('../assets/images/skininthegame.jpg')}
                                        name="Resturant"
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

