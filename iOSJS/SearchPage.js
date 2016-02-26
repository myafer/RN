/**
 * Created by koudaiwang on 16/2/5.
 */

'use strict';
import React, {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ActivityIndicatorIOS,
    Image,
    Component,
    ScrollView,
    ListView,
    Alert,
    AlertIOS,
} from 'react-native';

module.exports = React.createClass({

    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(['111', '11111', '11111', '11111', '11111',
                '11111', '11111', '11111', '11111', '11111', '11111', '11111', '11111', '11111', '11111', '11111']),
        };
    },
    _renderRow: function(rowData: string, sectionID: number, rowID: number) {

        return (
            <TouchableHighlight>
                <View>
                    <View style={styles.row}>
                        
                       <View style={styles.rowSubView}>
                        <Text>{rowData}</Text>
                       </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
        );
    },

    render: function() {
        return (
            <ListView
                style={styles.view}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}/> 

        );
    },

});


var styles = StyleSheet.create({
    text: {
        color: 'red',
        backgroundColor: '#666666'
    },
    view: {
        width: 375,
        height: 300,
        backgroundColor: 'white'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 60,
        backgroundColor: '#F6F6F6',
    },
    separator: {
        height: 0.5,
        backgroundColor: '#CCCCCC',
    },
    rowSubView: {
        top: 0,
        height: 20,
        width: 300,
        backgroundColor: 'blue',
    }
});
















