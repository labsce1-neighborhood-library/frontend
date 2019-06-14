import React from 'react';
import { ScrollView, StyleSheet, Text, Button } from 'react-native';
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
                <Button 
                onPress={this.signInWithGoogleAsync.bind(this)}
                title= "Google Sign In"
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 150,
        backgroundColor: '#fff',
    },
});