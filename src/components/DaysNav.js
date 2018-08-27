import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLOR } from 'react-native-material-ui';

export const getToday = () => {
  return ['sun', 'mon', 'tues', 'wed', 'thu', 'fri', 'sat'][
    new Date().getDay()
  ];
};

export default class DaysNav extends Component {
  constructor(props) {
    super(props);
    this.state = { day: getToday() };
  }
  render() {
    let { day } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.setState({ day: 'sat' });
            this.props.dayChanged('sat');
          }}
        >
          <View>
            <Text style={day === 'sat' ? styles.activeDay : styles.day}>
              Sat
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({ day: 'sun' });
            this.props.dayChanged('sun');
          }}
        >
          <View>
            <Text style={day === 'sun' ? styles.activeDay : styles.day}>
              Sun
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({ day: 'mon' });
            this.props.dayChanged('mon');
          }}
        >
          <View>
            <Text style={day === 'mon' ? styles.activeDay : styles.day}>
              Mon
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({ day: 'tues' });
            this.props.dayChanged('tues');
          }}
        >
          <View>
            <Text style={day === 'tues' ? styles.activeDay : styles.day}>
              Tues
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({ day: 'wed' });
            this.props.dayChanged('wed');
          }}
        >
          <View>
            <Text style={day === 'wed' ? styles.activeDay : styles.day}>
              Wed
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({ day: 'thu' });
            this.props.dayChanged('thu');
          }}
        >
          <View>
            <Text style={day === 'thu' ? styles.activeDay : styles.day}>
              Thu
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: -15,
    marginBottom: 8
  },
  day: {
    fontWeight: 'bold',
    padding: 5
  },
  activeDay: {
    fontWeight: 'bold',
    color: COLOR.blue500,
    padding: 5
  }
});
