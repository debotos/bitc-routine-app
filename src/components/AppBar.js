import React from 'react';
import { Toolbar } from 'react-native-material-ui';
import store from 'react-native-simple-store';
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
              console.log('Previous Search -> ', res.text);
              if (res.text) {
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
