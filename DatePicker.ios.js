'use strict';

import React, { Component } from 'react'
import ReactNative, {
    DatePickerIOS,
    Modal,
    TouchableOpacity,
    Text,
    View,
} from 'react-native'

import autobind from 'autobind-decorator'

export default class DatePicker extends Component {


    state = {
        visible: false,
        date: null,

    }

    @autobind
    open(options) {
        let date;
        if (options) {
            if (options.date) {
                date = options.date
            }
        }
        if (!date) date = new Date()
        this.setState({ date, visible: true })

        return new Promise((resolv, reject) => {
            this.resolv = resolv
            this.reject = reject
        })

    }

    @autobind
    close() {
        this.setState({ visible: false })
    }

    @autobind
    cancel() {
        this.resolv({
            action: "dismissedAction",
        })
        this.close()
    }

    @autobind
    ok() {
        const {date} = this.state
        this.resolv({
            action: "dateSetAction",
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate(),
        })
        this.close()
    }


    @autobind
    onDateChange(date) {
        this.setState({ date: date });
    }


    render() {
        const { visible, date } = this.state
        const { style } = this.props


        return (
            <Modal ref={(modal) => this.modal = modal}
                visible={visible}
                onRequestClose={this.close}

                >
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        paddingHorizontal: 20,
                        paddingVertical: 100,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                    }}
                    >
                    <View style={[{backgroundColor:'white'}, style]}>

                    {
                        visible ?
                            <DatePickerIOS
                                date={date}
                                mode="date"
                                onDateChange={this.onDateChange}
                                />
                            : null
                    }
                    {
                        visible ? this.getButton() : null
                    }
                    </View>
                </View>
            </Modal >

        )
    }

    @autobind
    getButton() {
        const {iosCloseButton} = this.props

        if (iosCloseButton) return iosCloseButton

        return (
            <View style={{
                flexDirection: 'row', justifyContent: 'center',

            }}>
                <TouchableOpacity onPress={this.cancel}
                    style={{ width: 85, height: 30, alignItems: 'center', }}
                    >
                    <Text>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.ok}
                    style={{ width: 85, height: 50, alignItems: 'center', }}
                    >
                    <Text>O K</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
