/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
   AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

var SearchPage = require('./iOSJS/SearchPage');
//var REQUEST_URL = 'http://platform.sina.com.cn/sports_all/client_api?app_key=3571367214&_sport_t_=football&_sport_s_=opta&_sport_a_=teamOrder&type=213&season=2015&format=json';
var REQUEST_URL = 'http://api.qdai.com.cn/index/PhoneProList?Operator=373932c9-51e1-4b81-ad65-69dbc6dc0078&DeviceType=7&nowpage=1&pagesize=4';
var sbsb = React.createClass({

    getInitialState: function() {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    },
    componentDidMount: function() {
        this.fetchData();
    },
    fetchData: function() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData.contentStr.ProList);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.contentStr.ProList),
                    loaded: true,
                });
            })
            .done();
    },
    renderRow: function (person){
        return (
            <TouchableHighlight>
        <View style={ styles.cell }>
                <Text>{person.ProName}</Text>
        </View>
            </TouchableHighlight>
        );
    },

    render() {
      if (!this.state.loaded) {
          return <View></View>;
      }

      return (

          <View style={ styles.listView }>
              <ListView dataSource={ this.state.dataSource } renderRow={ this.renderRow } />
          </View>
      );
  }
});

const styles = StyleSheet.create({
  text: {
    color: 'red',
    backgroundColor: 'blue',
    fontSize: 30,
    margin: 80
  },
   container: {
    flex: 1,
    backgroundColor: '#E7EAEC'
  },
   navigator: {
    backgroundColor: '#E7EAEC'
  },
    listView: {
        height: 500,
        paddingTop: 20,
        backgroundColor: 'blue',
    },
    cell: {
        height: 50,
        paddingTop: 20,
        backgroundColor: 'red',
    }
});


AppRegistry.registerComponent('sbsb', () => sbsb);











