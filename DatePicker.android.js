'use strict';

import { Component } from 'react'
import ReactNative, {
    DatePickerAndroid,
} from 'react-native'

import autobind from 'autobind-decorator'

export default class DatePicker extends Component {
    
    @autobind
    open(options) {
        return DatePickerAndroid.open(options)
    }
    
    render() {
        return null
    }
}
