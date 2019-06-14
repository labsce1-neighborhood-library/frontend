import React from 'react';
import { ScrollView, StyleSheet, Text, Button, View } from 'react-native';
// import Expo from 'expo';
import { Google } from 'expo';
import { androidClientId, iosClientId } from "../API";

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Links',
    };
    
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

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.mainText}>
                  Treat Yo' Shelf
                </Text>
                <Text style={styles.sideText}>
                  Log in to find a great book.
                </Text>
                <View style={[{ width: "50%", margin: 10, backgroundColor: "white"}]}>
                  <Button 
                  style={styles.loginButton}
                  onPress={this.signInWithGoogleAsync.bind(this)}
                  title= "Continue with Google"
                  />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        paddingTop: 120,
        backgroundColor: '#2C333D',
    },
    loginButton: {
      paddingBottom: 20,
      paddingHorizontal: 20,
      color: '#fff',
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
    }
});