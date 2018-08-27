import React, { Component } from 'react';
import { Card, ListItem } from 'react-native-material-ui';
import { Text, View, StyleSheet } from 'react-native';

export default class SemesterCard extends Component {
  render() {
    return (
      <View>
        <Card>
          <ListItem
            centerElement={{
              primaryText: 'Mike Wiliams'
              //secondaryText: '4 weeks ago'
            }}
          />
          <View style={styles.textContainer}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16
  }
});
