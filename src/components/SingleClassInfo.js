import React, { Component } from 'react';
import { COLOR } from 'react-native-material-ui';
import { Text, View, StyleSheet } from 'react-native';

let days = {
  sat: 'Saturday',
  sun: 'Sunday',
  mon: 'Monday',
  tues: 'Tuesday',
  wed: 'Wednesday',
  thu: 'Thursday'
};

class SingleClassInfo extends Component {
  renderAllSubjects() {
    const classes = this.props.classes;
    return classes.map((SingleClass, index) => (
      <View style={styles.subjectContainer} key={index}>
        <Text style={styles.period}>{`(${SingleClass.period}) `}</Text>
        <Text style={styles.subject}>
          {`${SingleClass.subject.title}(${SingleClass.subject.code}) `}{' '}
          <Text>{`by ${SingleClass.teacher.name}`}</Text>
        </Text>
      </View>
    ));
  }
  render() {
    let { classes, day } = this.props;
    return (
      <View>
        <View style={{ display: 'flex', alignItems: 'center', marginTop: 3 }}>
          <Text style={styles.day}>{days[day]}</Text>
        </View>
        {this.renderAllSubjects()}
      </View>
    );
  }
}

export default SingleClassInfo;

const styles = StyleSheet.create({
  day: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '600'
  },
  period: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '500'
  },
  subject: {
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: '500'
  },
  subjectContainer: {
    display: 'flex',
    alignItems: 'center'
  }
});
