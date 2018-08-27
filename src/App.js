import React from 'react';
import {
  ScrollView,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  Platform
} from 'react-native';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';

import AppBar from './components/AppBar';
import BottomNav from './components/BottomNav';
import SemesterCard from './components/SemesterCard';

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
    accentColor: COLOR.pink500
  },
  toolbar: {
    container: {
      height: 50
    }
  }
};

const API_ENDPOINT = 'https://bitc-routine-dev.herokuapp.com/api/client';

class App extends React.Component {
  componentDidMount() {
    return fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: null };
  }

  renderAllSemester() {
    const routine = this.state.dataSource;
    const cards = [];
    for (let key in routine) {
      cards.push(<SemesterCard key={'semester_' + key} />);
    }
    return cards;
  }
  render() {
    let routine = this.state.dataSource;

    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <ThemeContext.Provider
        value={getTheme(uiTheme)}
        style={{
          ...Platform.select({
            ios: { fontFamily: 'Arial' },
            android: { fontFamily: 'Roboto' }
          })
        }}
      >
        <AppBar />
        <ScrollView>{this.renderAllSemester()}</ScrollView>
        <BottomNav />
      </ThemeContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
