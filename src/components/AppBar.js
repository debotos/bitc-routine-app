import React from 'react';
import { Toolbar } from 'react-native-material-ui';
import store from 'react-native-simple-store';
import { Linking } from 'react-native';

const ROUTINE_PDF_API = 'https://bitc-routine-dev.herokuapp.com/api/client/pdf';
export default class AppBar extends React.Component {
  onChangeText = text => {
    this.setState({ search: text });
    this.props.search(text);
  };
  state = {
    search: ''
  };
  render() {
    return (
      <Toolbar
        //leftElement="menu"
        rightElement={{
          menu: {
            icon: 'more-vert',
            labels: ['Download PDF']
          }
        }}
        onRightElementPress={label => {
          console.log('Label Pressed => ', label);
          if (label.index === 0) {
            Linking.openURL(ROUTINE_PDF_API).catch(err =>
              console.error('An error occurred', err)
            );
          }
        }}
        centerElement="BITC Class Routine"
        searchable={{
          autoFocus: true,
          placeholder: 'Search Semester',
          autoCapitalize: 'characters',
          onChangeText: this.onChangeText,
          onSearchClosed: () => this.onChangeText(''),
          onSearchCloseRequested: () => this.onChangeText(''),
          onSubmitEditing: () => {
            store.update('search', {
              text: this.state.search
            });
          },
          onSearchPressed: () => {
            store.get('search').then(res => {
              if (res && res.text) {
                this.onChangeText(res.text);
              }
            });
          }
        }}
        //rightElement={{
        //  menu: {
        //   icon: 'more-vert',
        //   labels: ['item 1', 'item 2']
        //  }
        // }}
        //onRightElementPress={label => {
        // console.log(label);
        //}}
      />
    );
  }
}
