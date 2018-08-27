import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-material-ui';

export default class BottomNav extends Component {
  state = {
    active: 'routine'
  };
  render() {
    return (
      <BottomNavigation active={this.state.active} hidden={false}>
        <BottomNavigation.Action
          key="routine"
          icon="bookmark-border"
          label="Routine"
          onPress={() => {
            this.setState({ active: 'routine' });
            this.props.onPageChange('routine');
          }}
        />
        <BottomNavigation.Action
          key="exam"
          icon="book"
          label="Exam"
          onPress={() => {
            this.setState({ active: 'exam' });
            this.props.onPageChange('exam');
          }}
        />
        <BottomNavigation.Action
          key="about"
          icon="info"
          label="About"
          onPress={() => {
            this.setState({ active: 'about' });
            this.props.onPageChange('about');
          }}
        />
      </BottomNavigation>
    );
  }
}
