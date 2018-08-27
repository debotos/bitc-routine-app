import React, { Component } from 'react';
import { Card, COLOR, ListItem, Divider } from 'react-native-material-ui';
import {
  Text,
  View,
  StyleSheet,
  WebView,
  BottomNavigation
} from 'react-native';

import DaysNav from './DaysNav';
import { getToday } from './DaysNav';
import SingleClassInfo from './SingleClassInfo';

export default class SemesterCard extends Component {
  state = {
    selectedDay: getToday()
  };

  dayChanged = selectedDay => this.setState({ selectedDay });

  renderSingleDayData(day) {
    const days = this.props.data;
    return <SingleClassInfo day={day} classes={days[day]} />;
  }

  /* 
  renderAllDays() {
    const days = this.props.data;
    const cards = [];
    for (let key in days) {
      cards.push(
        <SingleClassInfo
          day={key}
          classes={days[key]} // data is an obj {sat:[], sun:[]}
          key={key + 'day'}
        />
      );
    }
    return cards;
  }
  */

  render() {
    let { semester } = this.props;
    let { selectedDay } = this.state;
    return (
      <View>
        <Card>
          <ListItem
            centerElement={
              <WebView
                source={{
                  html: `<div style="margin-left: -5px;"><span style="color: ${
                    COLOR.green500
                  };"><strong>${semester}</strong></span></div>`
                }}
              />
            }
          />
          <DaysNav dayChanged={this.dayChanged} />
          <Divider />
          <View style={styles.textContainer}>
            {this.renderSingleDayData(selectedDay)}
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 0
  }
});
