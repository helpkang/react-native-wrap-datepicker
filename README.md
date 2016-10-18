# react-native-wrap-datepicker



DatePickerAndroid ios same use

iosCloseButton append custom close, apply button

* install
```
npm i -S react-native-wrap-datepicker
```

* usage

```
var React = require('react');
var ReactNative = require('react-native');
var {
  DatePickerIOS,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  AppRegistry
} = ReactNative;

import DatePicker from "react-native-wrap-datepicker"

class DatePickerExample extends React.Component {

  async open() {
    try {
      const {action, year, month, day} = await this.picker.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date(2020, 4, 25)
      });
      if (action !== DatePicker.dismissedAction) {
        // Selected year, month (0-11), day
        console.log(`year ${year}, month ${month}, day ${day} action ${action}`)
      }else{
        console.log('dismissedAction~~~~~~~~~~~~')
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

  render() {
    // Ideally, the timezone input would be a picker rather than a
    // text input, but we don't have any pickers yet :(
    return (
      <View>
        <DatePicker ref={picker => this.picker = picker} iosCloseButton={

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={()=>this.picker.cancel()}
                                style={{ width: 85, height:30 , alignItems: 'center', }}
                                >
                                <Text>Cancel custom</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>this.picker.ok()}
                                style={{ width: 85, height:50, alignItems: 'center', }}
                                >
                                <Text> O K custom</Text>
                            </TouchableOpacity>
                        </View> 
        }/>
        <View style={{ height: 100 }} />
        <TouchableOpacity onPress={() => this.open()}>
          <Text>달력 보이기</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DatePickerExample
AppRegistry.registerComponent('DatePickerExample', () => DatePickerExample);
```

