import React from 'react';
import { ScrollView, StyleSheet, Text, Button, View, Image, TouchableOpacity } from 'react-native';
import {TextInput } from 'react-native-paper';
import Expo from 'expo';
import { Google } from 'expo';
import { androidClientId, iosClientId } from "../API";

export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    static navigationOptions = {
        title: 'Links',
    };

    componentWillMount() {
        this.setState = {
          value: {
            email: '',
            password: null,
          }
        }
      }
    
    async signInWithGoogleAsync() {
        try {
          const result = await Google.logInAsync({
            androidClientId: androidClientId,
            iosClientId: iosClientId,
            scopes: ['profile', 'email'],
          });
          console.log("hello world", {result}, androidClientId, iosClientId);
          if (result.type === 'success') {
            this.props.navigation.navigate('Main');
            return result.accessToken;
          } else {
            console.log("cancelled")
            return { cancelled: true };
          }
        } catch (e) {
          console.log("error", e);
          console.log(Google);
          return { error: true };
        }
      }

      _handleAdd = () => {
        const value = this.refs.form.getValue();
        //if form is valid 
        if(value) {
          const data = {
            username: value.username,
            password: value.password,
          }
  
          const json = JSON.stringfy(data);
          axios.get('https://localhost:7777/register', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
              Accept: 'application/json'
            }, 
            body: json,
          })
          .then((res) => res.json())
          .then(() => {
            alert('Welcome and enjoy the books!')
          })
          .catch(() => {
            alert('there was an error registering')
          })
          .done()
        } else { 
          alert('please fix the errors and try again');
        }
      }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.mainText}>
                  Register Now And Treat Yo' Shelf
                </Text>
                <Text style={styles.sideText}>
                  Sign Up in to find a great book.
                </Text>
                <View>
                <TextInput placeholder='username' />
                </View>
                <View style={styles.SeparatorLine} />
                <View>
                <TextInput placeholder='username' />
                </View>
                <View style={styles.SeparatorLine} />
                <View>
                <TextInput placeholder='password' />
                </View>
                <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
                <Image
                source={require('../assets/images/google-sign-in.png')}
                style={styles.ImageIconStyle}
                />
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        paddingTop: 120,
        paddingLeft: 30,
        backgroundColor: '#2C333D',
    },
    loginButton: {
      // paddingBottom: 20,
      // paddingHorizontal: 30,
      // paddingLeft: 120,
      // color: '#fff',
    },
    mainText: {
      fontSize: 48,
      paddingHorizontal: 15,
      color: '#fff',

    },
    sideText: {
      fontSize: 24,
      color: '#fff',
      paddingBottom: 20,
      paddingHorizontal: 20,
    },
    SeparatorLine: {
      backgroundColor: '#2C333D',
      width: 1,
      height: 40,
    },
    ImageIconStyle: {
      padding: 10,
      margin: 5,
      height: 100,
      width: 300,
      resizeMode: 'stretch',
    },
});