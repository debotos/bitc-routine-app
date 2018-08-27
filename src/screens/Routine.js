import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import SemesterCard from '../components/SemesterCard';

export default class Routine extends Component {
  // Just a function that will generate all semester card view
  renderAllSemester() {
    const routine = this.props.dataSource;
    const cards = [];
    for (let key in routine) {
      cards.push(
        <SemesterCard
          semester={key}
          data={routine[key]} // data is an obj {sat:[], sun:[]}
          key={'semester_' + key}
        />
      );
    }
    return cards;
  }
  render() {
    return <ScrollView>{this.renderAllSemester()}</ScrollView>;
  }
}
