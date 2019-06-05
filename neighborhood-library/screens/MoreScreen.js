import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { ScrollView, StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';


export default class MoreScreen extends React.Component {
  static navigationOptions = {
    title: '{username}',
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
      <ScrollView>
        <List.Item 
        title="Recommendations"
        left={props => <List.Icon {...props} icon="favorite" />}
        />
        <List.Item 
        title="Friends"
        left={props => <List.Icon {...props} icon="send" />}
        />
        <List.Item 
        title="Holds"
        left={props => <List.Icon {...props} icon="stop" />}
        />
        <List.Item 
        title="Due Dates"
        left={props => <List.Icon {...props} icon="timer" />}
        />
        <List.Item 
        title="Privacy"
        left={props => <List.Icon {...props} icon="person" />}
        />
        <List.Item 
        title="Settings"
        left={props => <List.Icon {...props} icon="settings" />}
        />
        <List.Item 
        title="Billing"
        left={props => <List.Icon {...props} icon="gesture" />}
        />

      </ScrollView>
    )
    
  }
}
