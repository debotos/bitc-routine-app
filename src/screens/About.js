import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  ScrollView,
  Linking,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class About extends Component {
  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View>
          <Image
            source={require('../assets/BITC_logo.jpg')}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <Text
          style={{ marginTop: 10, fontFamily: 'Roboto', fontWeight: '500' }}
        >
          You Can Get Always Updated Routine through it.
        </Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://facebook.github.io/react-native/').catch(
              err => console.error('An error occurred', err)
            )
          }
        >
          <Text
            style={{ marginTop: 3, fontFamily: 'Roboto', fontWeight: '500' }}
          >
            This app is build using React Native.{' '}
            <Text style={{ textDecorationLine: 'underline', color: '#4F8EF7' }}>
              Visit
            </Text>
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 3,
            marginBottom: 5,
            fontFamily: 'Roboto',
            fontWeight: '500'
          }}
        >
          For any issue or if any feature needed just contact
        </Text>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://github.com/debotos').catch(err =>
                console.error('An error occurred', err)
              )
            }
          >
            <Icon
              style={{ marginRight: 10 }}
              name="github"
              size={30}
              color="#000000"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://m.facebook.com/debotos.das.1997').catch(
                err => console.error('An error occurred', err)
              )
            }
          >
            <Icon name="facebook-official" size={30} color="#3b5998" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
