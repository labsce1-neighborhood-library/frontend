import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';


export default class ShelfScreen extends React.Component {
  static navigationOptions = {
    title: 'My Shelf',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#2C333D',
    }
    
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <List.Item
        title= "Borrowed"
        description= "10 books"
        left={props => <List.Icon {...props} icon="book" />}
        />
        <List.Item
        title= "Loaned Out"
        description= "4 books"
        left={props => <List.Icon {...props} icon="book" />}
        />
        <List.Item
        title= "Home Library"
        description= "150 books"
        left={props => <List.Icon {...props} icon="book" />}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
