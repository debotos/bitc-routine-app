import React from 'react';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';
import {
  Toolbar,
  COLOR,
  ThemeContext,
  getTheme
} from 'react-native-material-ui';
import store from 'react-native-simple-store';

import AppBar from './components/AppBar';
import BottomNav from './components/BottomNav';
import Routine from './screens/Routine';
import About from './screens/About';
import Exam from './screens/Exam';

const uiTheme = {
  palette: {
    primaryColor: COLOR.blue500
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
          function() {
            console.log('Data Fetched Successfully & saving for offline!');
            store.update('APP_DATA', responseJson);
          }
        );
      })
      .catch(error => {
        console.log('Something bad happen at API call =>', error);

        store.get('APP_DATA').then(offline_res => {
          // console.log('Previous APP_DATA -> ', offline_res);
          if (offline_res) {
            alert(
              `Warning! No Internet Connection! You aren't going to get updated Routine!`
            );
            this.setState(
              {
                isLoading: false,
                dataSource: offline_res
              },
              function() {
                console.log('Application using offline Data');
              }
            );
          } else {
            // It is the first time user starting the app
            alert(
              'No internet connection found! First time you have to connect to internet!'
            );
          }
        });
        if (condition) {
        }
      });
  }
  onPageChange = page => this.setState({ page });
  search = search => this.setState({ search });

  filterBySearchInput = (searchText, routineData) => {
    let semestersNameArray = [];
    for (let key in routineData) {
      semestersNameArray.push(key);
    }

    let matchedSemesters = semestersNameArray.filter(singleSemester => {
      let textMatch = singleSemester
        .toUpperCase()
        .includes(searchText.toUpperCase());
      return textMatch;
    });

    let result = {};
    matchedSemesters.forEach(singleItem => {
      result[singleItem] = routineData[singleItem];
    });

    return result;
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      page: 'routine',
      search: ''
    };
  }

  render() {
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
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        {this.state.page === 'routine' && <AppBar search={this.search} />}
        {this.state.page === 'routine' && (
          <Routine
            dataSource={this.filterBySearchInput(
              this.state.search,
              this.state.dataSource.routine
            )}
          />
        )}
        {this.state.page === 'exam' && <Toolbar centerElement="Exam Date" />}
        {this.state.page === 'exam' && (
          <Exam
            dataSource={
              this.state.dataSource.exams ? this.state.dataSource.exams : []
            }
          />
        )}
        {this.state.page === 'about' && <Toolbar centerElement="About" />}
        {this.state.page === 'about' && <About />}

        <View>
          <BottomNav onPageChange={this.onPageChange} />
        </View>
      </ThemeContext.Provider>
    );
  }
}
// style={{ marginTop: -100 }}
const styles = StyleSheet.create({});

export default App;
