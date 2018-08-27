import React, { Component } from 'react';
import { View, WebView, Text, ScrollView } from 'react-native';
import { Card, COLOR, ListItem, Divider } from 'react-native-material-ui';
import moment from 'moment';

export default class Exam extends Component {
  render() {
    let exams = this.props.dataSource;
    return (
      <ScrollView>
        <View>
          {exams.map((singleExamItem, index) => {
            return (
              <Card key={index}>
                <View
                  style={{
                    display: 'flex'
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: 15,
                      fontWeight: '500',
                      marginTop: 10,
                      marginBottom: 10,
                      marginLeft: 10
                    }}
                  >
                    FirstMid: {moment(singleExamItem.firstmid).format('LL')} &
                    FinalMid: {moment(singleExamItem.finalmid).format('LL')}
                  </Text>
                  <Divider />
                  <View style={{ display: 'flex', justifyContent: 'center' }}>
                    {singleExamItem.semesters.map((singleSemester, index) => {
                      return (
                        <View key={index}>
                          <ListItem
                            centerElement={
                              <WebView
                                source={{
                                  html: `<div style="margin-left: -5px;"><span style="color: ${
                                    COLOR.green500
                                  };"><strong>${singleSemester}</strong></span></div>`
                                }}
                              />
                            }
                          />
                        </View>
                      );
                    })}
                  </View>
                </View>
              </Card>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}
